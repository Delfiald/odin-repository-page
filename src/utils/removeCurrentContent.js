export default () => {
  const header = document.querySelector('header');
  
  content.innerHTML = '';

  const existingFooter = document.querySelector('footer');
  if (existingFooter) {
    existingFooter.remove();
  }

  const bagIcon = document.querySelector('.bag-btn');

  if (bagIcon) {
    bagIcon.remove();
  }
  
  header.style.background = 'transparent';
}