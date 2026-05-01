import {Request, Response} from 'express'
import {loginSchema, registerSchema} from "../../domain/auth.domain";
import {authUseCase} from "../../usecase/auth.usecase";

const register = async (req: Request, res: Response) => {
    const result = registerSchema.safeParse(req.body)

    if (!result.success) {
        return res.status(400).send({
            success: false,
            message: result.error.issues
        })
    }

    try {
        const data = await authUseCase.register(result.data)
        return res.status(201).send({
            success: true,
            data
        })
    } catch (error: any) {
        return res.status(401).send({
            success: false,
            message: error.message
        })
    }
}

const login = async (req: Request, res: Response) => {
    const result = loginSchema.safeParse(req.body)

    if (!result.success) {
        return res.status(400).send({
            success: false,
            message: result.error.issues
        })
    }

    try {
        const data = await authUseCase.login(result.data)
        return res.status(200).send({
            success: true,
            data
        })
    } catch (error: any) {
        return res.status(401).send({
            success: false,
            message: error.message
        })
    }
}

export const authController = {
    register,
    login,
}