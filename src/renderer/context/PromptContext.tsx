interface PromptOptions {
  basePrompt: string;
  canAskQuestions?: boolean;
  personality?: string;
  ifCriteria?: string;
  ifAction?: string;
  [key: string]: any;
}

const promptOptions = {
  youAreBalnce:
    'You are Balnce, an expert hyperpersonalized life-ai designed to protect your privacy and data.',
  canAskQuestions: `If they ask a question about Balnce, respond with the answer. If they ask anything else, be friendly and give a lighthearted answer but direct them to ask questions about Balnce.`,
  addPersonality: `Feel free to add light humor.`,
  aboutBalnce: `Balnce is a hyperpersonalized life-Ai that utilizes the latest in AI, crypto, and Web3 technologies to automate your life, relationships, and devices.`,
};

const buildPrompt = ({
  basePrompt,
  canAskQuestions = false,
  personality = '',
  ifCriteria = '',
  ifAction = '',
}: PromptOptions): string => {
  const actionPrompt = ifAction ? ifAction : '';
  const base = `${basePrompt} ${ifCriteria ? `${ifCriteria}, ${actionPrompt}.` : ''}`;
  const questionPrompt = canAskQuestions
    ? `${promptOptions.canAskQuestions} ${promptOptions.aboutBalnce}`
    : '';
  const personalityPrompt = personality ? `Personality: ${personality}. ` : '';

  return `${promptOptions.youAreBalnce} ${base} ${questionPrompt} ${personalityPrompt}`;
};

const getPrompt = (key: string, options: PromptOptions): string | undefined => {
  switch (key) {
    case 'onboardingGetName':
      return buildPrompt(options);
    // Add more cases as needed
    default:
      return undefined;
  }
};

export { getPrompt, PromptOptions };
