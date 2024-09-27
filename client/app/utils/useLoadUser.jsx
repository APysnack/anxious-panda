import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../userSlice';

const useLoadUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');
        const userString = await AsyncStorage.getItem('user');
        const user = userString ? JSON.parse(userString) : null;

        if (token && user) {
          dispatch(setUser({ user, token }));
        }
      } catch (error) {
        console.error('Failed to load user:', error);
      }
    };

    loadUser();
  }, [dispatch]);
};

export default useLoadUser;
