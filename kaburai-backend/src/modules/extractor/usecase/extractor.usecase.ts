import { Multer } from "multer";
import { pdfService } from "../services/pdf.service";

const extract = async (file: Express.Multer.File) => {
  if (!file) {
    throw new Error("No file uploaded");
  }

  const text = await pdfService.extractText(file.path);

  return {
    filename: file.filename,
    extracted_text: text,
  };
};

export const extractorUseCase = {
  extract,
};
