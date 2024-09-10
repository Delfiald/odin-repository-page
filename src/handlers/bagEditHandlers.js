import bagLogic from "../logic/bagLogic";
import { getMenuById } from "../logic/dataManager";
import getMenu from "../utils/getMenu";

export default (() => {
  const updateBag = (amount, item) => {
    const items = getMenu();
    
    const menu = getMenuById(item.dataset.id);

    const price = bagLogic.calculateItemTotal(amount.textContent, menu.price);
    const subTotal = bagLogic.calculateTotalPrice(items);

    item.querySelector('.item-total').textContent = price;
    document.querySelector('.sub-total').textContent = subTotal;
  }

  const updateMenu = (item) => {
    const menus = Array.from(document.querySelectorAll('.menu'));

    console.log(item.dataset.id);

    const menu = menus.find(menu => menu.dataset.id === item.dataset.id);

    return menu;
  }

  const decreaseAmount = (item) => {
    const amount = item.querySelector('.amount');
    amount.textContent--;

    if(amount.textContent === '0') {
      item.style.animation = 'slide-out .3s ease-in-out forwards'
      item.addEventListener('animationend', (e) => {
        item.remove();
      })
    }

    const menu = updateMenu(item);
    const menuAmount = menu.querySelector('.value');
    menuAmount.textContent = amount.textContent;
    
    if(menuAmount.textContent == 0){
      menu.querySelector('.add-btn').classList.remove('hidden');
    }

    updateBag(amount, item)
  }

  const increaseAmount = (item) => {
    const amount = item.querySelector('.amount');
    amount.textContent++;

    updateBag(amount, item)
  }

  return {
    bagEditHandlers: (e) => {
      const item = e.target.closest('.item');

      const getButton = e.target.closest('i')
      if(getButton.classList.contains('fa-minus')){
        decreaseAmount(item);
      }else if(getButton.classList.contains('fa-plus')){
        increaseAmount(item);
      }
    }
  }
})()