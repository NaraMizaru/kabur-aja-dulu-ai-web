import {pdfService} from "../services/pdf.service";
import {NextStepAiGateway} from "../gateway/NextStep-ai.gateway";

const extract = async (file: Express.Multer.File, language?: string) => {
    if (!file) {
        throw new Error("No file uploaded");
    }

    const text = await pdfService.extractText(file.path);
    const skillExtracted = await NextStepAiGateway.extractSkills(text);
    const rolePredict = await NextStepAiGateway.predict(skillExtracted);
    const gapAnalysis = await NextStepAiGateway.gapAnalysis(rolePredict, skillExtracted);
    const roadmap = await NextStepAiGateway.roadmap(text, skillExtracted, rolePredict, language);
    const feedback = await NextStepAiGateway.cvFeedback(file, language);

    return {
        filename: file.filename,
        role: rolePredict,
        skill_extracted: skillExtracted,
        gap_analysis: gapAnalysis,
        roadmap: roadmap,
        cv_feedback: feedback,
    };
};



export const extractorUseCase = {
    extract,
};
