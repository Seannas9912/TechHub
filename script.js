const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999,
        category: "phones",
        image: "https://www.firstshop.co.za/cdn/shop/files/mt223zm-a-bags-cases-and-sleeves-45740279890084.png?v=1722384459&width=480",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 2,
        name: "MacBook Air",
        price: 1199,
        category: "laptops",
        image: "https://www.firstshop.co.za/cdn/shop/files/mc7x4ze-a-macbook-59463117832559.jpg?v=1732154689&width=675",
        description: "Lightweight laptop perfect for students and professionals"
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 249,
        category: "accessories",
        image: "https://www.firstshop.co.za/cdn/shop/files/mtjv3ze-a-other-accessories-44519895531684.png?v=1712156324&width=480",
        description: "Wireless earbuds with active noise cancellation"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 899,
        category: "phones",
        image: "https://www.firstshop.co.za/cdn/shop/files/mf2844-smartphone-accessories-46130830704804.png?v=1726331321&width=675",
        description: "Android phone with stunning display and camera"
    },
    {
        id: 5,
        name: "Dell Laptop",
        price: 799,
        category: "laptops",
        image: "https://www.firstshop.co.za/cdn/shop/files/warmlk2-n15rpl-2500-3407-pla-h-windows-laptops-1169573548.jpg?v=1748004671&width=675",
        description: "Reliable laptop for everyday use"
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 49,
        category: "accessories",
        image: "https://www.firstshop.co.za/cdn/shop/files/758a8aa-mice-44784485695652.jpg?v=1714117433&width=675",
        description: "Ergonomic wireless mouse for comfortable use"
    }
];

// step 2: Creating out shopping cart.

let cart = [];

// step 3: Get referrences to HTML elements

const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

// step 4: Utility functions to format prices

function formatPrice(price) {
    return 'R' + price.toFixed(2);
}

console.log('JavaScript loaded successfully!');
console.log('We have', products.length, 'products');

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">View Details</button>
                </div>
            </div
        </div>
    `;
}

function displayProducts(productsToShow = products) {
    if (productsGrid) {
        const productsHTML = productsToShow.map(createProductCard).join('');
        productsGrid.innerHTML = productsHTML;
    }

    if (featuredProducts) {
        const featuredHTML = productsToShow.slice(0, 3).map(createProductCard).join('');
        featuredProducts.innerHTML = featuredHTML;
    }
}

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    alert('Product: ' + product.name + 
        '\nPrice: ' + formatPrice(product.price) + 
        '\nDescription: ' + product.description);
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');
            // Get category from button data attribute
            const category = this.getAttribute('data-category');
            // Filter products based on category
            let filteredProducts;
            if (category === 'all') {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(product => product.category === category);
            }
            // Display filtered products
            displayProducts(filteredProducts);
            console.log('Showing' , filteredProducts.length, 'products in category:', category);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, displaying products...');
    displayProducts();
    setupFilters();
});