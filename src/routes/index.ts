import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as PetsController from '../controllers/petsController';

export const route = Router();

route.get('/', HomeController.home);

route.get('/pets', PetsController.petsHome);
route.get('/pets/:slug', PetsController.petsByCategory);

route.get('/search');
