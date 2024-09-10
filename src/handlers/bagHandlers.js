import bag from '../components/bag.js'

export default (() => {
  const body = document.querySelector('body');
  
  const bagHandler = () => {
    const menus = document.querySelectorAll('.menu');
    const items = []

    menus.forEach(menu => {
      const item = {
        id: menu.dataset.id,
        amount: menu.querySelector('.value').textContent
      };
      items.push(item);
    });

    body.appendChild(bag(items));
  }

  const closeBag = () => {
    const isBag = document.querySelector('.bag');
    if(isBag) {
      const bagContainer = isBag.querySelector('.bag-container');
      bagContainer.style.animation = 'slide-out 0.5s ease-in-out forwards';
      bagContainer.addEventListener('animationend', (e) => {
        isBag.remove();
      })
    }
  }

  return {
    bagHandler: bagHandler,
    closeBag: closeBag
  }
})()