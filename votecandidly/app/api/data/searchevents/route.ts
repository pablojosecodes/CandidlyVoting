
import getCurrentUser from "@/utils/db/getCurrentUser";
import { getEvents, getLogs, getProjectsbyUser, searchEvents } from "@/utils/getsend/models";
import { NextRequest, NextResponse } from "next/server";
import { onboarding } from '@prisma/client';


export async function POST(request: Request) {
    console.log("SEARCHING EVENTS")
    const req = await request.json();
    const { onboarding, builder, funlover, investor, page, pageSize, query } = req;

    let user = undefined;
    try {
        user = await getCurrentUser();
    } catch { /* Handle errors if necessary */ }

    const replacer = (key: any, value: any) =>
        (typeof value === 'bigint') ? value.toString() : value;

    let events;
    if (!onboarding && user) {
        events = await searchEvents(query, user.user_id, undefined, builder, funlover, investor, page, pageSize);
    }


    // console.log("Events:", events);
    const response = new Response(JSON.stringify(events, replacer), {
        headers: { 'Content-Type': 'application/json' }
    });

    return response;
}
