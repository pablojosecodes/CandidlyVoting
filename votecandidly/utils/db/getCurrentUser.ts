import { PrismaClient, users } from '@prisma/client';
import { currentUser } from '@clerk/nextjs';

const prisma = new PrismaClient();

export default async function getCurrentUser() {

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
                }
            });
        }


        return user;

    } catch (error) {
        return null
    }
}


