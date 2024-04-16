import getCurrentUser from "@/utils/db/getCurrentUser";
import prisma from "@/prisma/prismaClient";

export async function POST(request: Request) {
    try {
        const feedbackData = await request.json();


        // Attempt to retrieve the current user
        const user = await getCurrentUser();

        // Create a new feedback entry
        const feedback = await prisma.feedback.create({
            data: {
                user_id: user?.user_id || null, // Assumes user_id is a string and nullable
                feedback: feedbackData, // Assumes the feedback is in feedbackData.feedback
            }
        });

        // Return a success response with the created feedback
        return new Response(JSON.stringify(feedback), {
            headers: { 'Content-Type': 'application/json' },
            status: 200 // HTTP status code for OK
        });
    } catch (error) {
        // Handle any errors in the process
        console.error('Error posting feedback:', error);

        // Return an error response
        return new Response(JSON.stringify({ error: 'Failed to post feedback' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500 // HTTP status code for Internal Server Error
        });
    }
}
