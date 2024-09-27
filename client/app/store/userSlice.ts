import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserType } from '../interfaces/models';

interface UserState {
  user: UserType | null;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user: UserType; token: string }>
    ) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      AsyncStorage.setItem('jwtToken', token);
      AsyncStorage.setItem('user', JSON.stringify(user));
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      AsyncStorage.removeItem('jwtToken');
      AsyncStorage.removeItem('user');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
