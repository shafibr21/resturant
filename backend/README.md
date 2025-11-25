# Restaurant Backend API

RESTful API backend for the Restaurant application built with Node.js, Express, and MongoDB.

## Features

- ✅ RESTful API architecture
- ✅ MongoDB database with Mongoose ODM
- ✅ Input validation using express-validator
- ✅ Comprehensive error handling
- ✅ Appropriate HTTP status codes
- ✅ User authentication with JWT
- ✅ Password hashing with bcrypt
- ✅ CORS enabled

## Installation

1. Install dependencies:

```bash
cd backend
npm install
```

2. Create `.env` file:

```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB URI and JWT secret:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/restaurant
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

4. Start the server:

```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Dishes

- `GET /api/dishes` - Get all dishes (with optional filters: category, available)
- `GET /api/dishes/bestsellers` - Get best seller dishes
- `GET /api/dishes/:id` - Get single dish
- `POST /api/dishes` - Create new dish
- `PUT /api/dishes/:id` - Update dish
- `DELETE /api/dishes/:id` - Delete dish

### Orders

- `GET /api/orders` - Get all orders (with optional filter: status)
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status
- `DELETE /api/orders/:id` - Delete order

### Feedback

- `GET /api/feedback` - Get all feedbacks (with optional filter: approved)
- `GET /api/feedback/:id` - Get single feedback
- `POST /api/feedback` - Create new feedback
- `PUT /api/feedback/:id/approve` - Approve feedback
- `DELETE /api/feedback/:id` - Delete feedback

### Users

- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile/:id` - Get user profile
- `PUT /api/users/profile/:id` - Update user profile

### Categories

- `GET /api/categories` - Get all categories

## Response Format

### Success Response

```json
{
  "success": true,
  "data": { ... },
  "count": 10
}
```

### Error Response

```json
{
  "success": false,
  "error": "Error message",
  "details": [ ... ]
}
```

## HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## Validation

All endpoints include comprehensive input validation:

- Required fields validation
- Data type validation
- Format validation (email, phone, etc.)
- Range validation (min/max values)
- Enum validation for specific fields

## Error Handling

Centralized error handling middleware catches:

- Validation errors
- Database errors
- Cast errors (invalid IDs)
- Duplicate key errors
- JWT errors
- General server errors

## Database Models

### Dish

- name, description, price, category
- image, rating, mainColor, circleColor
- isAvailable, isBestSeller

### Order

- customerName, customerEmail, customerPhone
- items (array of dish references and quantities)
- totalAmount, status, deliveryAddress
- specialInstructions

### Feedback

- name, role, text, rating
- avatar, isApproved

### User

- name, email, password (hashed)
- role, phone, address

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input sanitization
- CORS configuration
- Environment variables for sensitive data
