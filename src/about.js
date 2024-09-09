export default () => {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('about')

  const mainText = document.createElement('h1')
  mainText.textContent = ''
  homeContainer.appendChild(mainText);

  const ctaButton = document.createElement('div');
  ctaButton.classList.add('order-btn')
  ctaButton.textContent = 'Order Here';

  homeContainer.appendChild(ctaButton);

  return homeContainer;
}