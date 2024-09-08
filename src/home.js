import image from './images/home.png';

export default () => {
  // Home Container
  const homeContainer = document.createElement('section');
  homeContainer.classList.add('home')

  // Home Content Wrapper
  const homeContent = document.createElement('div')
  homeContent.classList.add('content-wrapper');

  // Home Text
  const mainText = document.createElement('div')
  mainText.classList.add('text-container');
  const h2 = document.createElement('h2')
  h2.textContent = 'Experience unique dining with delicious local dishes, a cozy atmosphere, and friendly service.'
  mainText.appendChild(h2);
  homeContent.appendChild(mainText);

  // Home Pict
  const pictWrapper = document.createElement('div');
  pictWrapper.classList.add('image-wrapper');
  const pict = document.createElement('img')
  pict.setAttribute('src', image);
  pictWrapper.appendChild(pict);
  homeContent.appendChild(pictWrapper);

  // Home CTA Button
  const ctaWrapper = document.createElement('div');
  ctaWrapper.classList.add('cta-wrapper');
  const ctaButton = document.createElement('div');
  ctaButton.classList.add('order-btn');
  ctaButton.textContent = 'View Our Menu';
  const arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fas', 'fa-arrow-right');
  ctaButton.appendChild(arrowIcon);
  ctaWrapper.appendChild(ctaButton);
  homeContent.appendChild(ctaWrapper);

  homeContainer.appendChild(homeContent);

  
  // Home Background
  const background = document.createElement('div');
  background.classList.add('home-bg');
  const backgroundInner = document.createElement('div');
  background.appendChild(backgroundInner);

  return {
    homeContainer,
    background
  }
}