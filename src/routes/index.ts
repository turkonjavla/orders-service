import { Router, Request, Response } from 'express';

const router = Router();

router.get('/api/orders', async (req: Request, res: Response) => {
  res.send({ message: 'Orders index route' });
});

export { router as indexOrderRouter };
