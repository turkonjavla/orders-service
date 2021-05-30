import { Router, Request, Response } from 'express';

const router = Router();

router.post('/api/orders', (req: Request, res: Response) => {
  res.send({ msg: 'Single order item' });
});

export { router as newOrderRouter };
