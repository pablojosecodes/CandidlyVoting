'use client'

import { IPage } from "@/app/page";
import OnboardingHeader from "@/components/Header";

import { IndexContext } from "@/hooks/homeContext";
import { SignIn, ClerkProvider, useUser } from '@clerk/nextjs';
import { redirect } from "next/navigation";

import { useState } from "react";
// import {dark} from "@clerk/themes";

export default function Page() {

  const [index, setIndex] = useState<IPage>("Info")
  const { isSignedIn } = useUser()
  if (isSignedIn) {
    redirect("/")
  }

  return (
    <IndexContext.Provider value={index}>

      <div className="flex flex-col min-h-screen items-center gap-20  w-full">
        <div className="w-full">
          <OnboardingHeader auth />
        </div>
        <div className=" mx-auto md:max-w-2xl  md:w-[90%]">
          <SignIn signUpUrl="/sign-up" redirectUrl="/" />
        </div>



      </div>
    </IndexContext.Provider>
  )

}