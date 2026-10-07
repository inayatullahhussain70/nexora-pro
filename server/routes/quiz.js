import express from 'express';

const router = express.Router();

// Get quizzes
router.get('/', async (req, res) => {
  try {
    // TODO: Fetch from Supabase
    const quizzes = [
      { id: 1, title: 'Math Basics', subject: 'Math', difficulty: 'Easy' },
      { id: 2, title: 'Physics 101', subject: 'Physics', difficulty: 'Medium' }
    ];

    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit quiz answers
router.post('/submit', async (req, res) => {
  try {
    const { quizId, answers } = req.body;
    
    if (!quizId || !answers) {
      return res.status(400).json({ error: 'quizId and answers are required' });
    }

    // TODO: Calculate score and save to Supabase
    const result = {
      success: true,
      score: 85,
      totalQuestions: 10,
      percentage: 85
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
