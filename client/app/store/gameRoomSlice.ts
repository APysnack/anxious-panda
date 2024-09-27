import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GameRoomType } from '../interfaces/models';
const SERVER_URL = 'http://localhost:3000';

interface GameRoomsState {
  gameRooms: GameRoomType[];
  loading: boolean;
  error: string | null;
}

const initialState: GameRoomsState = {
  gameRooms: [],
  loading: false,
  error: null,
};

export const fetchGameRooms = createAsyncThunk<GameRoomType[], string>(
  'games/fetchGameRooms',
  async (gameId) => {
    const response = await fetch(`${SERVER_URL}/game_rooms?game_id=${gameId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch game rooms');
    }
    const data = await response.json();
    return data;
  }
);

const gameRoomSlice = createSlice({
  name: 'gameRooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameRooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGameRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.gameRooms = action.payload;
      })
      .addCase(fetchGameRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch game rooms';
      });
  },
});

export default gameRoomSlice.reducer;
