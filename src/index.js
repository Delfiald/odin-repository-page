import "./css/styles.css"

// Components
import home from './components/home.js'
import menu from './components/menu.js'
import about from './components/about.js'
import bagBtn from './components/bagIcon.js'

// Handlers
import button from "./handlers/buttonHandlers.js"
import modal from "./handlers/modalHandlers.js"
import bag from './handlers/bagHandlers.js'
import bagEdit from './handlers/bagEditHandlers.js'

// Utils
import updateBagCounts from "./utils/updateBagCounts";
import nav from "./utils/getActiveButton.js"

(() => {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const content = document.getElementById('content');
  const homeButton = document.querySelector('.home-btn');
  
  // Append Module
  const appendContent = (e) => {
    header.classList.add('load');

    content.innerHTML = '';
    
    const activeButton = e ? nav.getActiveButton(e) : homeButton;

    activeButton.classList.add('active');
    header.style.background = 'transparent';

    const existingFooter = document.querySelector('footer');
    const bagIcon = document.querySelector('.bag-btn');
    if (existingFooter && !activeButton.classList.contains('about-btn')) {
      existingFooter.remove();
    }

    if (bagIcon && !activeButton.classList.contains('menu-btn')) {
      bagIcon.remove();
    }
    
    if(activeButton.classList.contains('home-btn')) {
      content.appendChild(home().homeContainer);
      content.appendChild(home().background);
    }else if(activeButton.classList.contains('menu-btn') || activeButton.classList.contains('order-btn')) {
      header.querySelector('nav').appendChild(bagBtn());
      content.appendChild(menu());
      updateBagCounts.updateBagCount();
      header.style.background = 'var(--color-light)';
    }else if(activeButton.classList.contains('about-btn')) {
      content.appendChild(about().aboutContainer);
      body.appendChild(about().footer);
      header.style.background = 'var(--color-light)';
    }

    setTimeout((e) => {
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
    }
  })

  window.onload = () => {
    appendContent();
  }
})()
