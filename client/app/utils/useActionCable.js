import React, { useEffect, useMemo } from 'react';
import { createConsumer } from '@rails/actioncable';

const SOCKET_URL = 'ws://localhost:3000/cable';

export default function useActionCable() {
  const actionCable = useMemo(() => createConsumer(SOCKET_URL), []);

  useEffect(() => {
    return () => {
      console.log('Disconnect Action Cable');
      actionCable.disconnect();
    };
  }, []);

  return { actionCable };
}
