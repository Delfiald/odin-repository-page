import bagLogic from "../logic/bagLogic";
import { getMenuById } from "../logic/dataManager";
import getMenu from "../utils/getMenu";
import updateMenu from "../utils/updateMenu";

export default (amount, item) => {
  const items = getMenu('bag');
  
  const menu = getMenuById(item.dataset.id);

  const price = bagLogic.calculateItemTotal(amount.textContent, menu.price);
  const subTotal = bagLogic.calculateTotalPrice(items);

  item.querySelector('.item-total').textContent = price;
  document.querySelector('.sub-total').textContent = subTotal;

  const itemMenu = updateMenu(item);
  const menuAmount = itemMenu.querySelector('.value');
  menuAmount.textContent = amount.textContent;
  
  if(menuAmount.textContent == 0){
    itemMenu.querySelector('.add-btn').classList.remove('hidden');
  }
}