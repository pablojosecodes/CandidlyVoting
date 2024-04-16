
import { Button } from "@/components/ui/button";


export default function DemoPage() {
    return (
        <div id="demo" className="mx-auto text-neutral-900 w-full pt-20 md:pt-40 max-w-5xl  ">

            <div className="container mt-2 mx-auto">
                <div className="flex  content-start justify-start gap-4 pl-0  flex-col  flex-1">

                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl font-regular max-w-xl text-left font-semibold">

                            {/* <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left"> */}
                            Very easy interface
                        </h2>
                        <div className="flex flex-wrap ">

                            <p className="text-lg  max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                                Our interface is straightforward, so you can get right to the facts about candidates without any fuss.

                                <span className="hidden md:block">It's got smart tools to track what they’re saying now compared to before—because who has time for flip-floppers</span>
                            </p>

                        </div>
                        <Button className="max-w-sm w-full border bor border-neutral-800 shadow shadow-lg shadow-neutral-900/40 my-auto md:ml-2 my-2 font-regular rounded bg-sky-500 hover:bg-sky-400 p-2 text-neutral-100 text-sm">
                            Give it a try
                        </Button>

                    </div>
                </div>
                <div className="mt-4  flex flex-col-reverse lg:flex-row gap-2 lg:items-center">

                    <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">


                        <div
                            style={{
                                position: "relative",
                                paddingBottom: "calc(56.666666666666664% + 41px)",
                                height: 0,
                                width: "100%"
                            }}
                        >
                            <iframe
                                src="https://demo.arcade.software/0kGKVDnKII3UCOzQIGBG?embed&show_copy_link=true"
                                title="Candily"
                                frameBorder={0}
                                loading="lazy"
                                // w=""

                                allowFullScreen={true}
                                allow="clipboard-write"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    colorScheme: "light"
                                }}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}