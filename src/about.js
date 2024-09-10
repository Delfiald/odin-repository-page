import {content} from './menu.js'
import menu from './images/menus/seblak.png'
import location from './images/location.png'

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

  // Open Hour and Location
  const hourLocation = content.createElement('div', ['hour-location'])
  const openHourWrapper = content.createElement('div', ['open-wrapper'])
  const openHeader = content.createElement('div', ['open-header'])
  const openHeaderText = content.createElement('div', ['header-text'])
  const openContent = content.createElement('div', ['open-content']);

  const dayWrapper = content.createElement('div', ['day-wrapper']);
  const day1 = content.createElement('div', ['day'])
  day1.textContent = 'Monday'
  const day2 = content.createElement('div', ['day'])
  day2.textContent = 'Tuesday'
  const day3 = content.createElement('div', ['day'])
  day3.textContent = 'Wednesday'
  const day4 = content.createElement('div', ['day'])
  day4.textContent = 'Thursday'
  const day5 = content.createElement('div', ['day'])
  day5.textContent = 'Friday'
  const day6 = content.createElement('div', ['day'])
  day6.textContent = 'Saturday'
  const day7 = content.createElement('div', ['day'])
  day7.textContent = 'Sunday'
  dayWrapper.appendChild(day1)
  dayWrapper.appendChild(day2)
  dayWrapper.appendChild(day3)
  dayWrapper.appendChild(day4)
  dayWrapper.appendChild(day5)
  dayWrapper.appendChild(day6)
  dayWrapper.appendChild(day7)

  const hourWrapper = content.createElement('div', ['hour-wrapper']);
  const hour1 = content.createElement('div', ['hour']);
  hour1.textContent = '9:00am - 5:30pm'
  const hour2 = content.createElement('div', ['hour']);
  hour2.textContent = '9:00am - 5:30pm'
  const hour3 = content.createElement('div', ['hour']);
  hour3.textContent = '9:00am - 5:30pm'
  const hour4 = content.createElement('div', ['hour']);
  hour4.textContent = '9:00am - 5:30pm'
  const hour5 = content.createElement('div', ['hour']);
  hour5.textContent = '1:00pm - 6:30pm'
  const hour6 = content.createElement('div', ['hour']);
  hour6.textContent = '9:00am - 11:59pm'
  const hour7 = content.createElement('div', ['hour']);
  hour7.textContent = '8:00am - 10:30pm'
  hourWrapper.appendChild(hour1)
  hourWrapper.appendChild(hour2)
  hourWrapper.appendChild(hour3)
  hourWrapper.appendChild(hour4)
  hourWrapper.appendChild(hour5)
  hourWrapper.appendChild(hour6)
  hourWrapper.appendChild(hour7)
  
  openContent.appendChild(dayWrapper)
  openContent.appendChild(hourWrapper)

  openHeaderText.textContent = 'OPENING HOURS'
  openHeader.appendChild(openHeaderText);
  openHourWrapper.appendChild(openHeader);
  openHourWrapper.appendChild(openContent);
  
  const locationWrapper = content.createElement('div', ['location-wrapper'])
  const locationImage = content.createElement('img')
  locationImage.setAttribute('src', location)
  locationWrapper.appendChild(locationImage);

  hourLocation.appendChild(openHourWrapper)
  hourLocation.appendChild(locationWrapper)

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
  const founderHeader = content.createElement('div', ['founder-header'])
  founderHeader.textContent = 'Founder';
  const founderContent = content.createElement('div', ['founder-content']);
  const founderName = content.createElement('div', ['founder-name']);
  founderName.textContent = 'Megatron'
  const founderText= content.createElement('div', ['founder-text'])
  founderText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus repellat illo corporis esse, fuga ducimus tempora officia distinctio vero!'
  const founderInfo = content.createElement('div', ['founder-info-wrapper']);
  const founderImageWrapper = content.createElement('div', ['image-wrapper'])
  const founderImage = content.createElement('img');
  founderImage.setAttribute('src', menu);
  founderImageWrapper.appendChild(founderImage);

  founderInfo.appendChild(founderName)
  founderInfo.appendChild(founderText)
  founderContent.appendChild(founderInfo);
  founderContent.appendChild(founderImageWrapper);

  founderWrapper.appendChild(founderHeader);
  founderWrapper.appendChild(founderContent);

  // Append About Content
  aboutContainer.appendChild(aboutHeader);
  aboutContainer.appendChild(hourLocation);
  aboutContainer.appendChild(timeline);
  aboutContainer.appendChild(founderWrapper);

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
  const footerText = content.createElement('div', ['info-wrapper']);
  const text = content.createElement('div');
  text.textContent = `Odin Restaurant © 2024`
  footerText.appendChild(text);

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
  footer.appendChild(footerText);
  footer.appendChild(socialsWrapper);

  return {
    aboutContainer,
    footer
  };
}