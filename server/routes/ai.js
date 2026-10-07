import express from 'express';

const router = express.Router();

// Chat endpoint
router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // TODO: Integrate with OpenAI or your AI API
    const response = {
      success: true,
      message: 'AI response placeholder',
      userMessage: message
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Explain endpoint
router.post('/explain', async (req, res) => {
  try {
    const { topic } = req.body;
    
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    const response = {
      success: true,
      explanation: `Explanation for ${topic}`,
      topic
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
