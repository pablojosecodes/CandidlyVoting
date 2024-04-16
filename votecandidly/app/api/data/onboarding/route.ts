
import { getEvents, getLogs, getProjectsbyUser } from "@/utils/getsend/models";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {






    // if (!deploymentId) {
    //     return new NextResponse('User ID is required', { status: 400 });
    // }

    const events = await getEvents(undefined, true)

    
    console.log(events)
    const replacer = (key: any, value: any) =>
        (typeof value === 'bigint') ? value.toString() : value;  // Convert BigInt to string

    return NextResponse.json(JSON.stringify(events, replacer));

    // return NextResponse.json(events)
};