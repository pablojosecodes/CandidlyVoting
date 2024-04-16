


import getCurrentUser from "@/utils/db/getCurrentUser";
import {  updateUser } from "@/utils/getsend/models";

import { auth, clerkClient } from "@clerk/nextjs";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

type UserUpdateInput = Prisma.usersUpdateInput


export async function POST(request: Request) {
    console.log("Received request");

    const req = await request.json();
    // const { currentDetails } = req;
    const { ...updates } = req;
    console.log(updates)

    const user = await getCurrentUser()


    const userId = user?.user_id

    if (!userId) {
        return NextResponse.json({ message: "User ID is required", status: 400 });
    }

    try {
        await updateUser(userId, updates as UserUpdateInput);
        return NextResponse.json({ message: "Updated", status: 200 });
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ message: "Internal error", status: 500 });
    }
}
