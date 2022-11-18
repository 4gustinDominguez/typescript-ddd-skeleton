import { Tournament } from '../../../../../src/Contexts/Tournaments/domain/Tournament';
import { FileTournamentRepository } from '../../../../../src/Contexts/Tournaments/infrastructure/persistence/FileTournamentRepository';

describe('FileTournamentRepository', () => {

    it('should save a tournament', async() => {
        const expectedTournament = new Tournament({id:'id', name:'name'});
        const repository = new FileTournamentRepository();

        await repository.save(expectedTournament);

        const tournament = await repository.search('id');
        expect(tournament).toEqual(expectedTournament);
    });

});