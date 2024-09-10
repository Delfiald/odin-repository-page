import {content, append} from '../utils/domHelpers.js'
import image from '../images/menu.jpg'
import food1 from '../images/menus/seblak.png'

export default () => {
  // Menu Container
  const menuContainer = content.createElement('section', []);
  menuContainer.id = 'menu';

  // Menu Content Wrapper
  const menuContent = content.createElement('div', ['content-wrapper'])

  // Menu Hero
  const menuHero = content.createElement('div', ['menu-hero']);

  // Menu Pict
  const pictWrapper = content.createElement('div', ['image-wrapper']);
  const pict = content.createElement('img')
  pict.setAttribute('src', image);
  append.element(pictWrapper, pict)

  const mainText = content.createElement('h1', [], 'Our Menu')
  append.element(menuHero, pictWrapper, mainText)

  // Menu Content
  const menuContentWrapper = content.createElement('div', ['menu-content-wrapper']);

  // Menu List
  const menuList = content.createElement('div', ['menu-list'])

  addMenus(menuList);

  append.element(menuContentWrapper, menuList);

  append.element(menuContent, menuHero, menuContentWrapper);

  append.element(menuContainer, menuContent);
  return menuContainer;
}

const addMenus = (menuList) => {
  // Menus
  for(let menu of Menu.getMenus()){
    const menus = content.createElement('div', ['menu']);
    menus.setAttribute('data-id', menu.id);

    // Image
    const menuImageWrapper = content.createElement('div', ['menu-img-wrapper']);
    const menusImage = content.createElement('img')
    menusImage.setAttribute('src', menu.pict);
    append.element(menuImageWrapper, menusImage);

    // Title
    const menuTitleWrapper = content.createElement('div', ['menu-title-wrapper']);
    const menuTitle = content.createElement('div', [], menu.title);
    append.element(menuTitleWrapper, menuTitle)

    // Price
    const menuPriceWrapper = content.createElement('div', ['menu-price-wrapper']);
    const menuPrice = content.createElement('p', [], menu.price);
    append.element(menuPriceWrapper, menuPrice);

    // Add to Basket
    const addWrapper = content.createElement('div', ['add-wrapper'])
    const addButton = content.createElement('div', ['add-btn'], 'Add');
    const minus = content.createElement('div', ['minus-btn']);
    const value = content.createElement('div', ['value']);
    const add = content.createElement('div', ['plus-btn']);
    const minusIcon = content.createElement('i', ['fas', 'fa-minus'])
    const plusIcon = content.createElement('i', ['fas', 'fa-plus'])

    append.element(minus, minusIcon);
    append.element(add, plusIcon);

    append.element(addWrapper, addButton, minus, value, add);
        
    append.element(menus, menuImageWrapper, menuTitleWrapper, menuPriceWrapper, addWrapper);

    menuList.appendChild(menus);
  }
}

const addDescription = (menu, description) => {
  return {
    ...menu,
    description: description
  }
}

const Menu = (() => {
  const menuList = [];

  return {
    addMenu: (title, price, pict, description) => {
      let newMenu = {
        id: menuList.length + 1,
        title: title,
        price: price,
        pict: pict
      }

      newMenu = addDescription(newMenu, description);

      menuList.push(newMenu);
    },
    getMenus: () => {
      return [...menuList];
    }
  }
})()

Menu.addMenu('lorem', 100, food1, 'Seblak is a popular Indonesian street food from West Java, known for its spicy and savory taste. It typically consists of chewy crackers, noodles, vegetables, and proteins like chicken, eggs, or meatballs, all cooked in a flavorful broth with a blend of garlic, chili, and traditional spices. Seblak is loved for its bold flavors and varying levels of spiciness, making it a favorite comfort food.');
Menu.addMenu('lorem', 50, food1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est omnis placeat nesciunt voluptates quidem magnam commodi a veritatis perspiciatis.');
Menu.addMenu('lorem', 10, food1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est omnis placeat nesciunt voluptates quidem magnam commodi a veritatis perspiciatis.');
Menu.addMenu('lorem', 20, food1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est omnis placeat nesciunt voluptates quidem magnam commodi a veritatis perspiciatis.');
Menu.addMenu('lorem', 40, food1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est omnis placeat nesciunt voluptates quidem magnam commodi a veritatis perspiciatis.');

export const getMenu =  Menu.getMenus();