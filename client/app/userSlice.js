import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      AsyncStorage.setItem('jwtToken', token);
      AsyncStorage.setItem('user', JSON.stringify(user));
      state.user = user;
      state.token = token;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      AsyncStorage.removeItem('jwtToken');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
