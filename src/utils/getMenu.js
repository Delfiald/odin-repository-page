export default (target) => {
  const items = []
  
  let amount;
  if(target === 'bag') {
    target = '.bag-container .item';
    amount = '.amount'
  }else if(target === 'menu') {
    target = '.menu';
    amount = '.value'
  }else {
    alert('Error');
    return;
  }

  const menus = document.querySelectorAll(target);

  menus.forEach(menu => {
    const item = {
      id: menu.dataset.id,
      amount: menu.querySelector(amount).textContent
    };
    items.push(item);
  });

  return items;
}