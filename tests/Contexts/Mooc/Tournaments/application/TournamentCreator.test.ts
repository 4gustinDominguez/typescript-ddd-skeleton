import { TournamentCreator } from '../../../../../src/Contexts/Mooc/Tournaments/application/TournamentCreator';
import { Tournament } from '../../../../../src/Contexts/Mooc/Tournaments/domain/Tournament';
import { TournamentRepositoryMock } from '../__mocks__/TournamentRepositoryMock';

let repository: TournamentRepositoryMock;
let creator: TournamentCreator;

beforeEach(() => {
  repository = new TournamentRepositoryMock();
  creator = new TournamentCreator(repository);
});

describe('TournamentCreator', () => {
  it('should create a valid tournament', async () => {

    const id = 'some-id';
    const name = 'some-name';

    const tournament = new Tournament({id, name});

    await creator.run(id, name);

    repository.assertLastSavedTournamentIs(tournament);
  });
});
