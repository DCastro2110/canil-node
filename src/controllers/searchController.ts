import { Request, Response } from 'express';
import { Page } from '../models/Page';

import { Pet } from '../models/Pet';

import { activeTheSelectedMenuItem } from '../utils/activeTheSelectedMenuItem';

export function search(req: Request, res: Response) {
  const { q } = req.query;

  if (!q || typeof q !== 'string') {
    return res.redirect('/pets');
  }

  if (q.trim() === '') {
    return res.redirect('/pets');
  }

  res.render('pages/main', {
    infos: Page.getInfo('search'),
    data: Pet.getByName(q),
    menuItemsClass: activeTheSelectedMenuItem(''),
    showBanner: false,
    inputValue: q,
  });
}
