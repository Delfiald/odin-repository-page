
import food1 from '../images/menus/seblak.png'
import food2 from '../images/menus/tomyum.png'
import food3 from '../images/menus/biryani.png'

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

Menu.addMenu('Seblak', 100, food1, 'Seblak is a popular Indonesian street food from West Java, known for its spicy and savory taste. It typically consists of chewy crackers, noodles, vegetables, and proteins like chicken, eggs, or meatballs, all cooked in a flavorful broth with a blend of garlic, chili, and traditional spices. Seblak is loved for its bold flavors and varying levels of spiciness, making it a favorite comfort food.');
Menu.addMenu('Tom Yum', 50, food2, `Tom Yum is a popular Thai soup known for its bold, spicy, and sour flavors. It's typically made with a broth infused with lemongrass, lime, kaffir lime leaves, galangal, and chili peppers. The soup often includes shrimp (Tom Yum Goong) or other proteins, along with mushrooms, tomatoes, and fresh herbs like cilantro. It's a flavorful, aromatic dish enjoyed across Thailand and internationally.`);
Menu.addMenu('Chicken Biryani', 10, food3, `Chicken Biryani is a flavorful and aromatic South Asian dish made by layering marinated chicken with fragrant basmati rice. It's cooked with a blend of spices such as cumin, cloves, cinnamon, cardamom, and saffron, often accompanied by fried onions, yogurt, and fresh herbs. The dish is typically slow-cooked, allowing the flavors to meld together, resulting in tender chicken and richly spiced rice. It’s a popular and widely loved dish in Indian, Pakistani, and other South Asian cuisines.`);
Menu.addMenu('lorem', 20, food1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est omnis placeat nesciunt voluptates quidem magnam commodi a veritatis perspiciatis.');
Menu.addMenu('lorem', 40, food1, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est omnis placeat nesciunt voluptates quidem magnam commodi a veritatis perspiciatis.');

export const getMenu =  Menu.getMenus();