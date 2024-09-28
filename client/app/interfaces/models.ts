export interface GameRoomType {
  id: string;
  name: string;
  game: GameType | null;
}

export interface GameType {
  id: string;
  name: string;
}

export interface UserType {
  id: string | null;
  email: string | null;
}
