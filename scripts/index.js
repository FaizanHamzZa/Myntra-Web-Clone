let bagItems;
onLoad();

function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsonHome();
  bagItemIcon();
  mobileToggle()
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  bagItemIcon();
}
function bagItemIcon(){
  let bagItemcountE = document.querySelector('.bag-item-count');
  if (bagItems.length > 0){
    bagItemcountE.innerText = bagItems.length;
    bagItemcountE.style.visibility = 'visible';
  } else {
    bagItemcountE.style.visibility = 'hidden';
  }
}

function displayItemsonHome(){
  let innerhtml = "";
  items.forEach(item => {
    let itemsContainerE = document.querySelector('.items-container');
    if(!itemsContainerE){
      return
    }

    innerhtml += `
    <div class="item-container">
            <img class="item-image" src="${item.image}" alt="Item Image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div class="item-company">${item.company}</div>
            <div class="item-title">${item.item_name}</div>
            <div class="item-price">
                <span class="current-price">Rs. ${item.current_price}</span>
                <span class="original-price">Rs. ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% Off)</span>
            </div>
            <button class="add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
          </div>`       
          itemsContainerE.innerHTML = innerhtml;
   }); 
}
function mobileToggle(){
      document.getElementById('mobile-menu').addEventListener('click', function () {
        let navItems = document.querySelector('.nav_items');
        navItems.classList.toggle('show');
      });
    }



