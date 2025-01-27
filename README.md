# HOUZEZ

Welcome to the Real Estate Platform, a feature-rich application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). This platform allows users to explore, wishlist, purchase, and review real estate properties, while agents can add and manage their properties. Admins have the ability to oversee and manage users, properties, and reviews.

---

## 🛡️ Admin Access

- **Admin Username:** `admin@gmail.com`  
- **Admin Password:** `Admin123@`  

---

## 🌐 Live Website

[**Visit Live Site**](https://houzezdeal.web.app/)

---

## ✨ Features

### 📱 Responsive Design

- Fully responsive and optimized for mobile, tablet, and desktop views, including the dashboard.

### 🔑 Role-Based User Management

- Three roles: **User**, **Agent**, and **Admin**.
- Each role has a dedicated dashboard with specific functionalities.

### 🏠 Home Page

- Dynamic advertisement section with property cards.
- Latest user reviews showcasing recent property feedback.
- Unique extra sections to enhance user engagement.

### 🔒 Secure Authentication System

- Email/password-based registration and login.
- Social login functionality.
- Firebase error handling for registration and login errors.
- JWT implementation for secure token-based authentication.

### 🏢 Property Management

- **Agents:** Add, update, and delete properties.
- **Admins:** Verify, reject, or manage properties.
- **Users:** Wishlist, review, and purchase properties.

### 📊 Dashboard Features

- **Users:**
  - Manage profiles, wishlist properties, track purchased properties, and review properties.
- **Agents:**
  - Add and manage properties, track sold properties, and manage property requests.
- **Admins:**
  - Manage users, properties, and reviews, with fraud detection for agents.

### 📝 Wishlist and Offer System

- Users can wishlist properties and make offers within the specified price range.
- Offers are tracked with statuses (**pending**, **accepted**, or **rejected**).

### 🔍 Search and Sort Functionalities

- Search properties by location.
- Sort properties by price range.

### 💳 Payment Integration

- **Stripe** or equivalent payment gateway for secure transactions.
- Transaction ID generated and displayed for completed purchases.

### 🔔 Notifications

- Sweet alerts/toasts for CRUD operations, authentication events, and more.

### 🛠️ Additional Features

- Advertised properties are highlighted on the homepage.
- Fraud detection system for agents to ensure platform integrity.
- 404 error page for invalid routes.

---

## 🛠️ Development Highlights

### Client-Side

- Responsive UI using React.js and Tailwind CSS.
- Efficient data fetching and caching using TanStack Query.

### Server-Side

- Robust backend with Node.js and Express.js.
- MongoDB for database operations and data persistence.

### 🔑 Environment Variables

- Firebase configuration keys and MongoDB credentials are secured using environment variables.

### CRUD Operations

- Real-time notifications and user-friendly modals for all actions.

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [repository_url]


## 🛠️ Technologies Used

### Frontend

- **React.js** ⚛️  
- **Tailwind CSS** 🎨  
- **TanStack Query**  
- **Firebase Authentication** 🔥  

### Backend

- **Node.js** 🟩  
- **Express.js** 🌐  
- **MongoDB** 🍃  
- **Stripe API** 💳  

### Authentication

- **Firebase** and **JWT** 🔐  

### Notifications

- **SweetAlert** and **Toastify** 🔔  

---

## 🌟 Future Enhancements

- Implement a reset password feature.  
- Add email verification during registration.  
- Integrate advanced analytics for admin dashboards.  
- Enable real-time chat functionality between users and agents.  
