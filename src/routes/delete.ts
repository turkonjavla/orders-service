import { Router, Request, Response } from 'express';

const router = Router();

router.delete('/api/orders/:orderId', (req: Request, res: Response) => {
  res.send({ msg: 'Delete single order' });
});

export { router as deleteOrderRouter };
