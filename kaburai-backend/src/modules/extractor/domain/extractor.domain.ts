import z from "zod";

export const uploadCVSchema = z.object({
  cv_file: z.string()
});

export type UploadCVDTO = z.infer<typeof uploadCVSchema>;