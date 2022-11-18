import { TournamentRepository } from '../../../../../src/Contexts/Tournaments/domain/TournamentRepository';
import { Tournament } from '../../../../../src/Contexts/Tournaments/domain/Tournament';

export class TournamentRepositoryMock implements TournamentRepository {
  private mockSave = jest.fn();

  async save(tournament: Tournament): Promise<void> {
    this.mockSave(tournament);
  }

  assertLastSavedTournamentIs(expected: Tournament): void {
    const mock = this.mockSave.mock;
    const lastSavedTournament = mock.calls[mock.calls.length - 1][0] as Tournament;
    expect(lastSavedTournament).toBeInstanceOf(Tournament);
    expect(lastSavedTournament.id).toEqual(expected.id);
  }

}
