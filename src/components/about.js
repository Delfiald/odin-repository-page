import {content, append} from '../utils/domHelpers.js'
import menu from '../images/menus/seblak.png'
import location from '../images/location.png'

export default () => {
  const aboutContainer = content.createElement('section', ['about']);

  // About Content
  // About Header
  const aboutHeader = content.createElement('div', ['about-header'])
  const header = content.createElement('h1', [], 'About Us');
  const headerText = content.createElement('p', [], 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.');
  append.element(aboutHeader, header, headerText)

  // Open Hour and Location
  const hourLocation = content.createElement('div', ['hour-location'])
  const openHourWrapper = content.createElement('div', ['open-wrapper'])
  const openHeader = content.createElement('div', ['open-header'])
  const openHeaderText = content.createElement('div', ['header-text'], 'OPENING HOURS')
  const openContent = content.createElement('div', ['open-content']);

  const dayWrapper = content.createElement('div', ['day-wrapper']);
  const day1 = content.createElement('div', ['day'], 'Monday')
  const day2 = content.createElement('div', ['day'], 'Tuesday')
  const day3 = content.createElement('div', ['day'], 'Wednesday')
  const day4 = content.createElement('div', ['day'], 'Thursday')
  const day5 = content.createElement('div', ['day'], 'Friday')
  const day6 = content.createElement('div', ['day'], 'Saturday')
  const day7 = content.createElement('div', ['day'], 'Sunday')
  append.element(dayWrapper, day1, day2, day3, day4, day5, day6, day7)

  const hourWrapper = content.createElement('div', ['hour-wrapper']);
  const hour1 = content.createElement('div', ['hour'], '9:00am - 5:30pm');
  const hour2 = content.createElement('div', ['hour'], '9:00am - 5:30pm');
  const hour3 = content.createElement('div', ['hour'], '9:00am - 5:30pm');
  const hour4 = content.createElement('div', ['hour'], '9:00am - 5:30pm');
  const hour5 = content.createElement('div', ['hour'], '1:00pm - 6:30pm');
  const hour6 = content.createElement('div', ['hour'], '9:00am - 11:59pm');
  const hour7 = content.createElement('div', ['hour'], '8:00am - 10:30pm');

  append.element(hourWrapper, hour1, hour2, hour3, hour4, hour5, hour6, hour7)
  
  append.element(openContent, dayWrapper, hourWrapper)

  append.element(openHeader, openHeaderText)
  
  append.element(openHourWrapper, openHeader, openContent)
  
  const locationWrapper = content.createElement('div', ['location-wrapper'])
  const locationImage = content.createElement('img')
  locationImage.setAttribute('src', location)
  append.element(locationWrapper, locationImage)

  append.element(hourLocation, openHourWrapper, locationWrapper)

  // Timeline / Our History
  const timeline = content.createElement('div', ['timeline']);
  const timeLineHeader = content.createElement('div', ['timeline-header'], 'Our History')
  const timelineWrapper = content.createElement('div', ['timeline-wrapper'])
  const time1 = content.createElement('div', ['time'])
  const image1 = content.createElement('img', ['time-image']);
  image1.setAttribute('src', menu)
  const text1 = content.createElement('div', ['time-text'], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur sit voluptate iusto sunt repudiandae?')
  const lineWrapper1 = content.createElement('div', ['line-wrapper']);
  const line1 = content.createElement('div', ['line']);
  const year1 = content.createElement('div', ['time-year'], '2023');

  append.element(lineWrapper1, year1, line1)
  append.element(time1, image1, lineWrapper1, text1)

  const time2 = content.createElement('div', ['time'])
  const image2 = content.createElement('img', ['time-image']);
  image2.setAttribute('src', menu)
  const text2 = content.createElement('div', ['time-text'], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur sit voluptate iusto sunt repudiandae?')
  const lineWrapper2 = content.createElement('div', ['line-wrapper']);
  const line2 = content.createElement('div', ['line']);
  const year2 = content.createElement('div', ['time-year'], '2023.2');

  append.element(lineWrapper2, year2, line2)
  append.element(time2, image2, lineWrapper2, text2)
  const time3 = content.createElement('div', ['time'])
  const image3 = content.createElement('img', ['time-image']);
  image3.setAttribute('src', menu)
  const text3 = content.createElement('div', ['time-text'], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, consectetur sit voluptate iusto sunt repudiandae?')
  const lineWrapper3 = content.createElement('div', ['line-wrapper']);
  const line3 = content.createElement('div', ['line']);
  const year3 = content.createElement('div', ['time-year'], '2024');

  append.element(lineWrapper3, year3, line3)
  append.element(time3, image3, lineWrapper3, text3)

  append.element(timelineWrapper, time1, time2, time3)
  append.element(timeline, timeLineHeader, timelineWrapper)

  // Founder
  const founderWrapper = content.createElement('div', ['founder']);
  const founderHeader = content.createElement('div', ['founder-header'], 'Founder')
  const founderContent = content.createElement('div', ['founder-content']);
  const founderName = content.createElement('div', ['founder-name'], 'Megatron');
  const founderText= content.createElement('div', ['founder-text'], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus repellat illo corporis esse, fuga ducimus tempora officia distinctio vero!')
  const founderInfo = content.createElement('div', ['founder-info-wrapper']);
  const founderImageWrapper = content.createElement('div', ['image-wrapper'])
  const founderImage = content.createElement('img');
  founderImage.setAttribute('src', menu);

  append.element(founderImageWrapper, founderImage)
  
  append.element(founderInfo, founderName, founderText)
  append.element(founderContent, founderInfo, founderImageWrapper)

  append.element(founderWrapper, founderHeader, founderContent)

  // Append About Content
  append.element(aboutContainer, aboutHeader, hourLocation, timeline, founderWrapper)

  // Footer
  const footer = content.createElement('footer')

  // Copyright
  const copyrightWrapper = content.createElement('div', ['copyright-wrapper']);
  const cp1 = content.createElement('div', ['cp-1'], 'Image by storyset on Freepik')
  const anchor = content.createElement('a');
  anchor.setAttribute('href', 'https://www.freepik.com/free-vector/people-eating-restaurant-concept-illustration_106335419.htm#fromView=search&page=1&position=3&uuid=ae296b3c-f1ce-4abe-86f1-83e18ba925e1')
  append.element(cp1, anchor)
  append.element(copyrightWrapper, cp1)

  // Info
  const footerText = content.createElement('div', ['info-wrapper']);
  const text = content.createElement('div', [], `Odin Restaurant © 2024`);
  append.element(footerText, text)

  // Socials
  const socialsWrapper = content.createElement('div', ['socials-wrapper']);
  const github = content.createElement('a')
  github.setAttribute('href', 'https://github.com/delfiald')
  github.setAttribute('rel', 'noreferrer noopener')
  github.setAttribute('target', '_blank')
  const githubIcon = content.createElement('i', ['fab', 'fa-github'])
  append.element(github, githubIcon);
  const linkedin = content.createElement('a')
  linkedin.setAttribute('href', '#')
  const linkedInIcon = content.createElement('i', ['fab', 'fa-linkedin'])
  append.element(linkedin, linkedInIcon)
  
  append.element(socialsWrapper, github, linkedin)

  append.element(footer, copyrightWrapper, footerText, socialsWrapper)

  return {
    aboutContainer,
    footer
  };
}