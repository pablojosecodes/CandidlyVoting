'use client'
import { Icons } from "@/components/ui/icons";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../ui/tooltip";




export default function InspoPage() {

    // const {  } = useClerk()
    // const dbUser = await getCurrentUser()
    // if (!(dbUser && 'email' in dbUser)) {
    //     return (
    //         <>
    // </>
    //     )
    // }


    const zipcodes = [94158, 94143, 94133, 94132, 94131, 94130, 94129, 94127, 94124, 94123,
        94122, 94121, 94118, 94117, 94116, 94115, 94114, 94112, 94111, 94110,
        94109, 94108, 94107, 94105, 94104, 94103, 94102
    ]

    const [zip, setZip] = useState("")

    const [notInSF, setNotInSF] = useState(false)
    return (
        <>

            <TooltipProvider>

                <div className="w-full relative">

                    <Dialog onOpenChange={setNotInSF} open={notInSF}>

                        <section className=" relative z-10 container mx-auto flex flex-col items-center sm:hero-bg max-w-[1320px]">
                            <div className="mt-32 sm:mt-28" />
                            <svg
                                width={154}
                                height={21}
                                className="hidden sm:block text-white aos-init aos-animate"

                                data-aos="fade-in"
                                data-aos-delay={200}
                            >
                            </svg>
                            <h1
                                className="text-neutral-900 mt-3 hero-text inline-block   font-semibold tracking-tight text-center text-[55px] sm:text-[100px] lg:text-[130px] leading-[88%] aos-init aos-animate"
                                data-aos="fade-up"
                            >
                                <span className="js-slide md:grid ">
                                    <span
                                        className=" transition-all duration-700 ease-in-out opacity-0       text-[55px] sm:text-[120px] lg:text-[150px] le"
                                        style={{
                                            gridArea: "1 / 1",
                                            transform: "translateY(0px)",
                                            opacity: 1
                                        }}
                                    >
                                        Candidly.{" "}
                                    </span>
                                </span>
                                Vote.
                            </h1>
                            <p
                                className="mt-5   items-baseline text-lg sm:text-large-20 text-center max-w-[350px] sm:max-w-[460px] text-neutral-800 aos-init aos-animate"
                                data-aos-delay={100}
                                data-aos="fade-up"
                            >
                                Understand the politicians you vote for.{" "}
                                <Tooltip>


                                    <TooltipTrigger asChild>

                                        <span className="inline hidden md:block  group-button group relative   cursor-help items-center gap-0.5 !no-underline decoration-dotted decoration-1 underline-offset-2 hover:!underline">


                                            Learn about  your local election's politicians
                                            {/* <Icons.tool className="group-hover opacity-40" /> */}

                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent>

                                        <p className="max-w-sm    flex gap-3  text-sm">

                                            We're just trying to find efficient ways to surface relevant political information!
                                        </p>

                                    </TooltipContent>
                                </Tooltip>



                                {/* or 10% cost plus */}

                            </p>
                            {/* We have an open source deployment tool for your AWS account or can manage that for you for just a 10% cost-plus model. */}
                            <div className="relative mt-10    max-w-[323px]  w-full">

                                <input
                                    placeholder="Your zipcode"
                                    // target="_blank"

                                    value={zip}
                                    onChange={e => setZip(e.target.value)}

                                    className="!border-transparent !ring-transparent  focus:outline-none   p-3 w-full flex items-center justify-center rounded text-neutral-900 placeholder:text-neutral-700 placeholder:font-regular font-semibold text-base sm:text-large-18 h-[50px] bg-sky-500 ring-2 ring-offset-2 ring-offset-neutral-800 transition duration-300 "
                                    data-aos-delay={300}
                                    data-aos="fade-up"
                                />
                                <button onClick={() => {
                                    if (zipcodes.indexOf(parseInt(zip)) == -1) {
                                        setNotInSF(true)
                                    }
                                    else {
                                        window.open("https://go.votecandidly.com/?in=Info", "_self")
                                    }

                                }} className="absolute  top-0 right-2 h-full  flex content-center ">
                                    <div className="transition-all transition duration-300  my-auto h-[40px] bg-neutral-50/40 hover:bg-neutral-50/60 flex content-center p-2 rounded">
                                        <Icons.send className="h-[25px] w-[25px] text-neutral-900 my-auto" />
                                    </div>
                                </button>
                            </div>
                            <DialogContent className="z-[1000] max-w-md bg-opacity-10">
                                <DialogHeader>
                                    <DialogTitle>Sorry, we're only operational in District 11!</DialogTitle>
                                    <DialogDescription>
                                        <p>
                                            Feel free to input your email for updates!
                                        </p>

                                        <div className="mt-4 flex border-neutral-800 border border-1 rounded-lg overflow-hidden">

                                            <Input placeholder="email" type="email" className="text-neutral-700 border-none ring-none" />


                                            <Button className="!rounded-none">
                                                Submit
                                            </Button>
                                        </div>

                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>


                        </section>
                    </Dialog>


                </div >
            </TooltipProvider>

        </>

    )
}