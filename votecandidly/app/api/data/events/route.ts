
import getCurrentUser from "@/utils/db/getCurrentUser";
import { getEvents, getLogs, getProjectsbyUser } from "@/utils/getsend/models";
import { NextRequest, NextResponse } from "next/server";
import { onboarding, users } from '@prisma/client';


export async function POST(request: Request) {
    const req = await request.json();
    const { onboarding, builder, funlover, investor, page, pageSize } = req;

    let user: users | null = null;
    try {
        user = await getCurrentUser();
    } catch { /* Handle errors if necessary */ }

    const replacer = (key: any, value: any) =>
        (typeof value === 'bigint') ? value.toString() : value;

    let events;


    if (!onboarding && user) {

        events = await getEvents(user.user_id, undefined, builder, funlover, investor, page, pageSize);
    } else {
        // Assuming this is meant for all other cases, including onboarding
        events = await getEvents(undefined, undefined, builder, funlover, investor, page, pageSize);
    }


    // console.log("Events:", events);
    const response = new Response(JSON.stringify(events, replacer), {
        headers: { 'Content-Type': 'application/json' }
    });

    return response;
}
