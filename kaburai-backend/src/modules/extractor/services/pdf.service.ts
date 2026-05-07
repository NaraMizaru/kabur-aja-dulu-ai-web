import fs from "fs";
import { PDFParse } from "pdf-parse";

const extractText = async (filePath: string) => {
  const buffer = fs.readFileSync(filePath);
  const parser = new PDFParse({data: buffer});

  return await parser.getText();
};

export const pdfService = {
  extractText,
};
