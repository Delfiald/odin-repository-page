import {content, append} from '../utils/domHelpers.js'
import {getMenu} from './menu.js'
import food1 from '../images/menus/seblak.png'

export default (() => {
  const modal = content.createElement('div', ['menu-description'])
  
  const modalWrapper = content.createElement('div', ['modal-wrapper'])

  const contentWrapper = content.createElement('div', ['content-wrapper']);

  // Image
  const imageWrapper = content.createElement('div', ['img-wrapper']);
  const img = content.createElement('img');
  img.setAttribute('src', food1);
  append.element(imageWrapper, img)

  // Info
  const info = content.createElement('div', ['info']);

  // Title
  const titleWrapper = content.createElement('div', ['title-wrapper']);
  const title = content.createElement('div', [], 'Lorem Lorem');
  append.element(titleWrapper, title)

  // Description
  const descriptionWrapper = content.createElement('div', ['text-wrapper']);
  const description = content.createElement('p', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam recusandae praesentium at amet! Voluptatibus quidem a ullam cumque libero.');
  append.element(descriptionWrapper, description)

  // Close Button
  const closeBtn = content.createElement('div', ['close-btn'])
  const closeIcon = content.createElement('i', ['fas', 'fa-x']);
  append.element(closeBtn, closeIcon)
  
  append.element(info, titleWrapper, descriptionWrapper)

  append.element(contentWrapper, imageWrapper, info, closeBtn)
  
  append.element(modalWrapper, contentWrapper)
  append.element(modal, modalWrapper)
  
  return modal;
})()