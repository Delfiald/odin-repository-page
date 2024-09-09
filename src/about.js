import {content} from './menu.js'

export default () => {
  const aboutContainer = document.createElement('section');
  aboutContainer.classList.add('about');

  // Footer
  const footer = content.createElement('footer')

  // Copyright
  const copyrightWrapper = content.createElement('div', ['copyright-wrapper']);
  const cp1 = content.createElement('div', ['cp-1'])
  const anchor = content.createElement('a');
  anchor.setAttribute('href', 'https://www.freepik.com/free-vector/people-eating-restaurant-concept-illustration_106335419.htm#fromView=search&page=1&position=3&uuid=ae296b3c-f1ce-4abe-86f1-83e18ba925e1')
  anchor.textContent = 'Image by storyset on Freepik';
  cp1.appendChild(anchor);
  copyrightWrapper.appendChild(cp1);

  // Info
  const infoWrapper = content.createElement('div', ['info-wrapper']);
  const infoText = content.createElement('div');
  infoText.textContent = `Odin Restaurant © 2024`
  infoWrapper.appendChild(infoText);

  // Socials
  const socialsWrapper = content.createElement('div', ['socials-wrapper']);
  const github = content.createElement('a')
  github.setAttribute('href', 'https://github.com/delfiald')
  github.setAttribute('rel', 'noreferrer noopener')
  github.setAttribute('target', '_blank')
  const githubIcon = content.createElement('i', ['fab', 'fa-github'])
  github.appendChild(githubIcon);
  const linkedin = content.createElement('a')
  linkedin.setAttribute('href', '#')
  const linkedInIcon = content.createElement('i', ['fab', 'fa-linkedin'])
  linkedin.appendChild(linkedInIcon);
  socialsWrapper.appendChild(github);
  socialsWrapper.appendChild(linkedin);

  footer.appendChild(copyrightWrapper);
  footer.appendChild(infoWrapper);
  footer.appendChild(socialsWrapper);

  return {
    aboutContainer,
    footer
  };
}