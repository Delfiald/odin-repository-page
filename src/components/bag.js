import {content, append} from '../utils/domHelpers.js'
import menu from '../images/menus/seblak.png'

export default () => {
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
  const bagItem = content.createElement('div', ['item'])
  const itemPict = content.createElement('div', ['item-pict'])
  const img = content.createElement('img');
  img.setAttribute('src', menu)
  append.element(itemPict, img)
  const itemName = content.createElement('div', ['item-name'], 'Lorem');
  const itemPrice = content.createElement('div', ['item-price'], '50');
  const amountWrapper = content.createElement('div', ['amount-wrapper']);
  const minusButton = content.createElement('i', ['fas', 'fa-minus']);
  const amount = content.createElement('div', ['amount'], '2');
  const plusButton = content.createElement('i', ['fas', 'fa-plus']);
  const total = content.createElement('div', ['item-total'], '100');

  append.element(amountWrapper, minusButton, amount, plusButton)

  append.element(bagItem, itemPict, itemName, itemPrice, amountWrapper, total)

  append.element(bagContent, bagItem)

  // Bag Bottom
  const bagBottom = content.createElement('div', ['bag-bottom']);
  const subTotalWrapper = content.createElement('div', ['sub-total-wrapper'])
  const subTotalText = content.createElement('div', ['sub-total-text'], 'Subtotal')
  const subTotal = content.createElement('div', ['sub-total'], '50')
  append.element(subTotalWrapper, subTotalText, subTotal)
  const checkoutButton = content.createElement('div', ['checkout-btn'], 'Order');
  append.element(bagBottom, subTotalWrapper, checkoutButton)

  append.element(bagContainer, bagHeader, bagContent, bagBottom, closeButton)
  
  append.element(bagWrapper, bagContainer);
  append.element(bag, bagWrapper);

  return bag;
}