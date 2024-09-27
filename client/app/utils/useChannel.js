import React, { useState, useEffect, useRef } from 'react';

global.addEventListener = () => {};
global.removeEventListener = () => {};

export default function useChannel(actionCable) {
  const [connected, setConnected] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const channelRef = useRef();

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  const unsubscribe = () => {
    setSubscribed(false);
    if (channelRef.current) {
      console.log('INFO: Unsubscribing from ' + channelRef.current.identifier);
      actionCable.subscriptions.remove(channelRef.current);
      channelRef.current = null;
    }
  };

  const send = (type, payload) => {
    if (subscribed && !connected) throw 'ERROR: not connected';
    if (!subscribed) throw 'ERROR: not subscribed';
    try {
      channelRef.current.perform(type, payload);
    } catch (e) {
      throw 'ERROR: ' + e;
    }
  };

  const subscribe = (data, callbacks) => {
    console.log(`Connecting to ${data.channel}`);
    const channel = actionCable.subscriptions.create(data, {
      received: (x) => {
        if (callbacks.received) callbacks.received(x);
      },
      initialized: () => {
        console.log('Init ' + data.channel);
        setSubscribed(true);
        if (callbacks.initialized) callbacks.initialized();
      },
      connected: () => {
        console.log('Connected to ' + data.channel);
        setConnected(true);
        if (callbacks.connected) callbacks.connected();
      },
      disconnected: () => {
        console.log('INFO: Disconnected');
        setConnected(false);
        if (callbacks.disconnected) callbacks.disconnected();
      },
    });
    channelRef.current = channel;
  };

  return { subscribe, unsubscribe, send };
}
