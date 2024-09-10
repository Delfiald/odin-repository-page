
import food1 from '../images/menus/seblak.png'

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