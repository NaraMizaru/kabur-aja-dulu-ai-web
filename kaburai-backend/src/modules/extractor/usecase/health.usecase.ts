import { NextStepAiGateway } from "../gateway/NextStep-ai.gateway"

const ai = async () => {
  const health = await NextStepAiGateway.health();

  return health
}

export const healthUseCase = {
  ai
}