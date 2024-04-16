
import getCurrentUser from "@/utils/db/getCurrentUser";
import { getAgenda, getEvents, getLogs, getProjectsbyUser } from "@/utils/getsend/models";
import { NextRequest, NextResponse } from "next/server";
import { onboarding } from '@prisma/client';


export async function POST(request: Request) {
    const req = await request.json();
    const { onboarding, builder, funlover, investor, page, pageSize, agenda } = req;

    let user = undefined;
    try {
        user = await getCurrentUser();
    } catch { /* Handle errors if necessary */ }

    const replacer = (key: any, value: any) =>
        (typeof value === 'bigint') ? value.toString() : value;


    const events = await getAgenda(user?.user_id!, page, pageSize);


    // console.log("Events:", events);
    const response = new Response(JSON.stringify(events, replacer), {
        headers: { 'Content-Type': 'application/json' }
    });

    return response;
}
