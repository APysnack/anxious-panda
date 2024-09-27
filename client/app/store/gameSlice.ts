import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GameType } from '../interfaces/models';
const SERVER_URL = 'http://localhost:3000';

interface GamesState {
  games: GameType[];
  loading: boolean;
  error: string | null;
}

const initialState: GamesState = {
  games: [],
  loading: false,
  error: null,
};

export const fetchGames = createAsyncThunk<GameType[]>(
  'games/fetchGames',
  async () => {
    const response = await fetch(`${SERVER_URL}/games`);
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }
    const data = await response.json();
    return data;
  }
);

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch games';
      });
  },
});

export default gameSlice.reducer;
