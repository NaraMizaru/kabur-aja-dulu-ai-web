import { kaburajaduluAiGateway } from "../gateway/kaburajadulu-ai.gateway"

const ai = async () => {
  const health = await kaburajaduluAiGateway.health();

  return health
}

export const healthUseCase = {
  ai
}