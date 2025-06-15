import { gemini20Flash, googleAI } from '@genkit-ai/googleai';
import { genkit, z } from 'genkit';

const ai = genkit({
  plugins: [googleAI()],
  model: gemini20Flash,
});

const flow = ai.defineFlow(
  {
    name: 'exampleFlow',
    inputSchema: z.object({
      prompt: z.string().describe('The question to answer'),
    }),
    outputSchema: z.string().describe('The response from the AI assistant'),
  },
  async ({ prompt }) => {
    const { text } = await ai.generate({
      prompt: `
       This is an example Genkit Flo

       ${prompt}
      `,
      tools: [],
    });

    return text;
  },
);
