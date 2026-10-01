# TechHub

TechHub is a beginner-friendly e-commerce website built as a static storefront for tech products. The project is designed to demonstrate how a simple online shop can be created using plain HTML, CSS, and JavaScript without a backend or database.

## What this repo generates

This repository generates a front-end online shopping experience for a tech brand called TechVibe. When opened in a browser, it displays:

- a landing/home page with a hero section
- a featured products area
- a product catalog page with category filters
- a shopping cart page with live totals
- a contact page and checkout entry point
- browser-side cart logic using localStorage

In simple terms, this project produces a static e-commerce website that users can browse and interact with in the browser.

## Project overview

TechHub showcases a small catalog of electronics and accessories such as:

- iPhone 15 Pro
- MacBook Air
- AirPods Pro
- Samsung Galaxy S24
- Dell Laptop
- Wireless Mouse

Each product includes an image, price, description, and action buttons for adding to cart or viewing details.

## Main features

- Responsive storefront layout
- Navigation bar for Home, Products, Contact, and Cart
- Featured product cards on the homepage
- Category filters for phones, laptops, and accessories
- Add-to-cart functionality
- Cart count updates in the navigation bar
- Cart persistence with localStorage
- Notification messages when items are added
- Simple styling using a modern tech-themed design

## Tech stack

- HTML5 for the page structure
- CSS3 for styling and layout
- JavaScript for product data and interactivity
- No framework or backend dependency

## Repository structure

```text
TechHub/
├── index.html          # Home page
├── products.html       # Catalog page with filters
├── cart.html           # Shopping cart page
├── contact.html        # Contact page
├── checkout.html       # Checkout page placeholder
├── script.js           # Product data, cart logic, and UI behavior
├── styles.css          # Website styling and layout
├── README.md           # Project documentation
└── .gitattributes      # Git attributes configuration
```

## How it works

1. The browser loads the HTML pages.
2. JavaScript creates the product list and renders product cards.
3. Clicking a product button adds it to the cart.
4. Cart data is saved in the browser using localStorage.
5. The cart total and item count are updated dynamically.

## How to run locally

Because this is a static website, you can run it by opening one of the HTML files directly in a browser.

Example:

```bash
# From the project folder
open index.html
```

If you prefer a local web server, you can also use Python:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

This project is intentionally simple and beginner-focused. It is a learning example for building e-commerce storefronts with core web technologies rather than advanced frameworks.

## Future improvements

Possible upgrades include:

- checkout form validation
- quantity controls in the cart
- remove item actions
- real product database integration
- backend API for payments and orders
- login and user accounts
- dark mode or enhanced responsiveness

## Summary

TechHub is a beginner e-commerce website that generates a simple but functional tech store front-end. It demonstrates how HTML, CSS, and JavaScript can be combined to build a product catalog, interactive cart, and shopping experience without a full stack application.
