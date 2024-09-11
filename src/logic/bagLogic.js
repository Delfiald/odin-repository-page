import { getMenuById } from "./dataManager";

export default (() => {
  const calculateItemTotal = (amount, price) => {
    return amount * price;
  }
  
  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce((accumulator, item) => {
      const menu = getMenuById(item.id);
      
      const amount = parseInt(item.amount) || 0;
      const price = parseInt(menu.price) || 0;
  
      return accumulator + calculateItemTotal(amount, price);
    }, 0)
  
    return totalPrice;
  }

  return {
    calculateItemTotal,
    calculateTotalPrice
  }
})()