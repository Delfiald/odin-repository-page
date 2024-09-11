import { content, append } from "../utils/domHelpers"

export default () => {
  const bagBtn = content.createElement('div', ['bag-btn', 'btn']);
  const i = content.createElement('i', ['fas', 'fa-bowl-food']);
  const bagAmount = content.createElement('div', ['bag-counts'])
  const amount = content.createElement('span', ['count'], 0);
  append.element(bagAmount, amount);
  append.element(i, bagAmount)
  append.element(bagBtn, i);

  return bagBtn;
}