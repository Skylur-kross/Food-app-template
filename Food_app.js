let addButtons = document.querySelectorAll(".add");
let removeButtons = document.querySelectorAll(".remove");

const ITEMS = [
  {
    item_name: 'Bhaji (500 Gms) (2-3 People)',
    item_ID: 0
  },
  {
    item_name: 'Bhaji 1 Kg (4-5 People)',
    item_ID: 1
  },
  {
    item_name: 'Special Pav Bhaji + Masala Pav',
    item_ID: 2
  },
  {
    item_name: 'Missal PAV',
    item_ID: 3
  },
];

let CART = {
  
};




addButtons
  .forEach((btn, index) => btn.addEventListener('click',
    function () {
      const index = Array.from(addButtons).indexOf(btn);
      if (CART.hasOwnProperty(ITEMS[index].item_name)) {
        CART[ITEMS[index].item_name]++;
      } else {
        CART[ITEMS[index].item_name] = 1;
      }
      // console.log(CART)
      resetCart()
      updateCart(CART);
      document.getElementsByClassName("CartItem").style.padding = "16px";
      document.getElementsByClassName("CartValue").style.color = "red";
    }, false)
  );

removeButtons
  .forEach((btn, index) => btn.addEventListener('click',
    function () {
      const index = Array.from(removeButtons).indexOf(btn);

      if (CART.hasOwnProperty(ITEMS[index].item_name)) {
        if (CART[ITEMS[index].item_name]) {
          CART[ITEMS[index].item_name]--;
        } else {
          delete CART[ITEMS[index].item_name];
        }
      } else {
        CART[ITEMS[index].item_name] = 0;
      }
      // console.log(CART)
      resetCart()
      updateCart(CART);
    }, false)
  );


function updateCart(CART) {
  const myTableBody = document.getElementById("carttable");

  // const helloWorlds = {
  //   spanish: '¡Hola Mundo!',
  //   polish: 'Witaj świecie!',
  //   french: 'Bonjour le monde!'
  // }

  // const helloWorldsKeys = Object.keys(helloWorlds);

  // for (let i = 0; i < helloWorldsKeys.length; i++) {

  //   // create a table row element
  //   let tableRow = document.createElement('tr');

  //   // create a table cell (td) element
  //   let listItem = document.createElement('td');
  //   listItem.classList.add('listItem');

  //   // add content to table cell element
  //   listItem.innerHTML = helloWorlds[helloWorldsKeys[i]];

  //   // append table cell to table row
  //   tableRow.appendChild(listItem);

  //   // append table row to table body
  //   myTableBody.appendChild(tableRow);
  // }
  // console.log(Object.keys(CART));
  const cartkeys = Object.keys(CART);
  // for (let i = 0; i < cartkeys.length; i++) {
  cartkeys.forEach((itemKey) => {

    let tableRow1 = document.createElement('tr');

    let cartItem = document.createElement('td');
    cartItem.classList.add('CartItem');

    let cartValue = document.createElement('td');
    cartValue.classList.add('CartValue');

    cartItem.innerHTML = itemKey;
    cartValue.innerHTML = CART[itemKey];
    // console.log(Object.keys(CART)[i])
    tableRow1.appendChild(cartItem);
    tableRow1.appendChild(cartValue);


    myTableBody.appendChild(tableRow1);
    

  });
}

function resetCart() {
  const myNode = document.getElementById("carttable");
  myNode.innerHTML = '';
}

