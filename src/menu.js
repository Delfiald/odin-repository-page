import image from './images/menu.jpg'
import food1 from './images/menus/seblak.png'

export default () => {
  // Menu Container
  const menuContainer = document.createElement('section');
  menuContainer.id = 'menu';

  // Menu Content Wrapper
  const menuContent = document.createElement('div')
  menuContent.classList.add('content-wrapper');

  // Menu Hero
  const menuHero = document.createElement('div');
  menuHero.classList.add('menu-hero');

  // Menu Pict
  const pictWrapper = document.createElement('div');
  pictWrapper.classList.add('image-wrapper');
  const pict = document.createElement('img')
  pict.setAttribute('src', image);
  pictWrapper.appendChild(pict);
  menuHero.appendChild(pictWrapper);

  const mainText = document.createElement('h1')
  mainText.textContent = 'Our Menu'
  menuHero.appendChild(mainText);

  // Menu Content
  const menuContentWrapper = document.createElement('div');
  menuContentWrapper.classList.add('menu-content-wrapper');

  // Menu List
  const menuList = document.createElement('div')
  menuList.classList.add('menu-list')

  addMenus(menuList);

  menuContentWrapper.appendChild(menuList);
  
  menuContent.appendChild(menuHero);
  menuContent.appendChild(menuContentWrapper);
  menuContainer.appendChild(menuContent);
  return menuContainer;
}

const addMenus = (menuList) => {
  // Menus
  for(let menu of Menu.getMenus()){
    const menus = document.createElement('div');
    menus.classList.add('menu');

    // Image
    const menuImageWrapper = document.createElement('div')
    menuImageWrapper.classList.add('menu-img-wrapper');
    const menusImage = document.createElement('img')
    menusImage.setAttribute('src', menu.pict);
    menuImageWrapper.appendChild(menusImage);
    menus.appendChild(menuImageWrapper);

    // Title
    const menuTitleWrapper = document.createElement('div');
    menuTitleWrapper.classList.add('menu-title-wrapper');
    const menuTitle = document.createElement('div');
    menuTitle.textContent = menu.title;
    menuTitleWrapper.appendChild(menuTitle);
    menus.appendChild(menuTitleWrapper);

    // Price
    const menuPriceWrapper = document.createElement('div');
    menuPriceWrapper.classList.add('menu-price-wrapper');
    const menuPrice = document.createElement('p');
    menuPrice.textContent = menu.price;
    menuPriceWrapper.appendChild(menuPrice);
    menus.appendChild(menuPriceWrapper);

    // Add to Basket
    const addWrapper = document.createElement('div')
    addWrapper.classList.add('add-wrapper');
    const addButton = content.createElement('div', ['add-btn'], 'Add');
    const minus = document.createElement('div');
    minus.classList.add('minus-btn')
    const value = document.createElement('div');
    value.classList.add('value')
    const add = document.createElement('div');
    add.classList.add('plus-btn')
    const minusIcon = content.createElement('i', ['fas', 'fa-minus'])
    const plusIcon = content.createElement('i', ['fas', 'fa-plus'])

    minus.appendChild(minusIcon);
    add.appendChild(plusIcon);

    addWrapper.appendChild(addButton)
    addWrapper.appendChild(minus)
    addWrapper.appendChild(value)
    addWrapper.appendChild(add)

    menus.appendChild(addWrapper);

    menuList.appendChild(menus);
  }
}

export const content = (() => {
  return {
    createElement: (tag, className, content) => {
      const element = document.createElement(tag);
      if(className) {
        for(let name of className){
          element.classList.add(name);
        }
      }
      if(content) element.textContent = content;

      return element;
    }
  }
})()

const Menu = (() => {
  const menuList = [];

  return {
    addMenu: (title, price, pict) => {
      const newMenu = {
        id: menuList.length + 1,
        title: title,
        price: price,
        pict: pict
      }

      menuList.push(newMenu);
    },
    getMenus: () => {
      return [...menuList];
    }
  }
})()

Menu.addMenu('lorem', 100, food1);
Menu.addMenu('lorem', 50, food1);
Menu.addMenu('lorem', 10, food1);
Menu.addMenu('lorem', 20, food1);
Menu.addMenu('lorem', 40, food1);