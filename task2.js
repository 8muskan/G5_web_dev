async function dataProducts() {
  const response = await fetch('https://dummyjson.com/products');
  const finalData = await response.json();

  const container = document.getElementById('product-container');

  finalData.products.slice(0,5).forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img class="product-image" src="${product.thumbnail}" alt="${product.title}" />
      <div class="product-name">${product.title}</div>
      <div class="product-price">$${product.price}</div>
    `;

    container.appendChild(card);
  });
}

dataProducts();
    