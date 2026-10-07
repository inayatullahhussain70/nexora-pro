# NEXORA PRO 🚀NEXORA UI
   ↓
User types a question
   ↓
Frontend sends request
   ↓
Your backend/server
   ↓
AI API
   ↓
AI generates answer
   ↓
Backend sends answer back
   ↓
NEXORA displays it

AI-powered educational learning platform with study tools, quizzes, and progress tracking.

## Features

✨ **AI Assistant** - Get instant answers and explanations  
📚 **Study Materials** - Comprehensive notes and flashcards  
🧠 **Learning Modules** - Structured lessons and practice  
📊 **Progress Tracking** - Monitor your learning journey  
🎯 **Quiz System** - Test your knowledge with interactive quizzes  
💎 **Pricing Plans** - Free and Pro tier options  

## Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI**: OpenAI API (configurable)
- **Deployment**: Render

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/inayatullahhussain70/nexora-pro.git
cd nexora-pro

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your environment variables
```

### Development

```bash
# Run development server (frontend + backend)
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Environment Variables

Create a `.env` file with the following:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_AI_API_KEY=your_openai_api_key
PORT=3000
NODE_ENV=development
```

## Deployment on Render

### Step 1: Push to GitHub
Make sure your repository is pushed to GitHub.

### Step 2: Create Render Service
1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `inayatullahhussain70/nexora-pro`
4. Configure the service:
   - **Name**: nexora-pro
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: Free (or Pro for better performance)

### Step 3: Add Environment Variables
In Render dashboard, go to "Environment" and add:

```
NODE_ENV=production
PORT=10000
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_AI_API_KEY=your_openai_api_key
```

### Step 4: Deploy
Click "Create Web Service" and Render will automatically deploy your app.

## Project Structure

```
nexora-pro/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── services/        # API and service functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── server/              # Express backend
│   ├── server.js        # Main server file
│   ├── routes/          # API routes
│   └── middleware/      # Express middleware
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── render.yaml          # Render deployment config
```

## API Routes

### Health Check
```
GET /api/health
```

### AI Chat
```
POST /api/ai/chat
Body: { "message": "Your question" }
```

### User Profile
```
GET /api/users/profile/:id
PUT /api/users/profile/:id
```

### Quiz
```
GET /api/quiz
POST /api/quiz/submit
Body: { "quizId": 1, "answers": [...] }
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For support, email support@nexorapro.com or open an issue on GitHub.

---

Built with ❤️ for students and learners everywhere
