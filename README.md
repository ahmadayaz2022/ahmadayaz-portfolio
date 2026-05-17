# 🎨 Professional Portfolio Website

A complete, production-ready portfolio website with admin dashboard for managing your projects, skills, and visitor messages.

## ✨ Features

### 👤 Admin Features
- ✅ Secure signup and login system
- ✅ Admin-only dashboard
- ✅ Profile management (name, title, bio, avatar)
- ✅ Create, edit, delete projects
- ✅ Project status management (draft, published, archived)
- ✅ Manage visitor messages
- ✅ Message categorization (unread, read, replied, archived)
- ✅ Password change functionality
- ✅ Session management

### 🌍 Public Features
- ✅ Beautiful home page
- ✅ Portfolio showcase
- ✅ Project filtering and search
- ✅ Contact form for visitors
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode theme
- ✅ Modern animations and interactions

### 🔐 Security Features
- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ Input validation and sanitization
- ✅ Rate limiting
- ✅ CORS protection
- ✅ Helmet security headers
- ✅ MongoDB injection prevention
- ✅ XSS protection

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Express Validator** - Input validation

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- MongoDB Atlas account
- Git

### Installation

```bash
# Clone repository
git clone <repository-url>
cd ahmadayaz-portfolio

# Follow SETUP_GUIDE.md for detailed instructions
# Or use quick setup below:

# Backend setup (Terminal 1)
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm run dev

# Frontend setup (Terminal 2)
cd client
npm install
cp .env.example .env.local
npm run dev
```

**Access:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api
- Admin Signup: http://localhost:5173/signup
- Admin Dashboard: http://localhost:5173/admin

## 📚 Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup instructions
- **[server/README.md](./server/README.md)** - Backend API documentation
- **[client/README.md](./client/README.md)** - Frontend documentation

## 📁 Project Structure

```
ahmadayaz-portfolio/
├── server/                 # Backend API
│   ├── config/            # Configuration
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Middleware (auth, validation)
│   ├── models/            # Database schemas
│   ├── routes/            # API routes
│   ├── .env.example       # Environment template
│   ├── server.js          # Entry point
│   └── package.json
│
├── client/                # Frontend React app
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context
│   │   ├── services/      # API service
│   │   ├── routes/        # Route components
│   │   ├── App.jsx        # Main component
│   │   └── main.jsx       # Entry point
│   ├── .env.example       # Environment template
│   ├── index.html
│   └── package.json
│
└── SETUP_GUIDE.md         # Complete setup guide
```

## 🔐 Authentication Flow

1. Admin visits `/signup` to create account
2. Only one admin account allowed by default
3. Admin logs in with credentials
4. JWT token issued (7 days expiry)
5. Token stored in localStorage
6. Token sent with every authenticated request
7. Protected routes check token validity
8. Auto-redirect to login if token expired

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Create admin account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile
- `POST /api/auth/change-password` - Change password

### Projects
- `GET /api/projects` - Get published projects
- `GET /api/projects/:id` - Get project details
- `GET /api/projects/admin/my-projects` - Get admin's projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Messages
- `POST /api/messages` - Submit contact form
- `GET /api/messages` - Get all messages
- `PUT /api/messages/:id/read` - Mark as read
- `DELETE /api/messages/:id` - Delete message

## 🎯 Admin Dashboard Routes

| Route | Purpose |
|-------|---------|
| `/admin` | Dashboard overview |
| `/admin/add-project` | Create new project |
| `/admin/manage-projects` | Edit/delete projects |
| `/admin/messages` | View contact messages |
| `/admin/profile` | Update profile settings |

## 📊 Database Models

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  avatar: String,
  title: String,
  bio: String,
  role: "admin" | "user",
  isActive: Boolean,
  lastLogin: Date
}
```

### Project
```javascript
{
  title: String,
  description: String,
  longDescription: String,
  images: Array,
  technologies: Array,
  category: String,
  liveUrl: String,
  githubUrl: String,
  featured: Boolean,
  status: "draft" | "published" | "archived",
  createdBy: ObjectId (User),
  views: Number
}
```

### Message
```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  phone: String,
  company: String,
  status: "unread" | "read" | "replied" | "archived",
  repliedAt: Date
}
```

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)
1. Create account on Heroku or Railway
2. Connect GitHub repository
3. Set environment variables
4. Deploy with one click

### Frontend Deployment (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy dist folder
3. Set API URL environment variable
4. Enable production mode

**See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed deployment steps**

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` to customize:
- Primary colors (cyan, blue)
- Background colors (slate)
- Gradient combinations

### Add New Features
- Create components in `src/components`
- Add routes in `src/routes`
- Create pages in `src/pages`
- Add API endpoints in backend

### Modify Database Schema
Update models in `server/models/` and create migrations if needed

## 🐛 Troubleshooting

### Common Issues

**Backend won't start:**
- Check MongoDB connection string
- Verify Node.js version
- Clear node_modules and reinstall

**Login not working:**
- Verify backend is running
- Check JWT_SECRET is set
- Look at browser console

**API connection issues:**
- Verify CORS configuration
- Check API URL in frontend
- Ensure backend is running

**See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for more troubleshooting**

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://...
JWT_SECRET=long_secret_key_32_chars
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:5000/api
```

## 📦 Dependencies

### Backend
- express, mongoose, bcryptjs, jsonwebtoken
- express-validator, helmet, cors
- dotenv, express-rate-limit

### Frontend
- react, react-dom, react-router-dom
- axios, tailwindcss, framer-motion

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - Feel free to use this project for your portfolio

## 🌟 Support & Feedback

- Found a bug? Open an issue
- Have suggestions? Let us know
- Want to contribute? Submit a PR

## 🎓 Learning Resources

- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Tutorial](https://docs.mongodb.com/manual/)
- [JWT Explained](https://jwt.io/introduction)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🎉 Ready to Go!

Your professional portfolio website is ready to showcase your work to the world. 

**Start here:** [SETUP_GUIDE.md](./SETUP_GUIDE.md)

**Happy coding! 🚀**

---

Made with ❤️ for developers who want to showcase their work professionally.
