import { Router } from "express";
import { extractorController } from "./extractor.controller";
import { upload } from "../../../../middlewares/upload";

const router = Router();

router.post("/extract", upload.single("file"), extractorController.extract);

export const extractorRoute = router;
