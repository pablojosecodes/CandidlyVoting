import { PrismaClient, users } from '@prisma/client';
import { currentUser } from '@clerk/nextjs';

const prisma = new PrismaClient();

export default async function getCurrentUser() {
    console.log("GETTING CURRENT USER")
    const currentUserData = await currentUser();

    if (!currentUserData) {
        return null;
    }

    try {
        console.log(currentUserData.id)
        let user: users | null = await prisma.users.findUnique({
            where: { user_id: currentUserData.id }
        });

        if (!user) {
            // If user does not exist, create a new user
            user = await prisma.users.create({
                data: {
                    user_id: currentUserData.id,
                    email: currentUserData.emailAddresses[0].emailAddress,
                    username: currentUserData.username || "default",

                    // Add other fields as necessary
                }
            });
        }


        return user;

    } catch (error) {
        console.error("Error fetching or creating user:", error);
        return null
    }
}




// import { GetCommandOutput, PutCommand } from '@aws-sdk/lib-dynamodb';
// import { GetCommand } from '@aws-sdk/lib-dynamodb';
// import { currentUser } from '@clerk/nextjs';
// import { db } from '@/utils/config';






// export default async function getCurrentUser() {
//     console.log("GETTING CURRNET USER")
//     const currentUserData = await currentUser();

//     if (!currentUserData) {
//         return null;
//     }

//     try {
//         const { Item: user } = await db.send(
//             new GetCommand({
//                 TableName: "CitrusUserIDs",
//                 Key: {
//                     userId: currentUserData.id
//                 },
//             })



//         if (!user) {
//             const newUser = await db.send(
//                 new PutCommand({
//                     TableName: "CitrusUserIDs", // Make sure this matches the table name exactly
//                     Item: {
//                         userId: currentUserData.id, // This should match your partition key name
//                         email: currentUserData.emailAddresses[0].emailAddress,
//                         createdAt: currentUserData.createdAt,
//                         plan: 'FREE',
//                         currentCreditConsumption: 0,
//                         currentCredits: 0,
//                         extraCredits: 0,
//                         firstName: currentUserData.firstName,
//                         lastName: currentUserData.lastName,
//                         marketingEmail: currentUserData.emailAddresses[0].emailAddress,
//                         subscriptionStatus: "ACTIVE"
//                     },
//                 })

//             ) as IGetCommandOutput<IUser>;
//             return newUser;

//             return newUser
//             // throw new Error(`User with ID ${userId} not found.`);
//         }
//         return user;
//     } catch (error) {
//         console.error("Error fetching user:", error);

//         throw error; // Re-throw the error to be handled by the caller
//         // return false;
//     }



//     // const { Item: user } = (await db.send(
//     //     new GetCommand({
//     //         TableName: "CitrusUsersID",
//     //         Key: {
//     //             pk: `${currentUserData?.id}`,
//     //             sk: `${currentUserData?.id}`,
//     //         },
//     //     })
//     // ))

//     // return user;
// }