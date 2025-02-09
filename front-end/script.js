// Sample product data
const products = [
  { id: 1, name: "Black Cotton Top", price: "$30", image: "../images/products/top2.jpeg" },
  { id: 2, name: "Grey Coat", price: "$50", image: "../images/products/sweat1.jpeg" },
  { id: 3, name: "Blue Knot Top", price: "$30", image: "../images/products/top3.jpeg" },
  { id: 4, name: "Charcoal Two Knots Top", price: "$32", image: "../images/products/top5.jpeg" },
  { id: 5, name: "Lavender Top", price: "$35", image: "../images/products/top7.jpeg" },
  { id: 6, name: "Cream Top", price: "$35", image: "../images/products/top4.jpeg" },
  { id: 7, name: "Multi-Color Side buttoned", price: "$40", image: "../images/products/top9.jpeg" },
  { id: 8, name: "Designers Black shirt", price: "$50", image: "../images/products/top11.jpeg" },
  { id: 9, name: "Grey Trousers", price: "$33", image: "../images/products/pant1.jpeg" },
  { id: 10, name: "Red Bow Coat", price: "$50", image: "../images/products/sweat3.jpeg" },
  { id: 11, name: "Black Trench Coat", price: "$50", image: "../images/products/sweat5.jpeg" },
  { id: 12, name: "Sleeveless Grey Piece", price: "$30", image: "../images/products/top12.jpeg" },
  { id: 13, name: "One Sleeved Baby Pink Top", price: "$34.2", image: "../images/products/top15.jpeg" },
  { id: 14, name: "Bow Sleeves Cream piece", price: "$40", image: "../images/products/top16.jpeg" },
  { id: 15, name: "Front covered WideLegs", price: "$25", image: "../images/products/pant3.jpeg" },
  { id: 16, name: "Brown Knee Boots", price: "$54", image: "../images/products/boots2.jpeg" },
  { id: 17, name: "Cream Vintage Designer Piece", price: "$120", image: "../images/products/Top8.jpeg" },
  { id: 18, name: "Red Rose Slit Top", price: "$85", image: "../images/products/top19.jpeg" },
  { id: 19, name: "Grey Bow Skirt", price: "$40", image: "../images/products/skirt9.jpeg" },
  { id: 20, name: "Checked Bow Cotton Top", price: "$45", image: "../images/products/top23.jpeg" },
  { id: 21, name: "Checked Mud Trousers", price: "$", image: "../images/products/pant5.jpeg" },
  { id: 22, name: "Red-Cream Sweater", price: "$56", image: "../images/products/sweat2.jpeg" },
  { id: 23, name: "Green frill skirt", price: "$50", image: "../images/products/skirt6.jpeg" },
  { id: 24, name: "White Skinned Top", price: "$42", image: "../images/products/top20.jpeg" },
  { id: 25, name: "Grey Boots", price: "$100", image: "../images/products/boots1.jpeg" },
  { id: 26, name: "Brown Vintage SideBag", price: "$122", image: "../images/products/bag.jpeg" },
  { id: 27, name: "Red Frill Dress", price: "$142", image: "../images/products/skirt3.jpeg" },
  { id: 28, name: "Olive Punch-Down Dress", price: "$150", image: "../images/products/skirt4.jpeg" },
  { id: 29, name: "Red Bow Denim", price: "$185", image: "../images/products/pant6.jpeg" },
  { id: 30, name: "White Chick Dress", price: "$200", image: "../images/products/skirt5.jpeg" },
];



// Add liked property to each product if it doesn't exist
products.forEach((product) => {
  if (product.liked === undefined) {
    product.liked = false;
  }
});




let cart = [];

// Render products on the collection page
function renderProducts() {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = products
    .map(
      (product) => `
      <div class="product-item">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="like(${product.id})">
          <i class="${product.liked ? "fa-solid" : "fa-regular"} fa-heart"></i>
        </button>
      </div>
    `
    )
    .join("");
}

// Add item to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCartCounter();
  alert("Product added to cart!")
}


// Like function
function like(productId) {
  const product = products.find((p) => p.id === productId);
  product.liked = !product.liked; // Toggle liked state
  renderProducts(); // Re-render products to update the heart icon
  
}

// Update cart counter
function updateCartCounter() {
  const cartCounter = document.querySelector(".cart-counter");
  cartCounter.textContent = cart.length;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".collection-content")) {
    renderProducts();
  }
  updateCartCounter();
});

