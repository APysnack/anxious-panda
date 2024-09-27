export interface GameType {
  id: string;
  name: string;
}

export interface GameRoomType {
  id: string;
  name: string;
  game: GameType | null;
}

export interface UserType {
  id: string;
  email: string | null;
}
