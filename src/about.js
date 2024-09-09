import {content} from './menu.js'
import menu from './images/menus/seblak.png'

export default () => {
  const aboutContainer = content.createElement('section', ['about']);

  // About Content

  // About Header
  const aboutHeader = content.createElement('div', ['about-header'])
  const header = content.createElement('h1');
  header.textContent = 'About Us'
  const headerText = content.createElement('p');
  headerText.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  aboutHeader.appendChild(header)
  aboutHeader.appendChild(headerText)

  // Timeline / Our History
  const timeline = content.createElement('div', ['timeline']);
  const timeLineHeader = content.createElement('div', ['timeline-header'])
  timeLineHeader.textContent = 'Our History'
  timeline.appendChild(timeLineHeader);
  const timelineWrapper = content.createElement('div', ['timeline-wrapper'])
  const time1 = content.createElement('div', ['time'])
  const image1 = content.createElement('img', ['time-image']);
  image1.setAttribute('src', menu)
  const text1 = content.createElement('div', ['time-text'])
  text1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur sit voluptate iusto sunt repudiandae?'
  const lineWrapper1 = content.createElement('div', ['line-wrapper']);
  const line1 = content.createElement('div', ['line']);
  const year1 = content.createElement('div', ['time-year']);
  year1.textContent = '2023'
  lineWrapper1.appendChild(year1)
  lineWrapper1.appendChild(line1)
  time1.appendChild(image1)
  time1.appendChild(lineWrapper1)
  time1.appendChild(text1)
  const time2 = content.createElement('div', ['time'])
  const image2 = content.createElement('img', ['time-image']);
  image2.setAttribute('src', menu)
  const text2 = content.createElement('div', ['time-text'])
  text2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur sit voluptate iusto sunt repudiandae?'
  const lineWrapper2 = content.createElement('div', ['line-wrapper']);
  const line2 = content.createElement('div', ['line']);
  const year2 = content.createElement('div', ['time-year']);
  year2.textContent = '2023.2'
  lineWrapper2.appendChild(year2)
  lineWrapper2.appendChild(line2)
  time2.appendChild(image2)
  time2.appendChild(lineWrapper2)
  time2.appendChild(text2)
  const time3 = content.createElement('div', ['time'])
  const image3 = content.createElement('img', ['time-image']);
  image3.setAttribute('src', menu)
  const text3 = content.createElement('div', ['time-text'])
  text3.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur sit voluptate iusto sunt repudiandae?'
  const lineWrapper3 = content.createElement('div', ['line-wrapper']);
  const line3 = content.createElement('div', ['line']);
  const year3 = content.createElement('div', ['time-year']);
  year3.textContent = '2024'
  lineWrapper3.appendChild(year3)
  lineWrapper3.appendChild(line3)
  time3.appendChild(image3)
  time3.appendChild(lineWrapper3)
  time3.appendChild(text3)

  timelineWrapper.appendChild(time1)
  timelineWrapper.appendChild(time2)
  timelineWrapper.appendChild(time3)
  timeline.appendChild(timelineWrapper);

  // Founder
  const founderWrapper = content.createElement('div', ['founder']);

  // Review and Location
  const reviewLocation = content.createElement('div', ['review-location'])


  // Append About Content
  aboutContainer.appendChild(aboutHeader);
  aboutContainer.appendChild(timeline);
  aboutContainer.appendChild(founderWrapper);
  aboutContainer.appendChild(reviewLocation);

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