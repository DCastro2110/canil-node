import { Request, Response } from 'express';
import { Page } from '../models/Page';

import { Pet } from '../models/Pet';

import { activeTheSelectedMenuItem } from '../utils/activeTheSelectedMenuItem';

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
    data: Pet.getByName(query),
    menuItemsClass: activeTheSelectedMenuItem(''),
    showBanner: false,
    inputValue: query,
  });
}
