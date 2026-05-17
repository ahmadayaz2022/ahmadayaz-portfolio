# 🚀 Complete Setup Guide - Portfolio Website

This guide will walk you through setting up your professional portfolio website from scratch.

## 📋 Quick Setup (5 minutes)

### Prerequisites
- Node.js v14+ ([Download](https://nodejs.org))
- MongoDB Atlas account ([Sign up](https://www.mongodb.com/cloud/atlas))
- Git ([Download](https://git-scm.com))

### 1️⃣ Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Configure `.env` file:**
```env
...
```

**Start backend:**
```bash
npm run dev
```

Expected output:
```
✅ Server running on port 5000
📡 API available at http://localhost:5000/api/health
🔐 Environment: development
```

### 2️⃣ Frontend Setup

```bash
# Navigate to client directory (in a new terminal)
cd client

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local
```

**Configure `.env.local`:**
```env
VITE_API_URL=http://localhost:5000/api
```

**Start frontend:**
```bash
npm run dev
```

Expected output:
```
  VITE v8.0.12  ready in 234 ms
  ➜  Local:   http://localhost:5173/
```

### 3️⃣ Access Your Application

- **Frontend**: http://localhost:3000 or http://localhost:5173
- **API Health**: http://localhost:5000/api/health
- **Admin Signup**: http://localhost:3000/signup
- **Admin Login**: http://localhost:3000/login
- **Admin Dashboard**: http://localhost:3000/admin (after login)

---

## 🗄️ MongoDB Setup (Detailed)

### Step 1: Create MongoDB Atlas Account
1. Visit [mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Click "Register"
3. Sign up with email or Google

### Step 2: Create a Cluster
1. Click "Create a Deployment"
2. Choose "Free" tier
3. Select "AWS" provider
4. Choose closest region to you
5. Click "Create Deployment"
6. Wait 1-2 minutes for cluster to create

### Step 3: Create Database User
1. Go to "Database Access"
2. Click "Add New Database User"
3. Set username: `admin`
4. Set password: (generate and save it)
5. Click "Create User"

### Step 4: Get Connection String
1. Go to "Databases"
2. Click "Connect" on your cluster
3. Select "Drivers"
4. Choose Node.js
5. Copy the connection string
6. Replace `<username>` and `<password>` with your credentials
7. Add to `.env` as `MONGO_URI`



---

## 📚 Creating Your First Admin Account

### Step 1: Navigate to Signup
1. Open http://localhost:3000/signup
2. Fill in the registration form:
   - **Name**: Your name
   - **Email**: Your email
   - **Password**: Min 6 chars, with uppercase, lowercase, number
   - **Confirm Password**: Must match

### Step 2: Create Account
1. Click "Create Account"
2. You'll be automatically logged in
3. Redirected to dashboard

---

## 🎯 First Steps After Setup

### 1. Update Your Profile
1. Go to **Admin Panel** → **Profile**
2. Update:
   - Name
   - Professional Title
   - Bio
   - Profile picture (coming soon)

### 2. Add Your First Project
1. Go to **Admin Panel** → **Add Project**
2. Fill in:
   - Title
   - Description
   - Technologies (comma-separated)
   - Category
   - Links (GitHub, Live Demo)
3. Click "Publish" or "Save as Draft"

### 3. View Published Projects
1. Go to **Home Page** → **Projects**
2. You'll see all published projects
3. Visitors can view project details

### 4. Manage Messages
1. Visitors submit messages via Contact form
2. Go to **Admin Panel** → **Messages**
3. View, mark as read, or archive messages

---

## 📦 Project File Structure

```
ahmadayaz-portfolio/
├── server/                    # Backend (Node.js + Express)
│   ├── config/               # Database configuration
│   ├── controllers/          # Business logic
│   ├── middleware/           # Authentication, validation
│   ├── models/               # Database schemas
│   ├── routes/               # API routes
│   ├── .env                  # Environment variables (don't commit)
│   ├── server.js             # Entry point
│   └── package.json
│
└── client/                    # Frontend (React + Vite)
    ├── public/               # Static files
    ├── src/
    │   ├── components/       # React components
    │   ├── pages/            # Page components
    │   ├── context/          # React Context
    │   ├── services/         # API client
    │   ├── App.jsx           # Main component
    │   └── main.jsx          # Entry point
    ├── .env.local            # Environment variables
    └── package.json
```

---

## 🔐 Security Checklist

- [ ] JWT_SECRET is strong (32+ characters)
- [ ] MONGO_URI is kept private (never in git)
- [ ] Environment variables are in `.env` files
- [ ] `.env` files are in `.gitignore`
- [ ] Password validation enabled
- [ ] Rate limiting enabled
- [ ] CORS properly configured
- [ ] HTTPS will be enabled in production

---

## 🚀 Deployment Guide

### Deploy Backend to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-portfolio-backend

# Set environment variables
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret_key
heroku config:set FRONTEND_URL=https://your-frontend-url.com
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

### Deploy Frontend to Vercel

```bash
# Option 1: Via Git
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Add environment variable: VITE_API_URL=your-backend-url
5. Deploy

# Option 2: Via CLI
npm install -g vercel
vercel
```

### Environment Variables for Production

**Backend (Heroku):**
```
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://...
JWT_SECRET=long-random-string
JWT_EXPIRE=7d
FRONTEND_URL=https://your-frontend-domain.com
ALLOW_MULTIPLE_ADMINS=false
```

**Frontend (Vercel):**
```
VITE_API_URL=https://your-backend-url.com/api
```

---

## 🐛 Troubleshooting

### Issue: "Cannot connect to MongoDB"
**Solution:**
- Check connection string is correct
- Verify username and password
- Whitelist your IP in MongoDB Atlas
- Ensure network access is allowed

### Issue: "CORS error"
**Solution:**
- Check FRONTEND_URL in server `.env`
- Ensure frontend URL matches exactly
- Check request headers

### Issue: "Cannot login"
**Solution:**
- Verify email and password are correct
- Check backend is running
- Look at browser console for errors
- Check JWT_SECRET is set

### Issue: "Changes not saving"
**Solution:**
- Check browser console for errors
- Verify backend is running
- Check network tab in DevTools
- Ensure token is being sent with requests

---

## 📞 Support & Resources

### Documentation
- [React Docs](https://react.dev)
- [Express Docs](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

### Useful Commands

```bash
# Backend
npm run dev          # Development mode
npm start            # Production mode
npm run build        # Build for production

# Frontend
npm run dev          # Development mode
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run linter
```

---

## ✅ Setup Verification Checklist

- [ ] Node.js installed (`node --version`)
- [ ] MongoDB Atlas account created
- [ ] MongoDB connection string working
- [ ] Backend `.env` configured
- [ ] Backend running on http://localhost:5000
- [ ] API health check working
- [ ] Frontend `.env.local` configured
- [ ] Frontend running on http://localhost:5173
- [ ] Can navigate to home page
- [ ] Can access login page
- [ ] Can create admin account
- [ ] Can login to dashboard
- [ ] Can access admin panel
- [ ] Can add a project
- [ ] Can view project on public site

---

## 🎉 Congratulations!

Your professional portfolio website is now set up and ready to use. 

**Next Steps:**
1. Customize your profile
2. Add your projects
3. Test the contact form
4. Deploy to production
5. Share with the world! 🌍

---

## 📝 Notes

- Keep your `.env` files secure - never commit them
- Regularly update dependencies: `npm update`
- Monitor MongoDB usage (free tier has limits)
- Backup your data regularly
- Test all features before deploying

Happy coding! 🚀
