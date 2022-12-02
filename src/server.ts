import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';

import { route } from './routes';

import { activeTheSelectedMenuItem } from './utils/activeTheSelectedMenuItem';

dotenv.config();

const app = express();

// Setting up the template engine
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(route);
// Setting up a default page when route wasn't founded
app.use((req, res) => {
  res.render('pages/notFound', {
    menuItemsClass: activeTheSelectedMenuItem(''),
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`I'm running at http://localhost:${port}`);
});
