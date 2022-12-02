import { TSpecie } from '../libs/species';

export function activeTheSelectedMenuItem(menuItem: TSpecie | 'all' | '') {
  const menuItemsClass = {
    all: '',
    dog: '',
    cat: '',
    fish: '',
  };

  if (menuItem === '') {
    return menuItem;
  }

  menuItemsClass[menuItem] = 'active';

  return menuItemsClass;
}
