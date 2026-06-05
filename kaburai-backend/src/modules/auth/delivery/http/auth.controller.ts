import { Request, Response } from "express";
import {
  loginSchema,
  registerSchema,
  refreshTokenSchema,
} from "../../domain/auth.domain";
import { authUseCase } from "../../usecase/auth.usecase";
import {
  errorResponse,
  successResponse,
  zodErrorResponse,
} from "../../../../utils/response";

const register = async (req: Request, res: Response) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return zodErrorResponse(res, result.error.issues);
  }

  try {
    const data = await authUseCase.register(result.data);
    return successResponse(
      res,
      {
        user: {
          full_name: data.user?.user_metadata.full_name,
        },
        access_token: data.session?.access_token,
        refresh_token: data.session?.refresh_token,
      },
      "User registered successfully",
      201,
    );
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

const login = async (req: Request, res: Response) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return zodErrorResponse(res, result.error.issues);
  }

  try {
    const data = await authUseCase.login(result.data);
    return successResponse(
      res,
      {
        user: {
          full_name: data.user?.user_metadata.full_name,
        },
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      },
      "User logged in successfully",
    );
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    const result = await authUseCase.logout();
    if (!result.success) {
      return errorResponse(res, "Logout failed", 500);
    }
    return successResponse(res, null, "User logged out successfully");
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

const forgotPassword = async (req: Request, res: Response) => {
  try {
    const result = await authUseCase.forgotPassword(req.body);
    return successResponse(
      res,
      result,
      "Password reset email sent successfully",
    );
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

const resetPassword = async (req: Request, res: Response) => {
  try {
    const result = await authUseCase.resetPassword(req.body);
    return successResponse(res, result, "Password updated successfully");
  } catch (error: any) {
    return errorResponse(res, error.message);
  }
};

const refresh = async (req: Request, res: Response) => {
  const result = refreshTokenSchema.safeParse(req.body);

  if (!result.success) {
    return zodErrorResponse(res, result.error.issues);
  }

  try {
    const data = await authUseCase.refresh(result.data);
    return successResponse(
      res,
      {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      },
      "Token refreshed successfully",
    );
  } catch (error: any) {
    return errorResponse(res, "Unauthorized", 401);
  }
};

export const authController = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  refresh,
};
