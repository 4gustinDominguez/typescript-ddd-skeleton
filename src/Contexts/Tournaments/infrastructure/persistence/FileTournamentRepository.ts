import { deserialize, serialize } from 'bson';
import fs from 'fs';
import { Tournament } from '../../domain/Tournament';
import { TournamentRepository } from '../../domain/TournamentRepository';

export class FileTournamentRepository implements TournamentRepository {
    private FILE_PATH = `${__dirname}/tournaments`;

    async save(tournament: Tournament): Promise<void> {
        fs.promises.writeFile(this.filePath(tournament.id), serialize(tournament));
    }

    async search(tournamentId: string): Promise<Tournament> {
        const tournamentData = await fs.promises.readFile(this.filePath(tournamentId));
        const {id, name} = deserialize(tournamentData);
        return new Tournament({id, name});
    }

    private filePath(id: string): string {
        return `${this.FILE_PATH}.${id}.repo`;
    }
}
