

import { PrismaClient } from '@prisma/client';
import getCurrentUser from './getCurrentUser';

const prisma = new PrismaClient();

interface IUpdateUserPreferences {
    user_id: string;
    preferences: object; // JSON object
}

// export async function updateUserPreferences({  preferences , user_id }: IUpdateUserPreferences) {
//     try {
//         const user = await prisma.users.update({
//             where: {
//                 user_id: user_id, // Replace 'userId' with the actual field name for user ID in your schema
//             },
//             data: {
//                 onboarded: true,
//                 preferences: preferences, // Assuming 'preferences' is the JSON field
//             },
//         });
//         return user;
//     } catch (error) {
//         console.error("Error updating user preferences:", error);
//         throw error;
//     }
// }
