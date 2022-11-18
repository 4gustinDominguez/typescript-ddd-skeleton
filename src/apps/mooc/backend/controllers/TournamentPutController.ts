import { Request, Response} from "express";
import httpStatus from "http-status";
import { TournamentCreator } from "../../../../Contexts/Tournaments/application/TournamentCreator";
import { Controller } from "./Controller";

export class TournamentPutController implements Controller{
    constructor(private tournamentCreator: TournamentCreator){}

    async run(req: Request, res: Response){
        const {id, name} = req.body;

        await this.tournamentCreator.run(id, name); 
        
        res.status(httpStatus.CREATED).send();
    }
}