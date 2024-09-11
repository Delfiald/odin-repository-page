import bag from '../components/bag.js'
import updateBagCounts from "../utils/updateBagCounts";
import getMenu from "../utils/getMenu";
import checkoutButton from '../utils/checkoutButton.js';

export default (() => {
  const body = document.querySelector('body');
  
  const bagHandler = () => {
    const items = getMenu('menu');

    body.appendChild(bag(items));

    checkoutButton();
  }

  const closeBag = () => {
    const isBag = document.querySelector('.bag');
    if(isBag) {
      const bagContainer = isBag.querySelector('.bag-container');
      bagContainer.style.animation = 'slide-out 0.5s ease-in-out forwards';
      bagContainer.addEventListener('animationend', (e) => {
        isBag.remove();
        updateBagCounts.updateBagCount();
      })
    }
  }

  return {
    bagHandler: bagHandler,
    closeBag: closeBag
  }
})()