export default () => {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('menu')

  const mainText = document.createElement('h1')
  mainText.textContent = ''
  homeContainer.appendChild(mainText);

  return homeContainer;
}