# RentoHub 🏠

RentoHub is a full-stack rental listing platform designed for especially students and working professionals to discover affordable stays with smart filtering and search functionality.

The platform allows users to explore the listings, upload properties, manage their own stays, leave reviews, and search accommodations using flexible regex-based search and category filters.


## 🚀 Key Features

- 🔐 Authentication & Authorization using Passport.js
- 👤 Role-based Listing Management
- 🏠 Create, Edit & Delete Property Listings
- ☁️ Cloudinary Image Upload Integration
- ⭐ Review & Rating System
- 🧠 Regex-based Smart Search Functionality
- 🏷️ Multi-category Property Filtering
- 📱 Responsive UI with Bootstrap
- ✅ Server-side Validation using Joi
- ⚡ MVC Architecture for Scalable Backend Structure


## 🛠️ Tech Stack

### Frontend
- EJS
- Bootstrap
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication & Utilities
- Passport.js
- Express Session
- Connect Flash
- Multer
- Cloudinary
- Joi


## 🧩 Technical Highlights

### Smart Search System

Implemented regex-based dynamic search functionality allowing users to search listings by:
- title
- location
- categories

The search supports:
- partial keyword matching
- case-insensitive search
- dynamic query handling

Example:

```bash
/listings?search=kolkata
```

### Dynamic Category Filtering

Built multi-category filtering using query parameters and MongoDB dynamic queries.

Example:

```bash
/listings?category=PG
```

### Image Upload System

Integrated Cloudinary and Multer for secure cloud-based image uploads and storage.

---

## 📂 Project Architecture

RentoHub follows the MVC (Model View Controller) architecture:

```bash
Models → Database Schemas
Views → EJS Templates
Controllers → Business Logic
Routes → Request Handling
```

## ⚙️ Installation

### Clone Repository

```bash
git clone YOUR_GITHUB_LINK
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_uri
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
SECRET=your_session_secret
```

### Run Project

```bash
node app.js
```

---

## 🔮 Future Improvements

- Contact Owner System
- Favorites / Wishlist
- Booking Functionality
- AI-based Recommendations
- Advanced Search Filters

---

## 👩‍💻 Author

Lizzie Barman
