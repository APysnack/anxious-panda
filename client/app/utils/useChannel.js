import React, { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const getJwtToken = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken');
      if (token !== null) {
        return token;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  };

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

  const subscribe = async (data, callbacks) => {
    console.log(`Connecting to ${data.channel}`);
    const params = {
      ...data,
      jwt: await getJwtToken(),
    };

    const channel = actionCable.subscriptions.create(params, {
      received: (x) => {
        if (callbacks.received) callbacks.received(x);
      },
      initialized: () => {
        console.log('Init ' + data.channel);
        setSubscribed(true);
        if (callbacks.initialized) callbacks.initialized();
      },
      connected: () => {
        console.log(`Connected to ${data.channel} ${data.room_id}`);
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
