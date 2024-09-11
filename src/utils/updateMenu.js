export default (item) => {
  const menus = Array.from(document.querySelectorAll('.menu'));

  console.log(item.dataset.id);

  const menu = menus.find(menu => menu.dataset.id === item.dataset.id);

  return menu;
}