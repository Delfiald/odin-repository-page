import home from '../components/home.js'

export default (content) => {
  content.appendChild(home().homeContainer);
  content.appendChild(home().background);
}