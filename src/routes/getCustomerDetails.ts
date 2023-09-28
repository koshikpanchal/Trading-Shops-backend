import { Router } from "express";
import { customerDetailsController } from "../controllers/getCustomerDetails";

const router = Router();

router.get("/", customerDetailsController);

export default router;
