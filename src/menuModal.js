import {content} from './menu.js'
import food1 from './images/menus/seblak.png'

export default (() => {
  const modal = content.createElement('div', ['menu-description'])
  
  const modalWrapper = content.createElement('div', ['modal-wrapper'])

  const contentWrapper = content.createElement('div', ['content-wrapper']);

  // Image
  const imageWrapper = content.createElement('div', ['img-wrapper']);
  const img = content.createElement('img');
  img.setAttribute('src', food1);
  imageWrapper.appendChild(img);

  // Info
  const info = content.createElement('div', ['info']);

  // Title
  const titleWrapper = content.createElement('div', ['title-wrapper']);
  const title = content.createElement('div');
  title.textContent = 'Lorem Lorem'
  titleWrapper.appendChild(title);

  // Description
  const descriptionWrapper = content.createElement('div', ['text-wrapper']);
  const description = content.createElement('p');
  description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam recusandae praesentium at amet! Voluptatibus quidem a ullam cumque libero.'
  descriptionWrapper.appendChild(description);

  // Close Button
  const closeBtn = content.createElement('div', ['close-btn'])
  const closeIcon = content.createElement('i', ['fas', 'fa-x']);
  closeBtn.appendChild(closeIcon);
  
  info.appendChild(titleWrapper)
  info.appendChild(descriptionWrapper)

  contentWrapper.appendChild(imageWrapper);
  contentWrapper.appendChild(info);
  contentWrapper.appendChild(closeBtn);

  
  modalWrapper.appendChild(contentWrapper);
  modal.appendChild(modalWrapper);
  
  return modal;
})()