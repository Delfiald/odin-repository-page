import about from '../components/about.js'

export default (content, body, header) => {
  content.appendChild(about().aboutContainer);
  body.appendChild(about().footer);
  header.style.background = 'var(--color-light)';
}