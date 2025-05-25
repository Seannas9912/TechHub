const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999,
        category: "phones",
        image: "https://via.placeholder.com/300x200/3b82f6/white?text=iPhone+15+Pro",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 2,
        name: "MacBook Air",
        price: 1199,
        category: "laptops",
        image: "https://via.placeholder.com/300x200/10b981/white?text=MacBook+Air",
        description: "Lightweight laptop perfect for students and professionals"
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 249,
        category: "accessories",
        image: "https://via.placeholder.com/300x200/f59e0b/white?text=AirPods+Pro",
        description: "Wireless earbuds with active noise cancellation"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 899,
        category: "phones",
        image: "https://via.placeholder.com/300x200/8b5cf6/white?text=Samsung+Galaxy+S24",
        description: "Android phone with stunning display and camera"
    },
    {
        id: 5,
        name: "Dell Laptop",
        price: 799,
        category: "laptops",
        image: "https://via.placeholder.com/300x200/06b6d4/white?text=Dell+Laptop",
        description: "Reliable laptop for everyday use"
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 49,
        category: "accessories",
        image: "https://via.placeholder.com/300x200/ec4899/white?text=Wireless+Mouse",
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
console.log('We have', products.lenght, 'products');