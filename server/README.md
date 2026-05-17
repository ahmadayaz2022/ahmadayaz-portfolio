# Portfolio Website - Backend API

A professional Node.js/Express backend for a portfolio website with admin-only management capabilities.

## 🚀 Features

- **Secure Authentication**: JWT-based authentication with secure password hashing
- **Admin Dashboard**: Complete admin panel to manage portfolio content
- **Project Management**: Create, read, update, and delete projects
- **Contact Messages**: Manage visitor inquiries and messages
- **User Profiles**: Admin can manage their profile and credentials
- **Input Validation**: Comprehensive form validation using express-validator
- **Rate Limiting**: Protection against brute force and DoS attacks
- **CORS**: Secure cross-origin requests
- **Error Handling**: Global error handling middleware
- **MongoDB Integration**: Scalable NoSQL database

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance
- Git

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_min_32_chars
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
ALLOW_MULTIPLE_ADMINS=false
```

## 🗄️ Database Setup

### MongoDB Connection String Format
```
mongodb+srv://username:password@cluster.mongodb.net/database_name?appName=Cluster0
```

To get your connection string:
1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com)
2. Create a new cluster
3. Create a database user with read/write permissions
4. Click "Connect" and copy the connection string
5. Replace `username` and `password` with your credentials

## ▶️ Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

### Check API Health
```bash
curl http://localhost:5000/api/health
```

## 📚 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - Register admin account
- `POST /login` - Login with email and password
- `GET /me` - Get current user (protected)
- `PUT /profile` - Update profile (protected)
- `POST /change-password` - Change password (protected)
- `POST /logout` - Logout (protected)

### Projects Routes (`/api/projects`)
- `GET /` - Get all published projects (public)
- `GET /:id` - Get single project details (public)
- `GET /admin/my-projects` - Get admin's projects (protected)
- `POST /` - Create new project (protected)
- `PUT /:id` - Update project (protected)
- `DELETE /:id` - Delete project (protected)

### Messages Routes (`/api/messages`)
- `POST /` - Submit contact form (public)
- `GET /` - Get all messages (protected)
- `PUT /:id/read` - Mark message as read (protected)
- `DELETE /:id` - Delete message (protected)

## 🔐 Security Features

### Rate Limiting
- General: 100 requests per 15 minutes
- Auth: 5 requests per 15 minutes

### Password Requirements
- Minimum 6 characters
- At least 1 uppercase letter
- At least 1 lowercase letter
- At least 1 number

### Token Management
- JWT tokens expire in 7 days (configurable)
- Tokens are stored in Authorization header: `Bearer <token>`

### Data Validation
- Email format validation
- Input sanitization
- MongoDB injection prevention
- XSS protection with Helmet

## 📝 Database Models

### User Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (hashed, required),
  avatar: String,
  title: String,
  bio: String,
  role: String (enum: ["admin", "user"]),
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Project Schema
```javascript
{
  title: String (required),
  description: String (required),
  longDescription: String,
  images: Array<{url, caption, isMain}>,
  technologies: Array<String>,
  category: String (enum: [web, mobile, desktop, fullstack, frontend, backend, devops, other]),
  liveUrl: String,
  githubUrl: String,
  featured: Boolean,
  status: String (enum: [draft, published, archived]),
  completionDate: Date,
  createdBy: ObjectId (reference to User),
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Message Schema
```javascript
{
  name: String (required),
  email: String (required),
  subject: String (required),
  message: String (required),
  phone: String,
  company: String,
  status: String (enum: [unread, read, replied, archived]),
  repliedAt: Date,
  replyMessage: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 Deployment

### Deploy to Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret_key
heroku config:set FRONTEND_URL=your_frontend_url

# Deploy
git push heroku main
```

### Deploy to Vercel
Vercel is best for frontend. Use Heroku or Railway for backend.

### Deploy to Railway.app
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

## 📊 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| PORT | No | Server port (default: 5000) |
| NODE_ENV | No | Environment (development/production) |
| MONGO_URI | Yes | MongoDB connection string |
| JWT_SECRET | Yes | Secret key for JWT (min 32 chars) |
| JWT_EXPIRE | No | Token expiration (default: 7d) |
| FRONTEND_URL | No | Frontend URL for CORS |
| ALLOW_MULTIPLE_ADMINS | No | Allow multiple admins (default: false) |

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Check connection string format
- Verify IP is whitelisted in MongoDB Atlas
- Ensure database user has correct permissions

### JWT Errors
- Ensure JWT_SECRET is at least 32 characters
- Check token is being sent in Authorization header
- Verify token hasn't expired

### CORS Errors
- Add frontend URL to FRONTEND_URL env variable
- Check request headers include Content-Type

## 📦 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **express-validator**: Input validation
- **cors**: Cross-origin requests
- **helmet**: Security headers
- **dotenv**: Environment variables
- **express-rate-limit**: Rate limiting
- **express-mongo-sanitize**: Data sanitization
- **nodemon** (dev): Auto-reload

## 📝 License

MIT License - Feel free to use this project for your portfolio

## 🤝 Support

For issues or questions, please open an issue on GitHub.
