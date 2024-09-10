
import modal from '../components/menuModal.js'
import {getMenuById} from '../logic/dataManager.js'

export default (() => {
  const menuModalHandler = (e) => {
    const menu = e.target.closest('.menu');
    const menuId = menu.dataset.id;

    content.appendChild(modal.modal(getMenuById(menuId)));
  }

  const closeMenuModalHandler = (e) => {
    const modal = document.querySelector('.menu-description')
    if(modal) {
      modal.remove();
    }
  }
  return {
    menuModalHandler: menuModalHandler,
    closeMenuModalHandler: closeMenuModalHandler
  }
})()