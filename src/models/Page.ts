type TPage = 'all' | 'dog' | 'cat' | 'fish' | 'search';

const pagesInfo = [
  {
    page: 'all',
    title: 'Todos os animais',
    background: 'allnimals.jpg',
  },
  {
    page: 'dog',
    title: 'Cachorros',
    background: 'banner_dog.jpg',
  },
  {
    page: 'cat',
    title: 'Gatos',
    background: 'banner_cat.jpg',
  },
  {
    page: 'fish',
    title: 'Peixes',
    background: 'banner_fish.jpg',
  },
  {
    page: 'search',
    title: 'Buscar',
    background: undefined,
  },
];

export const Page = {
  getInfo(page: TPage) {
    return pagesInfo.filter((item) => item.page === page);
  },
};
