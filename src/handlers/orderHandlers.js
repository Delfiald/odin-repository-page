import order from "../components/order";
import getMenu from "../utils/getMenu";
import bagLogic from "../logic/bagLogic";

export default (() => {
  const body = document.querySelector('body');

  return {
    orderShow: (e) => {
      const items = getMenu('bag');
      const subTotal = bagLogic.calculateTotalPrice(items);
      const button = e.target.closest('.checkout-btn');
      if(button.classList.contains('disabled') || subTotal <= 0){
        return;
      }
      body.appendChild(order());
    },
    orderClose: () => {
      location.reload();
    }
  }
})()