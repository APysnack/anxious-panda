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

export interface WeaponCardType {
  id: string | null;
  name: string | null;
  data: {
    health: number | null;
    intellect: number | null;
    strength: number | null;
    agility: number | null;
  };
}

export interface RaceCardType {
  id: string | null;
  name: string | null;
  data: {
    health: number | null;
    intellect: number | null;
    strength: number | null;
    agility: number | null;
  };
}
