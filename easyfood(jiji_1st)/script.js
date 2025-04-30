// List of cart items and total
let cart = [];
let total = 0;

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email !== "" && password !== "") {
      // Simulate successful login
      window.location.href = "homepage.html"; // redirect to homepage
  } else {
      alert("Please enter both email and password.");
  }
}


// Add food to cart
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

// Show cart list
function updateCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = ""; // clear old cart

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - RM${item.price.toFixed(2)} `;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteItem(index);

        li.appendChild(delBtn);
        cartList.appendChild(li);
    });

    document.getElementById("totalPrice").textContent = total.toFixed(2);
}

// Delete an item from the cart
function deleteItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// Simulate payment
function pay() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Payment Successful! Thank you ❤️");
    cart = [];
    total = 0;
    updateCart();
}

// Search food items by name
function searchFood() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const foodItems = document.querySelectorAll(".food-item");

    foodItems.forEach(item => {
        const name = item.querySelector("p").textContent.toLowerCase();
        if (name.includes(searchInput)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
