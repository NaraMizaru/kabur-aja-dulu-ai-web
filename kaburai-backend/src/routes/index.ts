import {Router} from "express";
import {authRoute} from "../modules/auth/delivery/http/auth.route";

const router = Router();

router.use('/auth', authRoute)

export default router;