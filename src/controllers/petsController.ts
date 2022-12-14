import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { Page } from '../models/Page';

import { species, TSpecie } from '../libs/species';

import { activeTheSelectedMenuItem } from '../utils/activeTheSelectedMenuItem';

export function petsHome(req: Request, res: Response) {
  res.render('pages/main', {
    infos: Page.getInfo('all'),
    menuItems: Page.getItemsForMenu('all'),
    data: Pet.getAll(),
    showBanner: true,
  });
}

export function petsByCategory(req: Request, res: Response) {
  const { slug } = req.params;

  if (!species.includes(slug)) {
    res.render('pages/notFound', {
      menuItems: Page.getItemsForMenu(''),
    });
  }

  res.render('pages/main', {
    infos: Page.getInfo(slug as TSpecie),
    menuItems: Page.getItemsForMenu(slug as TSpecie),
    data: Pet.getBySpecie(slug as TSpecie),
    showBanner: true,
  });
}
