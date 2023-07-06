# Shopzone App

## Overview

Shopzone is an e-commerce application built with Next.js, Tailwind CSS, Hero Icons, and Stripe API for payment integration. It provides users with the ability to explore products, add them to the cart, and successfully complete the checkout process. Shopzone aims to deliver a seamless shopping experience to users, allowing them to discover and purchase products with ease.

## Features

## MVP

 - [x] User registration and authentication
       
 - [x] Browse and search products

 - [x] Add products to the cart

 - [x] Checkout process with Stripe payment integration
       
## Post MVP
 - [ ] Manage cart (update quantities, remove items)
 
 - [ ] Order history and user profile management

- [ ] Product recommendations based on user preferences and browsing history
 Wishlist functionality
- [ ] Product reviews and ratings

## Getting Started

To run the Shopzone application locally, follow these steps:

- Clone the repository to your local machine.

- Install the required dependencies by running npm install in the project directory.

- Configure the environment variables for Stripe API integration.

- Create a .env.local file in the root directory and add the following variables:
makefile

- Copy code
NEXT_PUBLIC_STRIPE_API_KEY=<your_stripe_api_key>
- Replace <your_stripe_api_key> with your own Stripe API key.
- Start the development server by running npm run dev in the project directory.
- Open your web browser and navigate to http://localhost:3000 to access the Shopzone app.

## Technology Stack
The Shopzone app is built using the following technologies:

- Next.js: Next.js is a React framework that provides server-side rendering, automatic code splitting, and simple API routes. It allows for efficient development of scalable and optimized web applications.

- Tailwind CSS: Tailwind CSS is a utility-first CSS framework that provides a set of pre-built CSS classes to rapidly build custom user interfaces. It offers a flexible and responsive design system for creating modern and visually appealing websites.

- Hero Icons:Hero Icons is a set of free SVG icons designed by Steve Schoger. It provides a comprehensive collection of icons that can be easily customized and used in web projects.

- Stripe API: Stripe API is a powerful payment processing platform that allows developers to integrate secure and reliable payment functionality into their applications. It provides a wide range of features for handling payments, subscriptions, and more.

#### The combination of Next.js, Tailwind CSS, Hero Icons, and Stripe API offers a robust and efficient tech stack for building a high-performance e-commerce application like Shopzone.

## Folder Structure
The Shopzone repository follows a specific folder structure to organize the codebase effectively:
- /components: Contains reusable React components used throughout the application.

- /pages: Contains the Next.js pages that define the different routes and views of the application.

- /public: Contains static assets, such as images and fonts, that are served by Next.js.

- /styles: Contains global styles, utility classes, and Tailwind CSS configuration.

- /lib: Contains utility functions, API clients, and other helper modules.


  
### API Integration

The Shopzone app integrates with the Stripe API to handle payments. The following API endpoints are used:

POST /api/checkout/session: Creates a new Stripe Checkout session for initiating the payment process.

`POST /api/
