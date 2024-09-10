import "./css/styles.css"

// Home
import home from './components/home.js'
import menu from './components/menu.js'
import about from './components/about.js'
import modal from './components/menuModal.js'
import bag from './components/bag.js'

(() => {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const content = document.getElementById('content');
  const buttons = document.querySelectorAll('.btn');
  const homeButton = document.querySelector('.home-btn');
  const menuButton = document.querySelector('.menu-btn');

  // Menu Modal
  const menuModalHandler = (e) => {
    const menu = e.target.closest('.menu');
    // Tampilkan detail menu berdasarkan dataset.id

    content.appendChild(modal);
  }

  const closeMenuModalHandler = (e) => {
    content.removeChild(modal)
  }

  // Adding Button to Bag Handler
  const addingButtonHandler = (e) => {
    const addBtn = e.target.closest('.add-btn');
    const orderCount = e.target.closest('.add-wrapper').querySelector('.value');
    const menu = e.target.closest('.menu');
    console.log(menu.dataset.id);
    addBtn.classList.add('hidden');
    orderCount.textContent = 1;
  }

  const minusOrderHandler = (e) => {
    const order = e.target.closest('.add-wrapper');
    const orderCount = order.querySelector('.value');
    const addBtn = order.querySelector('.add-btn');
    
    orderCount.textContent--;

    if(orderCount.textContent == 0){
      addBtn.classList.remove('hidden');
    }
    const menu = e.target.closest('.menu');
    console.log(menu.dataset.id);
  }

  const plusOrderHandler = (e) => {
    const order = e.target.closest('.add-wrapper');
    const orderCount = order.querySelector('.value');
    const menu = e.target.closest('.menu');
    console.log(menu.dataset.id);
    orderCount.textContent++;
  }

  // Get Active Nav Button
  const navButtonHandler = (e) => {
    buttons.forEach(button => {
      button.classList.remove('active');
    })

    const activeButton = e.target.closest('.btn');

    if(activeButton){
      return activeButton;
    }else{
      return menuButton;
    }
  }

  // Bag Handler
  const bagHandler = () => {
    // Ambil menu apa aja dan berapa banyak tiap menu

    const isBag = document.querySelector('.bag');
    if(isBag) {
      isBag.remove();
    }

    body.appendChild(bag());
  }

  const closeBag = () => {
    const bag = document.querySelector('.bag');
    if(bag) {
      const bagContainer = bag.querySelector('.bag-container');
      bagContainer.style.animation = 'slide-out 0.5s ease-in-out forwards';
      bagContainer.addEventListener('animationend', (e) => {
        bag.remove();
      })
    }
  }
  
  // Append Module
  const appendContent = (e) => {
    header.classList.add('load');

    content.innerHTML = '';
    
    const activeButton = e ? navButtonHandler(e) : homeButton;

    activeButton.classList.add('active');
    header.style.background = 'transparent';

    const existingFooter = document.querySelector('footer');
    if (existingFooter && !activeButton.classList.contains('about-btn')) {
      existingFooter.remove();
    }
    
    if(activeButton.classList.contains('home-btn')) {
      content.appendChild(home().homeContainer);
      content.appendChild(home().background);
    }else if(activeButton.classList.contains('menu-btn') || activeButton.classList.contains('order-btn')) {
      content.appendChild(menu());
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
      addingButtonHandler(e);
    }else if(e.target.closest('.minus-btn')){
      minusOrderHandler(e);
    }else if(e.target.closest('.plus-btn')){
      plusOrderHandler(e);
    }else if(e.target.closest('.menu')){
      menuModalHandler(e);
    }else if(e.target.closest('#content .close-btn')){
      closeMenuModalHandler(e);
    }else if(e.target.closest('.bag-btn')){
      bagHandler()
    }else if(e.target.closest('.bag .close-btn')){
      closeBag();
    }
  })

  window.onload = () => {
    appendContent();
  }
})()
