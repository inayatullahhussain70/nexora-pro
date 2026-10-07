import express from 'express';

const router = express.Router();

// Get user profile
router.get('/profile/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // TODO: Fetch from Supabase
    const user = {
      id,
      name: 'User Name',
      email: 'user@example.com',
      createdAt: new Date()
    };

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put('/profile/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    // TODO: Update in Supabase
    res.json({ success: true, message: 'Profile updated', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
