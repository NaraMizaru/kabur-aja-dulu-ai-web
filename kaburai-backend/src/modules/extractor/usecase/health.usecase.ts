import { NextStepAiGateway } from "../gateway/kaburajadulu-ai.gateway"

const ai = async () => {
  const health = await NextStepAiGateway.health();

  return health
}

export const healthUseCase = {
  ai
}