import { Router } from "express";
import { authRoute } from "../modules/auth/delivery/http/auth.route";
import { extractorRoute } from "../modules/extractor/delivery/http/extractor.route";
import { upload } from "../middlewares/upload";

const router = Router();

router.use("/auth", authRoute);
router.use("/extractor", extractorRoute);

export default router;
