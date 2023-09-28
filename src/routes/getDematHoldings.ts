import { Router } from "express";
import { getDematHoldingsController } from "../controllers/getDematHoldings";

const router = Router();

router.get("/", getDematHoldingsController);

export default router;
