import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import gameReducer from './gameSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    games: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
