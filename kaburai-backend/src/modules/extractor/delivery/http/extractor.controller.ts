import {Request, Response} from "express";
import {extractorUseCase} from "../../usecase/extractor.usecase";
import {errorResponse, successResponse} from "../../../../utils/response";
import { healthUseCase } from "../../usecase/health.usecase";

const extract = async (req: Request, res: Response) => {
    try {
        const {language} = req.body

        const data = await extractorUseCase.extract(
            req.file as Express.Multer.File,
            language
        );

        return successResponse(res, data, "Text extracted successfully");
    } catch (error: any) {
        return errorResponse(res, error.message);
    }
};

const health = async (req: Request, res: Response) => {
  try {
    const data = await healthUseCase.ai()

    return successResponse(res, data, "AI Healthy")
  } catch (error: any) {
    return errorResponse(res, error.message)
  }
}

export const extractorController = {
  extract,
  health
};
