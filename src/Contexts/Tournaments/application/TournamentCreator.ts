import { Tournament } from '../domain/Tournament';
import { TournamentRepository } from '../domain/TournamentRepository';

export class TournamentCreator {
  private repository: TournamentRepository;

  constructor(repository: TournamentRepository) {
    this.repository = repository;
  }

  async run(id: string, name: string): Promise<void> {
    const tournament = new Tournament({ id, name });

    return this.repository.save(tournament);
  }
}
