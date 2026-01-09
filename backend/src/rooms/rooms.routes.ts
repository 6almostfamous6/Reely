import { Router } from 'express';
import { pool } from '../db';
import { requireAuth } from '../auth/auth.middleware';

const router = Router();

// Create room
router.post('/', requireAuth, async (req: any, res) => {
  const { name, videoUrl, provider } = req.body;

  const result = await pool.query(
    `INSERT INTO rooms (name, host_id, video_url, provider)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, req.user.id, videoUrl, provider]
  );

  res.json(result.rows[0]);
});

// Get room
router.get('/:id', async (req, res) => {
  const result = await pool.query(
    `SELECT * FROM rooms WHERE id = $1`,
    [req.params.id]
  );

  res.json(result.rows[0]);
});

export default router;
