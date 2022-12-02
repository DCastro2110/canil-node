import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { Page } from '../models/Page';

import { species, TSpecie } from '../libs/species';

export function petsHome(req: Request, res: Response) {
  res.render('pages/main', {
    infos: Page.getInfo('all'),
    data: Pet.getAll(),
  });
}

export function petsByCategory(req: Request, res: Response) {
  const { slug } = req.params;

  if (!species.includes(slug)) {
    res.send('Página não encontrada');
  }

  res.render('pages/main', {
    infos: Page.getInfo(slug as TSpecie),
    data: Pet.getBySpecie(slug as TSpecie),
  });
}
