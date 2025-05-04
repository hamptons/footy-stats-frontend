export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Goals {
  for: number;
  against: number;
}

export interface TeamStats {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface LeagueTableEntry {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: TeamStats;
  home: TeamStats;
  away: TeamStats;
  update: string;
}

export type LeagueTable = LeagueTableEntry[]; 