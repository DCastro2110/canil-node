type TPage = 'all' | 'dog' | 'cat' | 'fish' | 'search' | '';

const pagesInfo = [
  {
    page: 'all',
    slug: '/pets',
    title: 'Todos os animais',
    background: 'allanimals.jpg',
  },
  {
    page: 'dog',
    slug: '/pets/dog',
    title: 'Cachorros',
    background: 'banner_dog.jpg',
  },
  {
    page: 'cat',
    slug: '/pets/cat',
    title: 'Gatos',
    background: 'banner_cat.jpg',
  },
  {
    page: 'fish',
    slug: '/pets/fish',
    title: 'Peixes',
    background: 'banner_fish.jpg',
  },
  {
    page: 'search',
    slug: '/search',
    title: 'Animais encontrados, baseado nos parâmetros de busca,',
    background: undefined,
  },
];

export const Page = {
  getInfo(page: TPage) {
    return pagesInfo.filter((item) => item.page === page);
  },
  getItemsForMenu(activeMenu: TPage) {
    const menuItems = pagesInfo
      .filter((item) => item.page !== 'search')
      .map((item) => ({
        title: item.title,
        slug: item.slug,
        class: item.page === activeMenu ? 'active' : 'slug',
      }));

    return menuItems;
  },
};
