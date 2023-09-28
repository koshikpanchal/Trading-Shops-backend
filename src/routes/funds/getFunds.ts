import { Router } from "express";
import { getFundsController } from "../../controllers/funds/getFunds";

const router = Router();

router.get("/", getFundsController);

export default router;
