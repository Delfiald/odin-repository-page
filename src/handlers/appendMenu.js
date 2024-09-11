import menu from '../components/menu.js'
import bagBtn from '../components/bagIcon.js'

import updateBagCounts from "../utils/updateBagCounts.js";

export default (content, header) => {
  header.querySelector('nav').appendChild(bagBtn());
  content.appendChild(menu());
  updateBagCounts.updateBagCount();
  header.style.background = 'var(--color-light)';
}