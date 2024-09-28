import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserType } from '../interfaces/models';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';

interface UserState {
  user: UserType | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const signIn = createAsyncThunk<
  { user: UserType; token: string },
  { email: string; password: string }
>('user/signIn', async ({ email, password }) => {
  const response = await axios.post<{ token: string; user: UserType }>(
    `${SERVER_URL}/sign_in`,
    { email, password },
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

  if (![200, 201].includes(response.status)) {
    throw new Error('Failed to sign in');
  }

  const { token, user } = response.data;

  await AsyncStorage.setItem('jwtToken', token);
  await AsyncStorage.setItem('user', JSON.stringify(user));

  return { user, token };
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      AsyncStorage.removeItem('jwtToken');
      AsyncStorage.removeItem('user');
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to sign in';
      });
  },
});

export const { clearUser, setUser } = userSlice.actions;
export default userSlice.reducer;
