let addButtons = document.querySelectorAll(".add");
let removeButtons = document.querySelectorAll(".remove");

const ITEMS = [
  "bhaji.5",
  "bhaji1",
  "pav",
  "bhaji2",
];

let CART = {};

addButtons
  .forEach((btn, index) => btn.addEventListener('click',
    function () {
      const index = Array.from(addButtons).indexOf(btn);
      if (CART[ITEMS[index]]) {
        CART[ITEMS[index]]++;
      } else {
        CART[ITEMS[index]] = 1;
      }
      // console.log(CART)
      resetCart()
      updateCart(CART);
    }, false)
  );

removeButtons
  .forEach((btn, index) => btn.addEventListener('click',
    function () {
      const index = Array.from(removeButtons).indexOf(btn);

      if (CART[ITEMS[index]]) {
        if (CART[ITEMS[index]] >= 0) {
          CART[ITEMS[index]]--;
        }
      } else {
        CART[ITEMS[index]] = 0;
      }
      // console.log(CART)
      resetCart()
      updateCart(CART);
    }, false)
  );


function updateCart(CART) {
  const myTableBody = document.getElementById("carttable");

  const cartkeys =Object.keys(CART);
  
    let tableRow1 = document.createElement('tr');

    let cartItem = document.createElement('td');
    cartItem.classList.add('CartItem');

    let tableRow2 = document.createElement('tr');

    let cartValue = document.createElement('td');
    cartValue.classList.add('CartValue');

    cartItem.innerHTML = Object.keys(CART);
    cartValue.innerHTML = Object.values(CART);
    // console.log(Object.keys(CART)[i])
    tableRow1.appendChild(cartItem);
    tableRow2.appendChild(cartValue);

    myTableBody.appendChild(tableRow1);
    myTableBody.appendChild(tableRow2);
  }

  function resetCart(){
    const myNode = document.getElementById("carttable");
    myNode.innerHTML = '';
  }

