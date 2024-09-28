import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as originalUseDispatch,
  useSelector,
} from 'react-redux';
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

export const useAppDispatch = () => originalUseDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
