import { Tournament } from './Tournament';

export interface TournamentRepository {
  save(tournament: Tournament): Promise<void>;
}
