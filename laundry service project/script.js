let cartitem = [];

let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let total = 0;

function addItem(name, price) {
  let exists = cart.find((item) => item.name === name);

  if (exists) {
    exists.qty += 1;
  } else {
    cart.push({ id: cart.length + 1, name, price, qty: 1 });
  }
  savecart();
  rendercart();
}

function removeItem(idx) {
  if (cart[idx].qty > 1) {
    cart[idx].qty -= 1;
  } else {
    cart.splice(idx, 1);
  }
  savecart();
  rendercart();
}

function savecart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function rendercart() {
  let cartBody = document.querySelector(".cart-body");
  let totalAmount = document.querySelector("#total-amount");
  cartBody.innerHTML = "";

  total = 0;

  cart.forEach((item, idx) => {
    total += item.price * item.qty;

    let tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>₹${item.price} X  ${item.qty}</td>
    <td><button onclick="removeItem(${idx})" class="remove-btn">Remove</button></td>
    `;

    cartBody.appendChild(tr);
  });

  totalAmount.textContent = `₹${total}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}
rendercart();


