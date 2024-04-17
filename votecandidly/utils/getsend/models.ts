
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

export const getProjectsbyUser = async (userID: string) => {
    console.log("RET")
    // const videos = await prisma.projects.findMany({ 
    //     where: {
    //         user_id: userID,
    //     },
    //     orderBy: {
    //         project_name: 'asc', // or any other field you want to sort by
    //     },
    // });


    // return videos;
    return null;
};
export const getLogs = async (deploymentId: number) => {
    // console.log("GETING LOGS ")
    // console.log(deploymentId)
    // const videos = await prisma.logs.findMany({
    //     where: {
    //         deployment_id: deploymentId,
    //     },
    //     orderBy: {
    //         log_id: 'asc', // or any other field you want to sort by
    //     },
    // });


    // return videos;
    return null;
};


type UserUpdateInput = Prisma.usersUpdateInput;

export async function updateUser(userId: string, updates: UserUpdateInput): Promise<void> {
    try {
        // Check for the validity of the userId
        if (!userId) {
            throw new Error('Invalid user ID');
        }

        // Optionally, validate individual fields here. For example:
        // if (updates.email && !isValidEmail(updates.email)) {
        //   throw new Error('Invalid email address');
        // }

        // Perform the update
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


// export const searchEvents = async (query: string, user_id?: string, useOnboardingTable = false, builder?: boolean, funlover?: boolean, investor?: boolean, page = 1, pageSize = 10) => {

//     const similarityThreshold = .8
//     const skip = (page - 1) * pageSize;

//     if (useOnboardingTable) {
//         const videos = await prisma.onboarding.findMany({
//             skip: skip,
//             take: pageSize,
//             orderBy: {
//                 location: 'asc',
//             },
//         });
//         return videos;
//     } else {
//         let eventFilter: EventFilter = {};


//         if (user_id) {

//             // Fetch the user's embedding
//             console.log("FECHING")
//             console.log(query)
//             console.log(user_id)

//             const goAhead = true
//             if (goAhead) {
//                 const userEmbedding = await generateEmbedding(query)
//                 const vectorQuery = `[${userEmbedding.join(',')}]`
//                 const nonArchivedEventsWithSimilarity = await prisma.$queryRaw`
//     SELECT
//         e.internalid,
//         e.title,

//         e.directionslink,

//         e.displaytitle,
//         e.displaydescription,
//         e.displaytitle,
//         e.location,
//         e.dropdowns,
//         e.eventlink,
//         e.timestampstart,
//         e.timestampend,
//         e.eventendtime,
//         e.eventstarttime,
//         e.lastupdated,
//         e.platform,


//         1 - (e.embedding <=> ${vectorQuery}::vector) as similarity
//     FROM events e
//     LEFT JOIN user_event_interactions uei ON e.internalid = uei.internalid AND uei.user_id = ${user_id} AND uei.interaction_type = 'archived'
//     WHERE (uei.internalid IS NULL OR uei.user_id IS NULL) 
//       AND 1 - (e.embedding <=> ${vectorQuery}::vector) > .4
//     ORDER BY similarity DESC
//     LIMIT 8;
// `;

//                 console.log(nonArchivedEventsWithSimilarity)


//                 return nonArchivedEventsWithSimilarity;
//             }



//             else {

//                 console.log("NOT EMB Search")
//                 const archivedEvents = await prisma.user_event_interactions.findMany({
//                     where: {
//                         user_id: user_id,
//                         interaction_type: 'archived',
//                     },
//                     select: {
//                         internalid: true,
//                     }
//                 });

//                 let archivedEventIds = archivedEvents.map(ae => ae.internalid);
//                 eventFilter['NOT'] = [{ internalid: { in: archivedEventIds } }];

//                 // Handle case where user does not have an embedding
//                 // ... existing archived events code ...
//             }
//         }


//         // if (user_id) {
//         //     const archivedEvents = await prisma.user_event_interactions.findMany({
//         //         where: {
//         //             user_id: user_id,
//         //             interaction_type: 'archived',
//         //         },
//         //         select: {
//         //             internalid: true,
//         //         }
//         //     });

//         //     let archivedEventIds = archivedEvents.map(ae => ae.internalid);
//         //     eventFilter['NOT'] = [{ internalid: { in: archivedEventIds } }];
//         // }

//         if (investor === true) eventFilter['investor'] = true;
//         if (builder === true) eventFilter['builder'] = true;
//         if (funlover === true) eventFilter['fun'] = true;

//         const events = await prisma.events.findMany({
//             where: eventFilter,
//             skip: skip,
//             take: pageSize,
//             orderBy: {
//                 lastupdated: 'desc',
//             },
//         });



//         // const events = await prisma.events.findMany({
//         //     where: eventFilter,
//         //     skip: skip,
//         //     take: pageSize,
//         //     orderBy: {
//         //         lastupdated: 'desc',
//         //     },
//         // });

//         return events;
//     }
// };




export const getDeploymentsByProjectIds = async (projectIds: number[]) => {
    console.log("GETTING DEPLOYMENTS FOR PROJECT IDs");
    // console.log(projectIds);

    // const deployments = await prisma.deployments.findMany({
    //     where: {
    //         project_id: {
    //             in: projectIds,
    //         },
    //     },
    //     orderBy: {
    //         deployment_id: 'asc', // or any other field you want to sort by
    // //     },
    // // });


    // return deployments;
    return null;
};

