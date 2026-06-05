import { z } from "zod";

export const registerSchema = z.object({
  full_name: z.string(),
  email: z.email(),
  password: z.string().min(8),
});

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export const forgotPasswordSchema = z.object({
  email: z.email(),
});

export const refreshTokenSchema = z.object({
  refresh_token: z.string().min(1),
});

export const resetPasswordSchema = z.object({
  access_token: z.string().min(1),
  refresh_token: z.string().min(1),
  password: z.string().min(8),
});

export type RegisterDTO = z.infer<typeof registerSchema>;
export type LoginDTO = z.infer<typeof loginSchema>;
export type ForgotPasswordDTO = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordDTO = z.infer<typeof resetPasswordSchema>;
export type RefreshTokenDTO = z.infer<typeof refreshTokenSchema>;
