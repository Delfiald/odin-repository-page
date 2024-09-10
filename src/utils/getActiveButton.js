export default (() => {
  const buttons = document.querySelectorAll('.btn');
  const menuButton = document.querySelector('.menu-btn');

  const getActiveButton = (e) => {
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

  return {
    getActiveButton: getActiveButton
  }
})()