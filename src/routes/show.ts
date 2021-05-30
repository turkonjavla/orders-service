import { Router, Request, Response } from 'express';

const router = Router();

router.get('/api/orders/:orderId', (req: Request, res: Response) => {
  res.send({ msg: 'Single order item' });
});

export { router as showOrderRouter };
