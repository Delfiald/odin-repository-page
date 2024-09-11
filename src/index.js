import "./css/styles.css"

// Components
import home from './handlers/appendHome.js'
import menu from './handlers/appendMenu.js'
import about from './handlers/appendAbout.js'

// Handlers
import button from "./handlers/buttonHandlers.js"
import modal from "./handlers/modalHandlers.js"
import bag from './handlers/bagHandlers.js'
import bagEdit from './handlers/bagEditHandlers.js'
import order from "./handlers/orderHandlers.js"

// Utils
import nav from "./utils/getActiveButton.js"
import removeCurrentContent from "./utils/removeCurrentContent.js"

(() => {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const content = document.getElementById('content');
  const homeButton = document.querySelector('.home-btn');
  
  // Append Module
  const appendContent = (e) => {
    header.classList.add('load');
    
    const activeButton = e ? nav.getActiveButton(e) : homeButton;

    activeButton.classList.add('active');

    removeCurrentContent();
    
    if(activeButton.classList.contains('home-btn')) {
      home(content);
    }else if(activeButton.classList.contains('menu-btn') || activeButton.classList.contains('order-btn')) {
      menu(content, header);
    }else if(activeButton.classList.contains('about-btn')) {
      about(content, body, header);
    }

    setTimeout(() => {
      header.classList.remove('load')
    }, 500);
  }

  document.addEventListener('click', (e) => {
    if((e.target.closest('.btn') || e.target.closest('.home .order-btn')) && !e.target.closest('.bag-btn')) {
      appendContent(e);
    }else if(e.target.closest('.add-btn')){
      button.addingButtonHandler(e);
    }else if(e.target.closest('.minus-btn')){
      button.minusOrderHandler(e);
    }else if(e.target.closest('.plus-btn')){
      button.plusOrderHandler(e);
    }else if(e.target.closest('.menu')){
      modal.menuModalHandler(e);
    }else if(e.target.closest('#content .close-btn')){
      modal.closeMenuModalHandler(e);
    }else if(e.target.closest('.bag-btn')){
      bag.bagHandler()
    }else if(e.target.closest('.bag .close-btn')){
      bag.closeBag();
    }else if(e.target.closest('.bag i')){
      bagEdit.bagEditHandlers(e);
    }else if(e.target.closest('.checkout-btn')){
      order.orderShow(e);
    }else if(e.target.closest('.order-thanks-btn')){
      order.orderClose();
    }
  })

  window.onload = () => {
    appendContent();
  }
})()
