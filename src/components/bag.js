import {content, append} from '../utils/domHelpers.js'
import { getMenuById } from '../logic/dataManager.js';
import bagLogic from '../logic/bagLogic.js';

export default (items) => {
  const bag = content.createElement('section', ['bag']);
  const bagWrapper = content.createElement('div', ['bag-wrapper']);
  const bagContainer = content.createElement('div', ['bag-container']);

  // Close Button
  const closeButton = content.createElement('div', ['close-btn']);
  const closeIcon = content.createElement('i', ['fas', 'fa-x'])
  append.element(closeButton, closeIcon)
  
  // Bag Header
  const bagHeader = content.createElement('div', ['bag-header']);
  const bagHeaderText = content.createElement('div', [], 'Bag');
  append.element(bagHeader, bagHeaderText)

  // Bag Content
  const bagContent = content.createElement('div', ['bag-content'])
  const price = addItem(items, bagContent)

  // Bag Bottom
  const bagBottom = content.createElement('div', ['bag-bottom']);
  const subTotalWrapper = content.createElement('div', ['sub-total-wrapper'])
  const subTotalText = content.createElement('div', ['sub-total-text'], 'Subtotal')
  const subTotal = content.createElement('div', ['sub-total'], price)
  append.element(subTotalWrapper, subTotalText, subTotal)
  const checkoutButton = content.createElement('div', ['checkout-btn'], 'Order');
  append.element(bagBottom, subTotalWrapper, checkoutButton)

  append.element(bagContainer, bagHeader, bagContent, bagBottom, closeButton)
  
  append.element(bagWrapper, bagContainer);
  append.element(bag, bagWrapper);

  return bag;
}

const addItem = (items, bagContent) => {
  items.forEach(item => {
    item.amount = parseInt(item.amount);
    if(item.amount > 0) {
      const menu = getMenuById(item.id);
      menu.price = parseInt(menu.price);
    
      const bagItem = content.createElement('div', ['item'])
      bagItem.setAttribute('data-id', menu.id);
      const itemPict = content.createElement('div', ['item-pict'])
      const img = content.createElement('img');
      img.setAttribute('src', menu.pict)
      append.element(itemPict, img)
      const itemName = content.createElement('div', ['item-name'], menu.title);
      const itemPrice = content.createElement('div', ['item-price'], menu.price);
      const amountWrapper = content.createElement('div', ['amount-wrapper']);
      const minusButton = content.createElement('i', ['fas', 'fa-minus']);
      const amount = content.createElement('div', ['amount'], item.amount);
      const plusButton = content.createElement('i', ['fas', 'fa-plus']);

      const itemTotal = bagLogic.calculateItemTotal(item.amount, menu.price);

      const total = content.createElement('div', ['item-total'], itemTotal);

      append.element(amountWrapper, minusButton, amount, plusButton)
      append.element(bagItem, itemPict, itemName, itemPrice, amountWrapper, total)
      append.element(bagContent, bagItem)
    }
  });
  
  const totalPrice = bagLogic.calculateTotalPrice(items);

  return totalPrice;
}