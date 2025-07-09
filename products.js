const products = [
  { name: "T-Shirt", category: "Clothing", price: 500, rating: 4.2 },
  { name: "Laptop", category: "Electronics", price: 45000, rating: 4.8 },
  { name: "Jeans", category: "Clothing", price: 1200, rating: 4.0 },
  { name: "Smartphone", category: "Electronics", price: 25000, rating: 4.5 },
];

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortOption").value;
  let filtered = products.filter(p => category === "All" || p.category === category);

  if (sort === "price") filtered.sort((a, b) => a.price - b.price);
  else filtered.sort((a, b) => b.rating - a.rating);

  displayProducts(filtered);
}

function displayProducts(productList) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  productList.forEach(p => {
    container.innerHTML += `<div class="card">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p>Rating: ${p.rating}</p>
    </div>`;
  });
}

filterProducts();
