# Portfolio Website - Frontend

A modern React + Vite frontend for your professional portfolio with admin dashboard.

## 🎨 Features

- **Responsive Design**: Mobile-first, responsive design with Tailwind CSS
- **Admin Dashboard**: Complete portfolio management interface
- **Authentication**: Secure login and signup for admin
- **Project Showcase**: Display your portfolio projects
- **Contact Form**: Visitors can send messages
- **Project Management**: Add, edit, delete, and manage projects
- **Profile Management**: Update your profile information
- **Message Management**: View and manage contact messages
- **Modern UI**: Beautiful gradient designs and smooth animations
- **Fast Performance**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **React 19**: Latest React version
- **Vite**: Next-generation build tool
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **Framer Motion**: Animation library

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- Backend server running (see server README)

## 🚀 Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd client
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your backend URL:
```
VITE_API_URL=http://localhost:5000/api
```

## ▶️ Running the Development Server

### Start development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 📁 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── admin/     # Admin-specific components
│   │   ├── common/    # Common components (Navbar, Footer)
│   │   ├── home/      # Home page components
│   │   └── ui/        # UI components
│   ├── context/       # React context (AuthContext)
│   ├── pages/         # Page components
│   │   └── admin/     # Admin dashboard pages
│   ├── routes/        # Route components (ProtectedRoute)
│   ├── services/      # API services
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── package.json       # Dependencies
```

## 🔐 Authentication Flow

### Login/Signup
1. User submits credentials
2. Frontend sends request to `/api/auth/login` or `/api/auth/register`
3. Backend returns JWT token and user data
4. Token is stored in localStorage
5. User is redirected to dashboard

### Protected Routes
- Routes wrapped in `<ProtectedRoute>` require authentication
- If token is invalid or expired, user is redirected to login
- Token is automatically sent with all API requests

### Logout
- Token and user data are removed from localStorage
- User is redirected to home page

## 📄 Page Routes

### Public Pages
- `/` - Home page
- `/projects` - Project showcase
- `/contact` - Contact form
- `/login` - Admin login
- `/signup` - Admin registration

### Admin Pages (Protected)
- `/admin` - Dashboard
- `/admin/add-project` - Create new project
- `/admin/manage-projects` - Edit/delete projects
- `/admin/messages` - View contact messages
- `/admin/profile` - Update profile settings

## 🎯 Components Guide

### AuthContext
Manages authentication state:
- `user`: Current user object
- `token`: JWT token
- `loading`: Loading state
- `isAuthenticated`: Auth status
- `login(token, userData)`: Login user
- `logout()`: Logout user
- `updateUser(userData)`: Update user data

### ProtectedRoute
Wrapper component that:
- Checks if user is authenticated
- Shows loading spinner while checking auth
- Redirects to login if not authenticated
- Renders component if authenticated

### API Service
Axios instance with:
- Auto token injection in requests
- Auto token refresh on 401 errors
- Centralized error handling
- Base URL configuration

## 🎨 Styling

### Tailwind CSS Classes Used
- `bg-gradient-to-r`: Gradient backgrounds
- `text-transparent bg-clip-text`: Gradient text
- `hover:shadow-xl`: Hover effects
- `transition`: Smooth transitions
- `rounded-2xl`: Border radius
- `flex flex-col`: Flexbox layout

### Color Scheme
- Primary: Cyan (`cyan-400`, `cyan-500`)
- Secondary: Blue (`blue-500`, `blue-600`)
- Background: Slate (`slate-950`, `slate-900`, `slate-800`)
- Accent: Various gradients

## 📡 API Integration

### Example API Calls

```javascript
// Login
const res = await API.post("/auth/login", { email, password });

// Get user
const res = await API.get("/auth/me");

// Create project
const res = await API.post("/projects", projectData);

// Get projects
const res = await API.get("/projects?page=1&limit=10");

// Submit message
const res = await API.post("/messages", messageData);
```

## 🚀 Deployment

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Deploy using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

### Environment Variables for Production
Create `.env.production.local`:
```
VITE_API_URL=https://your-backend-url.com/api
```

## 📊 Form Validation

### Login Form
- Email: Valid email format required
- Password: Required

### Signup Form
- Name: 2-50 characters
- Email: Valid email format
- Password: Minimum 6 characters, must contain uppercase, lowercase, and number
- Confirm Password: Must match password

### Project Form
- Title: Required, max 200 characters
- Description: Required, max 2000 characters
- Category: Required, must be valid category
- Technologies: At least one required

### Contact Form
- Name: Required
- Email: Valid email required
- Subject: Required
- Message: Required, min 10 characters

## 🔧 Configuration

### Vite Configuration (`vite.config.js`)
```javascript
export default {
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
}
```

### Tailwind Configuration (`tailwind.config.js`)
Configured for dark theme with custom colors

## 📦 Dependencies

- **react**: UI library
- **react-dom**: React DOM rendering
- **react-router-dom**: Routing
- **axios**: HTTP client
- **framer-motion**: Animations
- **tailwindcss**: Styling

## 🐛 Troubleshooting

### API Connection Issues
- Verify backend is running on correct port
- Check VITE_API_URL in .env.local
- Look for CORS errors in browser console

### Login Issues
- Verify credentials are correct
- Check backend authentication routes
- Verify JWT token is being stored

### Build Errors
- Delete node_modules and package-lock.json
- Run `npm install` again
- Clear browser cache

## 💡 Best Practices

1. **Store sensitive data**: Never commit .env files with real values
2. **API calls**: Always use the centralized API service
3. **Authentication**: Check `isAuthenticated` before rendering admin routes
4. **Error handling**: Show user-friendly error messages
5. **Loading states**: Always provide feedback when making API calls

## 📝 License

MIT License - Feel free to use this project for your portfolio

## 🤝 Support

For issues or questions, please open an issue on GitHub.
