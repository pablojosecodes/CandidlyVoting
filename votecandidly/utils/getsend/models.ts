
// import { OpenAIApi, Configuration } from "openai";

import { openai } from '@/utils/openai'
// import { OpenAIApi, ChatCompletionCreateRequest, CreateChatCompletionResponse } from 'openai';


import prisma from "@/prisma/prismaClient";
import pgvector from 'pgvector';
import { ChatCompletionMessageParam } from 'openai/resources';
import { time } from 'console';
import { context, Prisma } from '@prisma/client';


export const createIt = async (prompt: string) => {
    const embedding = await generateEmbedding(prompt)

    const vectorQuery = `[${embedding.join(',')}]`
    console.log("CREATING")
    const values: context[] = await prisma.$queryRaw`
  SELECT
      c.id,
      c.text,
      c.date,
      c.author,
      c.timestamp,
      c.link,
      1 - (c.embedding <=> ${vectorQuery}::vector) as similarity  
  FROM context c
  WHERE  1 - (c.embedding <=> ${vectorQuery}::vector) > .1
  ORDER BY similarity DESC
  LIMIT 5;
`;
    console.log(values)
    return values


}

type UserUpdateInput = Prisma.usersUpdateInput;

export async function updateUser(userId: string, updates: UserUpdateInput): Promise<void> {
    try {
        // Check for the validity of the userId
        if (!userId) {
            throw new Error('Invalid user ID');
        }

        const updatedUser = await prisma.users.update({
            where: { user_id: userId },
            data: updates,
        });

        console.log('User updated successfully:', updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
    }
}








export async function generateEmbedding(raw: string) {
    // OpenAI recommends replacing newlines with spaces for best results
    const input = raw.replace(/\n/g, ' ')
    const embeddingData = await openai.embeddings.create({
        model: 'text-embedding-3-large',
        input,
    })
    const [{ embedding }] = (embeddingData as any).data
    return embedding
}



