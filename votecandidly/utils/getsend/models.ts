
// import { OpenAIApi, Configuration } from "openai";

import { openai } from '@/utils/openai'
// import { OpenAIApi, ChatCompletionCreateRequest, CreateChatCompletionResponse } from 'openai';


import prisma from "@/prisma/prismaClient";
import pgvector from 'pgvector';
import { ChatCompletionMessageParam } from 'openai/resources';
import { time } from 'console';
import { events, Prisma } from '@prisma/client';



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








export const archiveEvent = async (user_id: string, event_id: string, action: string): Promise<void> => {
    try {
        // Create a new record in 'user_event_interactions' with interaction_type 'archived'
        const archivedEvent = await prisma.user_event_interactions.create({
            data: {
                user_id: user_id,
                internalid: event_id,
                interaction_type: action,
                // assuming 'timestamp' will be set to CURRENT_TIMESTAMP by default, as defined in your schema
            },
        });

        console.log('Event archived:', archivedEvent);
    } catch (error) {
        console.error('Error archiving event:', error);
        // Handle or throw error appropriately
        throw error;
    }
};
type EventFilter = {
    NOT?: { internalid: { in: string[] } }[];
    internalid?: { in: string[] };
    investor?: boolean;
    builder?: boolean;
    fun?: boolean;
};


// interface EventStructure {
//     start?: string;
//     end?: string;
//     unknown?: boolean;
//     search?: string;
// }

export async function eventToStructure(event: string): Promise<any> {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const currentDate = mm + '/' + dd + '/' + yyyy;
    console.log(currentDate)
    console.log("YYYYYYY")

    // Create the system and user messages for date and time extraction
    let systemMessage: ChatCompletionMessageParam = {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
    };

    let userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: `Today's date is ${currentDate}. What are the start and end timestamps for an event described as '${event}' in ISO 8601 format? Keys should be 'start' and 'end' unless you can't decipher the times. In which case return with key 'unknown' and value 'true'`,
    };


    console.log(systemMessage)
    console.log(userMessage)
    // Call the API for date and time extraction
    let response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [systemMessage, userMessage],
        response_format: { type: "json_object" },

    });

    console.log(response)
    let timestamps = JSON.parse(response.choices[0].message.content as any);
    console.log(timestamps)

    let values: { [Name: string]: string[] | boolean | string } = {}
    console.log(typeof (timestamps))

    if ('unknown' in timestamps) {
        values['timing'] = false
    }
    else {
        values['timing'] = [timestamps['start'], timestamps['end']]
    }
    // Create the system and user messages for search term extraction
    systemMessage = {
        role: "system",
        content: "You are a helpful assistant. When given a description of an event, your job is to extract the main topic of the event as a search term, disregarding any date or time-related details.",
    };
    userMessage = {
        role: "user",
        content: `Given the following query: '${event}', what kind of event is the user looking for disregarding its date? Respond with JSON object with key 'search'.`,
    };


    // Call the API for search term extraction
    response = await openai.chat.completions.create({
        model: "gpt-4-turbo-preview",
        messages: [systemMessage, userMessage],
        response_format: { type: "json_object" },
    });



    let searchTerm = JSON.parse(response.choices[0].message.content as any);
    values['search'] = searchTerm['search']

    // let searchTerm: EventStructure = response.data.choices[0].message.content as EventStructure;

    // Combine both responses
    return values;
}




interface UserEmbedding {
    embedding: number[];
}




async function generateEmbedding(raw: string) {
    // OpenAI recommends replacing newlines with spaces for best results
    const input = raw.replace(/\n/g, ' ')
    const embeddingData = await openai.embeddings.create({
        model: 'text-embedding-3-large',
        input,
    })
    const [{ embedding }] = (embeddingData as any).data
    return embedding
}


export const searchEvents = async (query: string, user_id?: string, useOnboardingTable = false, builder?: boolean, funlover?: boolean, investor?: boolean, page = 1, pageSize = 10) => {

    const similarityThreshold = .8
    const skip = (page - 1) * pageSize;

    if (useOnboardingTable) {
        const videos = await prisma.onboarding.findMany({
            skip: skip,
            take: pageSize,
            orderBy: {
                location: 'asc',
            },
        });
        return videos;
    } else {
        let eventFilter: EventFilter = {};


        if (user_id) {

            // Fetch the user's embedding
            console.log("FECHING")
            console.log(query)
            console.log(user_id)

            const goAhead = true
            if (goAhead) {
                const userEmbedding = await generateEmbedding(query)
                const vectorQuery = `[${userEmbedding.join(',')}]`
                const nonArchivedEventsWithSimilarity = await prisma.$queryRaw`
    SELECT
        e.internalid,
        e.title,

        e.directionslink,

        e.displaytitle,
        e.displaydescription,
        e.displaytitle,
        e.location,
        e.dropdowns,
        e.eventlink,
        e.timestampstart,
        e.timestampend,
        e.eventendtime,
        e.eventstarttime,
        e.lastupdated,
        e.platform,


        1 - (e.embedding <=> ${vectorQuery}::vector) as similarity
    FROM events e
    LEFT JOIN user_event_interactions uei ON e.internalid = uei.internalid AND uei.user_id = ${user_id} AND uei.interaction_type = 'archived'
    WHERE (uei.internalid IS NULL OR uei.user_id IS NULL) 
      AND 1 - (e.embedding <=> ${vectorQuery}::vector) > .4
    ORDER BY similarity DESC
    LIMIT 8;
`;

                console.log(nonArchivedEventsWithSimilarity)


                return nonArchivedEventsWithSimilarity;
            }



            else {

                console.log("NOT EMB Search")
                const archivedEvents = await prisma.user_event_interactions.findMany({
                    where: {
                        user_id: user_id,
                        interaction_type: 'archived',
                    },
                    select: {
                        internalid: true,
                    }
                });

                let archivedEventIds = archivedEvents.map(ae => ae.internalid);
                eventFilter['NOT'] = [{ internalid: { in: archivedEventIds } }];

                // Handle case where user does not have an embedding
                // ... existing archived events code ...
            }
        }


        // if (user_id) {
        //     const archivedEvents = await prisma.user_event_interactions.findMany({
        //         where: {
        //             user_id: user_id,
        //             interaction_type: 'archived',
        //         },
        //         select: {
        //             internalid: true,
        //         }
        //     });

        //     let archivedEventIds = archivedEvents.map(ae => ae.internalid);
        //     eventFilter['NOT'] = [{ internalid: { in: archivedEventIds } }];
        // }

        if (investor === true) eventFilter['investor'] = true;
        if (builder === true) eventFilter['builder'] = true;
        if (funlover === true) eventFilter['fun'] = true;

        const events = await prisma.events.findMany({
            where: eventFilter,
            skip: skip,
            take: pageSize,
            orderBy: {
                lastupdated: 'desc',
            },
        });



        // const events = await prisma.events.findMany({
        //     where: eventFilter,
        //     skip: skip,
        //     take: pageSize,
        //     orderBy: {
        //         lastupdated: 'desc',
        //     },
        // });

        return events;
    }
};




export const magicSearchEvents = async (query: string, initial: string, end: string, user_id?: string, useOnboardingTable = false, builder?: boolean, funlover?: boolean, investor?: boolean, page = 1, pageSize = 10) => {
    console.log('magic search event')
    const similarityThreshold = .8
    const skip = (page - 1) * pageSize;

    if (useOnboardingTable) {
        const videos = await prisma.onboarding.findMany({
            skip: skip,
            take: pageSize,
            orderBy: {
                location: 'asc',
            },
        });
        return videos;
    } else {
        let eventFilter: EventFilter = {};


        if (user_id) {

            // Fetch the user's embedding
            console.log("FECHING")
            console.log(query)
            console.log(initial)
            console.log(user_id)

            const goAhead = true
            if (goAhead) {
                const userEmbedding = await generateEmbedding(query)
                const vectorQuery = `[${userEmbedding.join(',')}]`

                const nonArchivedEventsWithSimilarity = await prisma.$queryRaw`
    SELECT
        e.internalid,
        e.title,

        e.directionslink,

        e.displaytitle,
        e.displaydescription,
        e.displaytitle,
        e.location,
        e.dropdowns,
        e.eventlink,
        e.timestampstart,
        e.timestampend,
        e.eventendtime,
        e.eventstarttime,
        e.lastupdated,
        e.platform,


        1 - (e.embedding <=> ${vectorQuery}::vector) as similarity
    FROM events e
    LEFT JOIN user_event_interactions uei ON e.internalid = uei.internalid AND uei.user_id = ${user_id} AND uei.interaction_type = 'archived'
    WHERE (uei.internalid IS NULL OR uei.user_id IS NULL) 
      AND 1 - (e.embedding <=> ${vectorQuery}::vector) > .4
      AND (${initial} IS NULL OR e.timestampstart >= ${initial}::timestamp)
      AND (${end} IS NULL OR e.timestampend <= ${end}::timestamp)
    ORDER BY similarity DESC
    LIMIT 8;
`;

                console.log(nonArchivedEventsWithSimilarity)


                return nonArchivedEventsWithSimilarity;
            }



            else {

                console.log("NOT EMB Search")
                const archivedEvents = await prisma.user_event_interactions.findMany({
                    where: {
                        user_id: user_id,
                        interaction_type: 'archived',
                    },
                    select: {
                        internalid: true,
                    }
                });

                let archivedEventIds = archivedEvents.map(ae => ae.internalid);
                eventFilter['NOT'] = [{ internalid: { in: archivedEventIds } }];

                // Handle case where user does not have an embedding
                // ... existing archived events code ...
            }
        }


        // if (user_id) {
        //     const archivedEvents = await prisma.user_event_interactions.findMany({
        //         where: {
        //             user_id: user_id,
        //             interaction_type: 'archived',
        //         },
        //         select: {
        //             internalid: true,
        //         }
        //     });

        //     let archivedEventIds = archivedEvents.map(ae => ae.internalid);
        //     eventFilter['NOT'] = [{ internalid: { in: archivedEventIds } }];
        // }

        if (investor === true) eventFilter['investor'] = true;
        if (builder === true) eventFilter['builder'] = true;
        if (funlover === true) eventFilter['fun'] = true;

        const events = await prisma.events.findMany({
            where: eventFilter,
            skip: skip,
            take: pageSize,
            orderBy: {
                lastupdated: 'desc',
            },
        });


        return events;
    }
};


export type EventWithInteractionType = events & { interaction_type: "PENDING" | "GOING" | "DENIED" | undefined };

export const getAgenda = async (user_id: string, page = 1, pageSize = 10): Promise<EventWithInteractionType[]> => {
    const skip = (page - 1) * pageSize;

    let eventFilter: EventFilter = {};

    // Fetch non-archived event interactions for the user
    const nonArchivedEvents = await prisma.user_event_interactions.findMany({
        where: {
            user_id: user_id,
            interaction_type: {
                not: 'archived',
            },
        },
        select: {
            internalid: true,
            interaction_type: true,
        }
    });

    // Explicitly declare the type of interactionTypeMap
    const interactionTypeMap: { [key: string]: string } = {};
    nonArchivedEvents.forEach(eventInteraction => {
        interactionTypeMap[eventInteraction.internalid] = eventInteraction.interaction_type;
    });

    // Fetch events based on the non-archived event IDs
    let events = await prisma.events.findMany({
        where: {
            ...eventFilter,
            internalid: { in: Object.keys(interactionTypeMap) },
        },
        skip,
        take: pageSize,
        orderBy: {
            lastupdated: 'desc',
        },
    });

    // Add interaction_type to each event
    const eventsWithInteractionType: EventWithInteractionType[] = events.map(event => ({
        ...event,
        interaction_type: (interactionTypeMap[event.internalid] as "PENDING" | "GOING" | "DENIED" | undefined) || undefined,
    }));

    return eventsWithInteractionType;
};


// export const getAgenda = async (user_id: string, page = 1, pageSize = 10) => {

//     const skip = (page - 1) * pageSize;

//     let eventFilter: EventFilter = {};

//     if (user_id) {
//         const nonArchivedEvents = await prisma.user_event_interactions.findMany({
//             where: {
//                 user_id: user_id,
//                 interaction_type: {
//                     not: 'archived',
//                 },
//             },
//             select: {
//                 internalid: true,
//             }
//         });

//         let nonArchivedEventIds = nonArchivedEvents.map(event => event.internalid);
//         eventFilter['internalid'] = { in: nonArchivedEventIds };
//     }

//     const events = await prisma.events.findMany({
//         where: eventFilter,
//         skip: skip,
//         take: pageSize,
//         orderBy: {
//             lastupdated: 'desc',
//         },
//     });

//     console.log(events)


//     return events;

// };



export const getEvents = async (user_id?: string, useOnboardingTable = false, builder?: boolean, funlover?: boolean, investor?: boolean, page = 1, pageSize = 10, embedding?: number[]) => {

    const similarityThreshold = .8
    const skip = (page - 1) * pageSize;

    if (useOnboardingTable) {
        const videos = await prisma.onboarding.findMany({
            skip: skip,
            take: pageSize,
            orderBy: {
                location: 'asc',
            },
        });
        return videos;
    } else {
        let eventFilter: EventFilter = {};

        // let eventFilter = {};

        if (user_id) {
            console.log("FETCHING USER INTERACTIONS");
            const userInteractions = await prisma.user_event_interactions.findMany({
                where: { user_id },
                select: { internalid: true },
            });

            let interactedEventIds = userInteractions.map(interaction => interaction.internalid);
            if (interactedEventIds.length) {
                eventFilter['NOT'] = [{ internalid: { in: interactedEventIds } }];
            }
        }

        if (investor === true) eventFilter['investor'] = true;
        if (builder === true) eventFilter['builder'] = true;
        if (funlover === true) eventFilter['fun'] = true;

        if (embedding) {

            const vectorQuery = `[${embedding.join(',')}]`

            const events = await prisma.$queryRaw`
            SELECT
                e.internalid,
                e.title,
                e.directionslink,
                e.displaytitle,
                e.displaydescription,
                e.location,
                e.dropdowns,
                e.eventlink,
                e.timestampstart,
                e.timestampend,
                e.eventendtime,
                e.eventstarttime,
                e.lastupdated,
                e.platform,
                1 - (e.embedding <=> ${vectorQuery}::vector) as similarity
            FROM events e
            LEFT JOIN user_event_interactions uei ON e.internalid = uei.internalid AND uei.user_id = ${user_id} AND uei.interaction_type = 'archived'
            WHERE (uei.internalid IS NULL OR uei.user_id IS NULL)
              AND ${Prisma.sql`1 - (e.embedding <=> ${vectorQuery}::vector) > .4`}
              ${eventFilter['NOT'] ? `AND e.internalid NOT IN (${Prisma.join(eventFilter['NOT'][0].internalid.in)})` : ''}
              ${eventFilter['investor'] ? 'AND e.investor = true' : ''}
              ${eventFilter['builder'] ? 'AND e.builder = true' : ''}
              ${eventFilter['fun'] ? 'AND e.fun = true' : ''}    
            ORDER BY similarity DESC
            LIMIT ${pageSize}
            OFFSET ${skip};
        `;



            return events;
        }


        else {

            const events = await prisma.events.findMany({
                where: eventFilter,
                skip: skip,
                take: pageSize,
                orderBy: {
                    lastupdated: 'desc',
                },
            });
            return events;

        }





    }
};


// export const getEvents = async (user_id?: string, useOnboardingTable = false, builder?: boolean, funlover?: boolean, investor?: boolean) => {
//     console.log("GETTING LOGS");

//     if (useOnboardingTable) {
//         console.log("GETTING LOGS FROM ONBOARDING");
//         const videos = await prisma.onboarding.findMany({
//             take: 10,
//             orderBy: {
//                 location: 'asc',
//             },
//         });
//         return videos;
//     } else {
//         let eventFilter: EventFilter = {};

//         if(user_id) { 
//             const archivedEvents = await prisma.user_event_interactions.findMany({
//                 where: {
//                     user_id: user_id,
//                     interaction_type: 'archived',
//                 },
//                 select: {
//                     internalid: true,
//                 }
//             });

//             let archivedEventIds = archivedEvents.map(ae => ae.internalid);
//             eventFilter['NOT'] = [{ internalid: { in: archivedEventIds } }];
//         }

//         if (investor === true) eventFilter['investor'] = true;
//         if (builder === true) eventFilter['builder'] = true;
//         if (funlover === true) eventFilter['fun'] = true;

//         const events = await prisma.events.findMany({
//             where: eventFilter,
//             take: 10,
//             orderBy: {
//                 lastupdated: 'asc',
//             },
//         });

//         return events;
//     }
// };


//   export const getEvents = async (user_id?: string, useOnboardingTable = false, builder?: boolean, funlover?: boolean, investor?: boolean) => {
//     console.log("GETTING LOGS");

//     if (useOnboardingTable) {
//         console.log("GETTING LOGS FROM ONBOARDING");
//         const videos = await prisma.onboarding.findMany({
//             take: 10,
//             orderBy: {
//                 location: 'asc', // Or any other preference
//             },
//         });
//         return videos;
//     } else {
//         if(user_id) { // Only apply filtering if user_id is provided
//             // Query to get list of archived event IDs for the user
//             const archivedEvents = await prisma.user_event_interactions.findMany({
//                 where: {
//                     user_id: user_id,
//                     interaction_type: 'archived',
//                 },
//                 select: {
//                     internalid: true, // Selecting only the internal IDs of the archived events
//                 }
//             });

//             let archivedEventIds = archivedEvents.map(ae => ae.internalid);

//             // Now, query the events excluding the ones archived by the user
//             const events = await prisma.events.findMany({
//                 where: {
//                     NOT: [
//                         {
//                             internalid: { in: archivedEventIds },
//                         },
//                     ],
//                 },
//                 take: 10,
//                 orderBy: {
//                     lastupdated: 'asc',
//                 },
//             });

//             return events;
//         } else { // If user_id is not provided, fetch all events without filtering
//             return await prisma.events.findMany({
//                 take: 10,
//                 orderBy: {
//                     lastupdated: 'asc',
//                 },
//             });
//         }
//     }
// };




// export const getEvents = async (useOnboardingTable = false, user_id: string) => {
//     console.log("GETTING LOGS");

//     if (useOnboardingTable) {
//         console.log("GETING LOGS ")
//         const videos = await prisma.onboarding.findMany({
//             take: 10,
//             orderBy: {
//                 location: 'asc', // or any other field you want to sort by
//             },
//         });
//         return videos;
//     }
//     else {
//         const videos = await prisma.events.findMany({
//             take: 10,
//             orderBy: {
//                 lastupdated: 'asc', // or any other field you want to sort by
//             },
//         });
//         return videos;
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

