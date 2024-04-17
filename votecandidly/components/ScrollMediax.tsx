import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tweet } from "react-tweet"
import { context } from "@prisma/client"

export interface Artwork {
    artist: string
    art: string
}

export const works: Artwork[] = [
    {
        artist: "Ornella Binni",
        art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
]

function extractYouTubeID(url: string): string | null {
    try {
        const urlObj = new URL(url);
        const videoID = urlObj.searchParams.get('v');
        return videoID;
    } catch (error) {
        console.error("Invalid URL provided");
        return null; // or handle the error as needed
    }
}


export function ScrollAreaHorizontalDemo({ data }: { data: context[] }) {
    function extractTripleQuotedText(input: string): string {
        // Regular expression to match triple quoted text
        const regex = /"""(.*?)"""/gs;
        let match;
        const results: string[] = [];

        // Use a loop to find all matches in the string
        while ((match = regex.exec(input)) !== null) {
            // match[1] contains the captured group content which is the text inside the triple quotes
            if (match[1]) {
                return match[1]
            }
        }

        return "results";
    }
    return (
        <ScrollArea className="w-full  pb-32 px-[-300px] whitespace-nowrap rounded-md border">
            <div className="flex w-max content-start items-start  updated-dark space-x-4 ">
                {/* <button onClick={() => console.log(data)}>
                    CLICK
                </button> */}
                {data && data.map((val, ind) => {
                    if (val.date == null) {
                        return (
                            <Tweet key={ind} id={val.id.toString()} />
                        )
                    }
                    // if (!val.timestamp) return (
                    //     <Tweet id={val.id.toString()} />
                    // )
                    // else {
                    // return 

                    // <figure key={"artwork.artist"} className="bg-neutral-100 rounded-lg mb-auto overflow-hidden  shrink-0">
                    //     <div className="overflow-hidden rounded-md">
                    //         <Image
                    //             src={`https://i3.ytimg.com/vi/${extractYouTubeID(val?.link!)}/maxresdefault.jpg`}
                    //             alt={`Photo by ${"artwork.artist"}`}
                    //             className="aspect-[16/9] max-w-md object-cover"
                    //             width={300}
                    //             height={400}
                    //         />
                    //     </div>
                    //     <div className="pb-4 px-4 pt-2" >

                    else return <figure key={ind} onClick={() => window.open(val.link!)} className="cursor-pointer bg-neutral-100 rounded-lg mb-auto overflow-hidden shrink-0 flex flex-col items-center">
                        <div className="overflow-hidden rounded-md w-full max-w-xs">
                            <Image
                                key={val?.link!}
                                src={`https://i3.ytimg.com/vi/${extractYouTubeID(val?.link!)}/maxresdefault.jpg`}
                                alt={`Photo by ${"artwork.artist"}`}
                                className="aspect-[16/9] object-cover w-full"
                                width={300}
                                height={400}
                            />
                        </div>
                        <div className="pb-4 px-4 pt-2 max-w-xs w-full">
                            <p className="text-xs line-clamp-4 text-muted-foreground break-words" style={{ whiteSpace: 'normal', overflow: 'visible', textOverflow: 'clip' }}>
                                {/* {extractTripleQuotedText(val.text).join(" ")} */}
                                {/* </p>
</div> */}

                                {/* <div className="pb-4 px-4 pt-2 max-w-xs w-full">
                            <p className="text-xs text-muted-foreground break-words"> */}

                                {/* <p className="text-xs pt-2"> */}
                                {/* {val.timestamp?.toLocaleDateString()} */}
                                {/* </p> */}

                                {/* <p className="text-xs text-muted-foreground flex flex-wrap"> */}
                                {extractTripleQuotedText(val.text)}

                            </p>
                            {/* <figcaption className="pt-.5 max-w-sm text-xs text-muted-foreground">
                            </figcaption> */}
                        </div>
                    </figure>
                    // }
                })}


                {/* <Tweet id="1628832338187636740" />

                



                {works.map((artwork) => (
                    <figure key={artwork.artist} className="bg-neutral-100 rounded-lg mb-auto overflow-hidden  shrink-0">
                        <div className="overflow-hidden rounded-md">
                            <Image
                                src={"https://i3.ytimg.com/vi/xLveM3T_YRM/maxresdefault.jpg"}
                                alt={`Photo by ${artwork.artist}`}
                                className="aspect-[16/9] max-w-md object-cover"
                                width={300}
                                height={400}
                            />
                        </div>
                        <div className="pb-4 px-4" >

                            <p className="text-xs pt-2">
                                timetsmp
                            </p>

                            <figcaption className="pt-.5 text-xs text-muted-foreground">
                                Text with txt thing thing
                            </figcaption>
                        </div>
                    </figure>
                ))} */}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
