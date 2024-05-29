/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import OpenAI from 'openai';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

type LLMResponse = Promise<string>;

interface LLMS {
  openAIcompletion: (
    prompt: string,
  ) => Promise<OpenAI.Chat.Completions.ChatCompletion.Choice>;
  googleGemini: (prompt: string) => Promise<string>;
  llamaCpp: (prompt: string) => LLMResponse;
  transformers: (prompt: string) => LLMResponse;
  wasmPackage: (prompt: string) => LLMResponse;
  randomResponse: (prompt: string) => LLMResponse;
  onboardChat: (prompt: string) => LLMResponse;
}

const cloudLLMs: Partial<LLMS> = {
  openAIcompletion: async (prompt: string) => {
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const openai = new OpenAI({ apiKey: openaiApiKey });

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    return completion.choices[0];
  },
  googleGemini: async (prompt: string) => {
    const geminiApiKey = process.env.GEMINI_API_KEY;
    const googleAI = new GoogleGenerativeAI(geminiApiKey);
    const geminiConfig = {
      temperature: 0.9,
      topP: 1,
      topK: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    try {
      const geminiModel = googleAI.getGenerativeModel({
        model: 'gemini-pro',
        geminiConfig,
        safetySettings,
      });
      const result = await geminiModel.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Google Gemini response error', error);
      throw new Error('Failed to get response from Google Gemini');
    }
  },
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
};

const mockLLMs: Partial<LLMS> = {
  randomResponse: async (prompt: string) => {
    const responses = ['Response A', 'Response B', 'Response C'];
    return responses[Math.floor(Math.random() * responses.length)];
  },
  onboardChat: async (prompt: string) => {
    return `Onboard chat response for: ${prompt}`;
  },
};

export const llmRouter = {
  cloud: {
    openAIcompletion: cloudLLMs.openAIcompletion!,
    googleGemini: cloudLLMs.googleGemini!,
  },
  local: {
    llamaCpp: localLLMs.llamaCpp!,
    transformers: localLLMs.transformers!,
    wasmPackage: localLLMs.wasmPackage!,
  },
  mock: {
    randomResponse: mockLLMs.randomResponse!,
    onboardChat: mockLLMs.onboardChat!,
  },
};

// Usage example
// (async () => {
//   const response = await llmRouter.cloud.openAIcompletion(
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
