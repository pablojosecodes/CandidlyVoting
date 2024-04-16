import getCurrentUser from "@/utils/db/getCurrentUser";
import { archiveEvent } from "@/utils/getsend/models";
import { auth, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { events } from '@prisma/client';

export async function POST(request: Request) {
  console.log("Received request");
  const user = await getCurrentUser()
  const req = await request.json();
  const { eventId, action } = req;
  const userId = user?.user_id



  if (userId && eventId) {
    try {
      await archiveEvent(userId, eventId, action);
      // Assuming the archive was successful, and you want to return a success response
      return new Response(JSON.stringify({ success: true, message: "Event archived successfully." }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      });
    } catch (error) {
      console.error("Error archiving event:", error);
      // Return an error response
      return new Response(JSON.stringify({ success: false, message: "Failed to archive event." }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 500,
      });
    }
  } else {
    // User ID or Event ID was missing from the request
    return new Response(JSON.stringify({ success: false, message: "Missing userID or eventID." }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }
}

// console.log(req)
// if (userId) {
//     const resposne = archiveEvent(userId, eventId)
// }

// return NextResponse.json(events)
