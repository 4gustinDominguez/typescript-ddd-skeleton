import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { validateReqSchema } from '.';
import { TournamentPutController } from '../controllers/TournamentPutController';
import container from '../dependency-injection';

export const register = (router: Router) => {
    const reqSchema = [
        body('id').exists().isString(),
        body('name').exists().isString(),
    ];

  const controller:TournamentPutController  = container.get('Apps.mooc.controllers.TournamentPutController');
  router.put('/tournament/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => controller.run(req, res));
};