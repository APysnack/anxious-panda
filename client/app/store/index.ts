import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import gameReducer from './gameSlice';
import gameRoomReducer from './gameRoomSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    games: gameReducer,
    gameRooms: gameRoomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
