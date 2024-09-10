import {content} from './menu.js'
import menu from './images/menus/seblak.png'

export default () => {
  const bag = content.createElement('section', ['bag']);
  const bagWrapper = content.createElement('div', ['bag-wrapper']);
  const bagContainer = content.createElement('div', ['bag-container']);

  // Close Button
  const closeButton = content.createElement('div', ['close-btn']);
  const closeIcon = content.createElement('i', ['fas', 'fa-x'])
  closeButton.appendChild(closeIcon);
  
  // Bag Header
  const bagHeader = content.createElement('div', ['bag-header']);
  const bagHeaderText = content.createElement('div', [], 'Bag');
  bagHeader.appendChild(bagHeaderText);

  // Bag Content
  const bagContent = content.createElement('div', ['bag-content'])
  const bagItem = content.createElement('div', ['item'])
  const itemPict = content.createElement('div', ['item-pict'])
  const img = content.createElement('img');
  img.setAttribute('src', menu)
  itemPict.appendChild(img);
  const itemName = content.createElement('div', ['item-name'], 'Lorem');
  const itemPrice = content.createElement('div', ['item-price'], '50');
  const amountWrapper = content.createElement('div', ['amount-wrapper']);
  const minusButton = content.createElement('i', ['fas', 'fa-minus']);
  const amount = content.createElement('div', ['amount'], '2');
  const plusButton = content.createElement('i', ['fas', 'fa-plus']);
  const total = content.createElement('div', ['item-total'], '100');

  amountWrapper.appendChild(minusButton)
  amountWrapper.appendChild(amount)
  amountWrapper.appendChild(plusButton)

  bagItem.appendChild(itemPict)
  bagItem.appendChild(itemName)
  bagItem.appendChild(itemPrice)
  bagItem.appendChild(amountWrapper)
  bagItem.appendChild(total)

  bagContent.appendChild(bagItem);

  // Bag Bottom
  const bagBottom = content.createElement('div', ['bag-bottom']);
  const subTotalWrapper = content.createElement('div', ['sub-total-wrapper'])
  const subTotalText = content.createElement('div', ['sub-total-text'], 'Subtotal')
  const subTotal = content.createElement('div', ['sub-total'], '50')
  subTotalWrapper.appendChild(subTotalText);
  subTotalWrapper.appendChild(subTotal);
  const checkoutButton = content.createElement('div', ['checkout-btn'], 'Order');
  bagBottom.appendChild(subTotalWrapper);
  bagBottom.appendChild(checkoutButton);

  bagContainer.appendChild(bagHeader)
  bagContainer.appendChild(bagContent)
  bagContainer.appendChild(bagBottom)
  bagContainer.appendChild(closeButton)
  bagWrapper.appendChild(bagContainer)
  bag.appendChild(bagWrapper);

  return bag;
}