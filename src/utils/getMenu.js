export default () => {
  const items = []
  const menus = document.querySelectorAll('.bag-container .item');

  menus.forEach(menu => {
    const item = {
      id: menu.dataset.id,
      amount: menu.querySelector('.amount').textContent
    };
    items.push(item);
  });

  return items;
}