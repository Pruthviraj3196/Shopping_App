# 🛍️ Shopverse - React Shopping App

Shopverse is a modern and responsive shopping app built using **ReactJS**, **Firebase Authentication**, and **Axios** for fetching product data. It features a dynamic cart system, authentication (login/signup), and a mobile-friendly layout.

---

## Hosted Site - https://shopping-app-2sse.vercel.app/

## 🚀 Features

- 🔐 **Firebase Authentication** (Login / Signup / Logout)
- 🛒 **Add to Cart / Remove from Cart**
- ➕➖ **Adjust Quantity in Cart**
- 💰 **Total Price Calculation**
- ✅ **Checkout Functionality**
- 🧾 **Responsive Navbar and Footer**
- 📱 **Cart Popup like Mobile Drawer**
-    ** Search Item 
- 📦 **Products Fetched from [Fake Store API](https://api.escuelajs.co/api/v1/products)**

---

## 🧪 Tech Stack

- **ReactJS** (Functional Components & Hooks)
- **Firebase** (Authentication)
- **Axios** (API Calls)
- **React Router DOM**
- **CSS** (Responsive design)

---


---

## 🛠️ Installation



```bash
1 Clone the repository:
git clone https://github.com/pruthviraj3196/Shopping_App.git

2 Install dependencies:
npm install

3 Run the app:
npm run dev

4 Set up your Firebase credentials:
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

