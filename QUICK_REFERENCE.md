# ⚡ Quick Reference Guide

A quick reference for commands, endpoints, and common tasks.

## 🏃 Quick Commands

### Backend
```bash
cd server
npm install          # Install dependencies
npm run dev         # Start development server
npm start           # Start production server
```

### Frontend
```bash
cd client
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
```

### URLs
```
Frontend:     http://localhost:5173
Backend:      http://localhost:5000
API Health:   http://localhost:5000/api/health
Admin Panel:  http://localhost:5173/admin
```

---

## 🔌 API Endpoints Quick Reference

### Auth Endpoints
```
POST   /api/auth/register         → Create admin account
POST   /api/auth/login            → Login
GET    /api/auth/me               → Get current user
PUT    /api/auth/profile          → Update profile
POST   /api/auth/change-password  → Change password
POST   /api/auth/logout           → Logout
```

### Project Endpoints
```
GET    /api/projects                    → Get published projects
GET    /api/projects/:id                → Get project details
GET    /api/projects/admin/my-projects  → Get admin's projects
POST   /api/projects                    → Create project
PUT    /api/projects/:id                → Update project
DELETE /api/projects/:id                → Delete project
```

### Message Endpoints
```
POST   /api/messages           → Submit contact form
GET    /api/messages           → Get all messages
PUT    /api/messages/:id/read  → Mark as read
DELETE /api/messages/:id       → Delete message
```

---

## 🔑 Required Headers

All authenticated requests require:
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

---

## 📝 Common API Calls

### Login
```javascript
POST /api/auth/login
{
  "email": "admin@example.com",
  "password": "Password123"
}
```

### Create Project
```javascript
POST /api/projects
{
  "title": "My Project",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "category": "web",
  "status": "published"
}
```

### Submit Message
```javascript
POST /api/messages
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "I'm interested in your services..."
}
```

---

## 🗂️ File Structure Quick Reference

### Key Backend Files
```
server/
├── server.js                 → Main server file
├── config/db.js             → Database connection
├── controllers/
│   ├── authController.js    → Auth logic
│   ├── projectController.js → Project logic
│   └── messageController.js → Message logic
├── middleware/
│   ├── authMiddleware.js    → Auth verification
│   └── validators.js        → Input validation
└── models/
    ├── User.js
    ├── Project.js
    └── Message.js
```

### Key Frontend Files
```
client/src/
├── App.jsx                  → Main component
├── main.jsx                 → Entry point
├── context/
│   └── AuthContext.jsx      → Auth state
├── services/
│   └── api.js               → API client
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── admin/
│       ├── Dashboard.jsx
│       └── Profile.jsx
└── routes/
    └── ProtectedRoute.jsx   → Auth guard
```

---

## 🔐 Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
ALLOW_MULTIPLE_ADMINS=false
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 🐛 Troubleshooting Quick Fixes

### Backend won't start
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### MongoDB connection fails
```bash
# Check connection string format
# mongodb+srv://username:password@cluster.mongodb.net/?appName=Cluster0

# Verify:
✓ Username and password correct
✓ IP is whitelisted
✓ Database user has permissions
✓ Network is available
```

### Login not working
```bash
# Check:
1. Backend running? → npm run dev
2. JWT_SECRET set? → Check .env
3. Email correct? → Verify in database
4. Password correct? → Try reset
```

### Frontend won't connect to API
```bash
# Check:
1. VITE_API_URL correct? → Check .env.local
2. Backend running? → npm run dev in server/
3. CORS enabled? → Check server.js
4. No typos? → npm run dev and check console
```

---

## 📊 Password Requirements

- Minimum 6 characters
- At least 1 UPPERCASE letter
- At least 1 lowercase letter
- At least 1 number

Example: `MyPassword123`

---

## 🔄 Authentication Flow

```
1. User goes to /signup
2. Enters: name, email, password
3. Backend creates admin account
4. JWT token returned
5. Stored in localStorage
6. Auto added to API requests
7. Access /admin routes
8. Click logout
9. Token deleted, redirect to home
```

---

## 📈 Project Status Flow

```
Draft → Published → (Viewers see it)
  ↓
Archived → (Hidden from viewers)
```

---

## 💾 Database Query Examples

### Find admin user
```javascript
User.findOne({ email: "admin@example.com" })
```

### Get admin's projects
```javascript
Project.find({ createdBy: adminId, status: "published" })
```

### Get unread messages
```javascript
Message.find({ status: "unread" }).sort({ createdAt: -1 })
```

---

## 🎯 First Time Setup Checklist

```
[ ] Clone repository
[ ] Create .env files
[ ] npm install (both folders)
[ ] Start backend (npm run dev)
[ ] Start frontend (npm run dev)
[ ] Go to /signup
[ ] Create admin account
[ ] Login
[ ] Add first project
[ ] View on home page
```

---

## 📱 Responsive Breakpoints

```
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: > 1024px
```

All pages use Tailwind CSS responsive classes.

---

## 🎨 Color Palette

```
Primary:   Cyan (#06b6d4)
Secondary: Blue (#3b82f6)
Dark BG:   Slate (#0f172a, #1e293b, #334155)
Accent:    Various gradients
```

---

## ⏱️ Token Expiry

```
Default: 7 days
On expiry: Auto redirect to /login
New login: Get new token
```

---

## 📞 Getting Help

1. **Documentation**: Read SETUP_GUIDE.md
2. **Backend Issues**: Check server/README.md
3. **Frontend Issues**: Check client/README.md
4. **Errors**: Check console (browser & terminal)
5. **Logs**: Watch npm output for errors
6. **Database**: Check MongoDB Atlas dashboard

---

## 🚀 Deployment Checklist

- [ ] Push to GitHub
- [ ] Create Heroku app (backend)
- [ ] Set environment variables
- [ ] Deploy backend
- [ ] Create Vercel app (frontend)
- [ ] Set API URL
- [ ] Deploy frontend
- [ ] Test all features
- [ ] Monitor logs

---

## 📚 Useful Resources

- [Express.js](https://expressjs.com/) - Backend framework
- [React](https://react.dev/) - Frontend library
- [MongoDB](https://www.mongodb.com/) - Database
- [Vite](https://vitejs.dev/) - Frontend build tool
- [Tailwind](https://tailwindcss.com/) - CSS framework
- [Heroku](https://www.heroku.com/) - Backend hosting
- [Vercel](https://vercel.com/) - Frontend hosting

---

**Happy Coding!** 🚀

For detailed setup: [SETUP_GUIDE.md](./SETUP_GUIDE.md)
For reviews: [REVIEW_SUMMARY.md](./REVIEW_SUMMARY.md)
