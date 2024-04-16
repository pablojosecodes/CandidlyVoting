"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Icons } from "../ui/icons";

export const BuiltWith = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setTimeout(() => {
            if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
                setCurrent(0);
                api.scrollTo(0);
            } else {
                api.scrollNext();
                setCurrent(current + 1);
            }
        }, 1000);
    }, [api, current]);




    return (
        <div className="w-full bg-neutral-100  py-10  lg:py-20 mt-10  lg:mt-20">
            <div className="max-w-5xl text-neutral-900 container mx-auto">
                <p className="block mb-2 text-center w-full font-semibold md:hidden">
                    Thank you, Anthropic
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
                    <h3 className="hidden md:block text-lg md:text-3xl flex font-semibold lg:max-w-xl w-full  text-left">
                        Proudly


                        integrated with Claude
                    </h3>
                    <div className="relative w-full col-span-2">
                        <div className="bg-gradient-to-r from-background/10 via-white/40 to-background/10 z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
                        <Carousel setApi={setApi} className="w-full">
                            <CarouselContent>

                                {new Array(20).fill(<Icons.anthropic className="h-4 w-4" />).map((icon, index) => (
                                    <CarouselItem
                                        className="basis-1/4 lg:basis-1/6"
                                        key={index}
                                    >
                                        <div className="hover:rotate-45  hover:scale-[1.05]  cursor-pointer flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                                            {/* <span className="text-sm">Logo {index + 1}</span> */}
                                            {icon}
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};