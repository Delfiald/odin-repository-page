import updateBag from "../utils/updateBag";

export default (() => {
  const decreaseAmount = (item) => {
    const amount = item.querySelector('.amount');
    amount.textContent--;

    if(amount.textContent === '0') {
      item.style.animation = 'slide-out .3s ease-in-out forwards'
      item.addEventListener('animationend', (e) => {
        item.remove();
      })
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