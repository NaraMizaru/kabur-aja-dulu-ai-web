import {Request, Response} from 'express'
import {loginSchema, registerSchema} from "../../domain/auth.domain";
import {authUseCase} from "../../usecase/auth.usecase";
import {errorResponse, successResponse, zodErrorResponse} from "../../../../utils/response";

const register = async (req: Request, res: Response) => {
    const result = registerSchema.safeParse(req.body)

    if (!result.success) {
        return zodErrorResponse(res, result.error.issues)
    }

    try {
        const data = await authUseCase.register(result.data)
        return successResponse(res, data, "User registered successfully", 201)
    } catch (error: any) {
        return errorResponse(res, error);
    }
}

const login = async (req: Request, res: Response) => {
    const result = loginSchema.safeParse(req.body)

    if (!result.success) {
        return zodErrorResponse(res, result.error.issues)
    }

    try {
        const data = await authUseCase.login(result.data)
        return successResponse(res, data, "User logged in successfully")
    } catch (error: any) {
        return errorResponse(res, error);
    }
}

export const authController = {
    register,
    login,
}