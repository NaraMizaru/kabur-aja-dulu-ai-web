import {Request, Response} from "express";
import {extractorUseCase} from "../../usecase/extractor.usecase";
import {errorResponse, successResponse} from "../../../../utils/response";

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

export const extractorController = {
    extract,
};
