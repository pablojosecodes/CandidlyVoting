import Anthropic from '@anthropic-ai/sdk';
import { AnthropicStream, StreamingTextResponse } from 'ai';
import { experimental_buildAnthropicPrompt } from 'ai/prompts';

// Create an Anthropic API client (that's edge friendly)
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});


export const runtime = 'edge';

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  // Ask Claude for a streaming chat completion given the prompt
  const response = await anthropic.completions.create({
    prompt: `CONTEXT: Senator Scott Wiener is a member of the California State Senate, known for his work on housing, mental health, and LGBTQ+ rights. Yvette Corkrean is a Republican candidate running for election to the California State Senate to represent District 11, with the general election scheduled for November 5, 2024. She advanced from the primary on March 5, 2024. Born in Vallejo, California, she earned degrees from Solano Community College and California State University, Fullerton. As a registered nurse and mother, her campaign focuses on public safety, economic revitalization, education, and protecting freedoms. Corkrean champions parental rights, advocating for transparency in school curricula and increased parental involvement. She is also involved in various community and political activities, including rallies like "Save Our Streets" and health freedom events.

    INSTRUCTION: Respond to the human's prompt asking about the upcoming district 11 Caliornia senate race  (in which SCott and Yvette are competing) or the candidates. If they ask about ANYTHING else, return "That is out of scope.

    Human: ${prompt}
    
    Assistant:`,
    model: 'claude-3-opus-20240229',
    stream: true,
    max_tokens_to_sample: 300,
  });

  // Convert the response into a friendly text-stream
  const stream = AnthropicStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}