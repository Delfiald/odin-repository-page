import {content, append} from '../utils/domHelpers.js'
import image from '../images/home.png';

export default () => {
  // Home Container
  const homeContainer = content.createElement('section', ['home']);

  // Home Content Wrapper
  const homeContent = content.createElement('div', ['content-wrapper'])

  // Home Text
  const mainText = content.createElement('div', ['text-container'])
  const h2 = content.createElement('h2', [], 'Experience unique dining with delicious local dishes, a cozy atmosphere, and friendly service.')
  append.element(mainText, h2);
  append.element(homeContent, mainText);

  // Home Pict
  const pictWrapper = content.createElement('div', ['image-wrapper']);
  const pict = content.createElement('img')
  pict.setAttribute('src', image);
  append.element(pictWrapper, pict);
  append.element(homeContent, pictWrapper);

  // Home CTA Button
  const ctaWrapper = content.createElement('div', ['cta-wrapper']);
  const ctaButton = content.createElement('div', ['order-btn'], 'View Our Menu');
  const arrowIcon = content.createElement('i', ['fas', 'fa-arrow-right']);
  append.element(ctaButton, arrowIcon);
  append.element(ctaWrapper, ctaButton);
  append.element(homeContent, ctaWrapper);

  homeContainer.appendChild(homeContent);
  
  // Home Background
  const background = content.createElement('div', ['home-bg']);
  const backgroundInner = content.createElement('div');
  background.appendChild(backgroundInner);

  return {
    homeContainer,
    background
  }
}