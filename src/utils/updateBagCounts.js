export default (() => {
  const updateBagCount = () => {
    const allOrders = document.querySelectorAll('.add-wrapper .value');
    let totalCount = 0;
  
    allOrders.forEach(order => {
      totalCount += parseInt(order.textContent, 10) || 0;
    });
  
    document.querySelector('.bag-btn .count').textContent = totalCount;

    if(totalCount == 0) {
      document.querySelector('.bag-btn .bag-counts').style.visibility = 'hidden'
    }else {
      document.querySelector('.bag-btn .bag-counts').style.visibility = 'visible'
    }
  }

  return {
    updateBagCount: updateBagCount
  }
})()