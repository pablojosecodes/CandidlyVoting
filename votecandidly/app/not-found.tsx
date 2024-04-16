'use client'
// import Link from 'next/link'

import { IndexContext } from "@/hooks/homeContext";
import OnboardingHeader from "@/components/Header";

export default function NotFound() {
    return (
        <IndexContext.Provider value={"index"}>

            <div className="flex flex-col min-h-screen    w-full">

                <OnboardingHeader auth />
                <div className='  grow flex flex-col justify-between '>
                    <div className="flex  justify-center    w-full">
                        <div className={` max-w-2xl pt-2 w-[90%] grid gap-y-3`}>


                            <div className="  w-full font-semibold text-2xl text-neutral-900">
                                I think you're in the wrong place.
                                Go <a className="hover: -bold underline" href="/">
                                    home?
                                </a>
                            </div>

                            <p className="text-neutral-800  grid gap-y-2 text-sm mt-2 ">
                                <p>
                                    You are lost!
                                </p>


                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </IndexContext.Provider>

    )
}
