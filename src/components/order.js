import {content, append} from '../utils/domHelpers.js'

export default () => {
  const order = content.createElement('div', ['order'])
  const orderWrapper = content.createElement('div', ['order-wrapper'])
  const orderContainer = content.createElement('div', ['order-container']);
  const orderHeader = content.createElement('div', ['order-header'])
  const header = content.createElement('i', ['fas', 'fa-check'])
  append.element(orderHeader, header)
  const orderContent = content.createElement('div', ['order-content'])
  const orderText = content.createElement('div', ['order-text'], 'Your order has been received. Please wait for further updates. Thank you!')
  const orderButton = content.createElement('div', ['order-thanks-btn'], 'Okay')

  append.element(orderContent, orderText, orderButton)

  append.element(orderContainer, orderHeader, orderContent)
  append.element(orderWrapper, orderContainer)
  append.element(order, orderWrapper);

  return order;
}