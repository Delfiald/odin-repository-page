import { getMenu } from "./menuManager"

const Menu = (() => {
  return {
    getItemById: (id) => {
      return getMenu.find(menu => String(menu.id) === id);
    }
  }
})()

export const getMenuById = Menu.getItemById;