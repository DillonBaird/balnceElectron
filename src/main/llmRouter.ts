/* eslint-disable import/prefer-default-export */
// llmRouter.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '',
});

type LLMResponse = Promise<string>;

interface LLMS {
  openAIcompletion: (
    prompt: string,
  ) => Promise<OpenAI.Chat.Completions.ChatCompletion.Choice>;
  googleGemini: (prompt: string) => LLMResponse;
  llamaCpp: (prompt: string) => LLMResponse;
  transformers: (prompt: string) => LLMResponse;
  wasmPackage: (prompt: string) => LLMResponse;
  randomResponse: (prompt: string) => LLMResponse;
  onboardChat: (prompt: string) => LLMResponse;
}

const cloudLLMs: Partial<LLMS> = {
  openAIcompletion: async (prompt: string) => {
    // Implementation for calling OpenAI API
    console.log(prompt);
    const completion = await openai.chat.completions.create({
      // messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
      messages: [{ role: 'system', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    console.log(completion.choices[0]);
    return completion.choices[0];
  },
  googleGemini: async (prompt: string) => {
    // Implementation for calling Google Gemini API
    return `Google Gemini response for: ${prompt}`;
  },
  // Add more cloud-based LLMs as needed
};

const localLLMs: Partial<LLMS> = {
  llamaCpp: async (prompt: string) => {
    // Implementation for calling local llama-cpp LLM
    return `Llama-cpp response for: ${prompt}`;
  },
  transformers: async (prompt: string) => {
    // Implementation for calling local transformers LLM
    return `Transformers response for: ${prompt}`;
  },
  wasmPackage: async (prompt: string) => {
    // Implementation for calling local WASM package LLM
    return `WASM package response for: ${prompt}`;
  },
  // Add more local LLMs as needed
};

const mockLLMs: Partial<LLMS> = {
  randomResponse: async (prompt: string) => {
    // Mock implementation returning a random response
    const responses = ['Response A', 'Response B', 'Response C'];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  onboardChat: async (prompt: string) => {
    // Mock implementation for onboarding chat
    return `Onboard chat response for: ${prompt}`;
  },
  // Add more mock LLMs as needed
};

export const llmRouter = {
  cloud: {
    openAIcompletion: cloudLLMs.openAIcompletion!,
    googleGemini: cloudLLMs.googleGemini!,
    // Add more cloud-based LLM methods as needed
  },
  local: {
    llamaCpp: localLLMs.llamaCpp!,
    transformers: localLLMs.transformers!,
    wasmPackage: localLLMs.wasmPackage!,
    // Add more local LLM methods as needed
  },
  mock: {
    randomResponse: mockLLMs.randomResponse!,
    onboardChat: mockLLMs.onboardChat!,
    // Add more mock LLM methods as needed
  },
};

// Usage example
// (async () => {
//   const response = await llmRouter.cloud.openAI(
//     'What is the weather like today?',
//   );
//   console.log(response);

//   const localResponse = await llmRouter.local.llamaCpp(
//     'Translate this text to French.',
//   );
//   console.log(localResponse);

//   const mockResponse = await llmRouter.mock.randomResponse('Tell me a joke.');
//   console.log(mockResponse);
// })();
