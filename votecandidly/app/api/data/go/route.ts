
import getCurrentUser from "@/utils/db/getCurrentUser";
import { eventToStructure, getEvents, getLogs, getProjectsbyUser, magicSearchEvents, searchEvents } from "@/utils/getsend/models";
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

    const exactly = await eventToStructure(query)
    console.log(exactly)
    let events;

    if ("timing" in exactly && exactly['timing']) {
        events = await magicSearchEvents(exactly['search'], exactly['timing'][0], exactly['timing'][1], user?.user_id)
    }
    else {

        events = await searchEvents(query, user?.user_id, undefined, builder, funlover, investor, page, pageSize);

    }


    // console.log("Events:", events);
    const response = new Response(JSON.stringify({ events, exactly }), {
        headers: { 'Content-Type': 'application/json' }
    });


    // const replacer = (key: any, value: any) =>
    //     (typeof value === 'bigint') ? value.toString() : value;

    // let events;
    // if (!onboarding && user) {
    //     events = await searchEvents(query, user.user_id, undefined, builder, funlover, investor, page, pageSize);
    // }


    // // console.log("Events:", events);
    // const response = new Response(JSON.stringify(events, replacer), {
    //     headers: { 'Content-Type': 'application/json' }
    // });

    return response;
}



// import getCurrentUser from "@/utils/db/getCurrentUser";
// import { eventToStructure, getEvents, getLogs, getProjectsbyUser } from "@/utils/getsend/models";
// import { NextRequest, NextResponse } from "next/server";
// import { onboarding } from '@prisma/client';


// export async function POST(request: Request) {
//     const req = await request.json();
//     console.log("ZZ ROUTE ZZ")

//     const exactly = await eventToStructure("Concert next saturday after 5 pm")
//     console.log(exactly)

//     return NextResponse.json(JSON.stringify(exactly));


// }
