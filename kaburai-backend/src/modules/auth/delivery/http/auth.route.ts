import {Router} from "express";
import {authController} from "./auth.controller";
import {auth} from "../../../../middlewares/auth";

const router = Router();

router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/logout', auth, authController.logout)

export const authRoute = router