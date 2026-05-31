import {Router} from "express";
import {extractorController} from "./extractor.controller";
import {upload} from "../../../../middlewares/upload";
import {auth} from "../../../../middlewares/auth";

const router = Router();

router.post("/extract", auth, upload.single("file"), extractorController.extract);

export const extractorRoute = router;
