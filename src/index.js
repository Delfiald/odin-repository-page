import "./css/styles.css"

// Home
import home from './home.js'
import menu from './menu.js'
import about from './about.js'

(() => {
  const content = document.getElementById('content');
  const buttons = document.querySelectorAll('.btn');
  const homeButton = document.querySelector('.home-btn');

  const navButtonHandler = (e) => {
    buttons.forEach(button => {
      button.classList.remove('active');
    })

    const activeButton = e.target.closest('.btn');

    return activeButton;
  }
  
  const appendContent = (e) => {
    content.innerHTML = '';
    
    const activeButton = e ? navButtonHandler(e) : homeButton;

    activeButton.classList.add('active');
    
    if(activeButton.classList.contains('home-btn')) {
      content.appendChild(home().homeContainer);
      content.appendChild(home().background);
    }else if(activeButton.classList.contains('menu-btn')) {
      content.appendChild(menu());
    }else if(activeButton.classList.contains('about-btn')) {
      content.appendChild(about());
    }
  }

  document.addEventListener('click', (e) => {
    if(e.target.closest('.btn') && !e.target.closest('.bag-btn')) {
      appendContent(e);
    }
  })

  window.onload = () => {
    appendContent();
  }
})()
