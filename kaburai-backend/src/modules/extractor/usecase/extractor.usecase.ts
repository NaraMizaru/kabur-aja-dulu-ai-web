import {pdfService} from "../services/pdf.service";
import {kaburajaduluAiGateway} from "../gateway/kaburajadulu-ai.gateway";

const extract = async (file: Express.Multer.File, language?: string) => {
    if (!file) {
        throw new Error("No file uploaded");
    }

    const text = await pdfService.extractText(file.path);
    const skillExtracted = await kaburajaduluAiGateway.extractSkills(text);
    const rolePredict = await kaburajaduluAiGateway.predict(skillExtracted);
    const gapAnalysis = await kaburajaduluAiGateway.gapAnalysis(rolePredict, skillExtracted);
    const roadmap = await kaburajaduluAiGateway.roadmap(text, skillExtracted, rolePredict, language);
    const feedback = await kaburajaduluAiGateway.cvFeedback(file, language);

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
