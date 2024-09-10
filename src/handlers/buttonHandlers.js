import updateBagCounts from "../utils/updateBagCounts";

export default (() =>{
  const addingButtonHandler = (e) => {
    const addBtn = e.target.closest('.add-btn');
    const orderCount = e.target.closest('.add-wrapper').querySelector('.value');
    const menu = e.target.closest('.menu');
    console.log(menu.dataset.id);
    addBtn.classList.add('hidden');
    orderCount.textContent = 1;

    updateBagCounts.updateBagCount();
  }

  const minusOrderHandler = (e) => {
    const order = e.target.closest('.add-wrapper');
    const orderCount = order.querySelector('.value');
    const addBtn = order.querySelector('.add-btn');
    
    orderCount.textContent--;

    if(orderCount.textContent == 0){
      addBtn.classList.remove('hidden');
    }

    updateBagCounts.updateBagCount();
  }

  const plusOrderHandler = (e) => {
    const order = e.target.closest('.add-wrapper');
    const orderCount = order.querySelector('.value');
    orderCount.textContent++;

    updateBagCounts.updateBagCount();
  }
  return {
    addingButtonHandler: addingButtonHandler,
    minusOrderHandler: minusOrderHandler,
    plusOrderHandler: plusOrderHandler
  }
})()