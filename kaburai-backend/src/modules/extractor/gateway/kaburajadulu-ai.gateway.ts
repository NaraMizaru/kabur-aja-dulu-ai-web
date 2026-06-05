import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const client = axios.create({
    baseURL: process.env.KABURAJADULU_AI_API_URL,
    timeout: 120000,
});

const extractSkills = async (cv_text: string) => {
    const result = await client.post(`/skills/extract`, {
        cv_text,
    })

    if (result.status !== 200) {
        throw new Error("Failed to extract skills");
    }

    return result.data.skills_extracted;
}

const gapAnalysis = async (role: string, skills: string[]) => {
    const result = await client.post('/skills/gap-analysis', {
        role,
        skills,
    })

    if (result.status !== 200) {
        throw new Error("Failed to gap analysis");
    }

    return {
        match_score: result.data.match_score,
        skills_dimiliki: result.data.skills_dimiliki,
        top_skill_tidak_dimiliki: result.data.top_skill_tidak_dimiliki,
    };
}

const predict = async (skills: string[]) => {
    const result = await client.post('/roles/predict', {
        skills,
    })

    if (result.status !== 200) {
        throw new Error("Failed to predict");
    }

    return result.data.role;
}

const roadmap = async (cv_text: string, skills: string[], role: string, language?: string) => {
    try {
        const result = await client.post('/roadmap/generate', {
            cv_text,
            skills_extracted: skills,
            role,
            language,
        })

        return result.data.roadmap;
    } catch (error) {
        console.error(error);

        throw new Error("Failed to generate roadmap");
    }
}

const cvFeedback = async (file: Express.Multer.File, language = "English") => {
    const formData = new FormData();

    formData.append(
        "file",
        fs.createReadStream(file.path),
        {
            filename: file.originalname,
            contentType: file.mimetype,
        }
    );

    const result = await client.post(
        "/cv/feedback",
        formData,
        {
            params: {
                language,
            },
            headers: {
                ...formData.getHeaders(),
            },
        }
    );

    return {
        ats_score: result.data.ats_score,
        readability_score: result.data.readability_score,
        ats_feedback: result.data.ats_feedback,
        layout_feedback: result.data.layout_feedback,
        keywords_feedback: result.data.keywords_feedback,
        improvements: result.data.improvements,
    };
};

const health = async () => {
  const aiApiUrl = process.env.KABURAJADULU_AI_API_URL;
  const baseUrl = new URL(aiApiUrl as string).origin;
  
  const result = await axios.get(`${baseUrl}/health`);
  if (result.status !== 200) {
    throw new Error('Api not healthy')
  }

  return result.data
}

export const kaburajaduluAiGateway = {
    extractSkills,
    gapAnalysis,
    predict,
    roadmap,
    cvFeedback,
    health
}