export default () => {
  const bag = document.querySelector('.bag')
  const isBagEmpty = bag.querySelectorAll('.bag-content .item');
  
  if(isBagEmpty.length <= 0) {
    bag.querySelector('.checkout-btn').classList.add('disabled');
  }else{
    bag.querySelector('.checkout-btn').classList.remove('disabled');
  }
}