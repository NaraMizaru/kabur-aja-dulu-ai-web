import {z} from "zod";

export const registerSchema = z.object({
    email: z.email(),
    password: z.string().min(8)
})

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8)
})

export type RegisterDTO = z.infer<typeof registerSchema>
export type LoginDTO = z.infer<typeof loginSchema>