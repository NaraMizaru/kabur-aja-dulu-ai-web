import {Router} from "express";

const router = Router();

router.use('/api', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Kabur Aja Dulu AI API',
    })
})

export default router;