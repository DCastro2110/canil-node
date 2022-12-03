import { Request, Response } from 'express';
import { Page } from '../models/Page';

import { Pet } from '../models/Pet';

export function search(req: Request, res: Response) {
  const { q: query } = req.query;

  if (!query || typeof query !== 'string') {
    return res.redirect('/pets');
  }

  if (query.trim() === '') {
    return res.redirect('/pets');
  }

  res.render('pages/main', {
    infos: Page.getInfo('search'),
    menuItems: Page.getItemsForMenu('search'),
    data: Pet.getByName(query),
    showBanner: false,
    inputValue: query,
  });
}
