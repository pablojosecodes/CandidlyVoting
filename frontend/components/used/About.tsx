'use client'
import { Icons } from "@/components/ui/icons";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";



export default function AboutPage() {


    const QAs = [
        {
            "Q": "Which politicians are you currently tracking?",
            "A": "We are tracking those running in the 2024 California District 11 Senate Election, including the current senator Scott Weiner and challenger Yvette Corkrean."
        },
        {
            "Q": "What can I do on the platform?",
            "A": "You can get general information on elections (for now just the 2024 California District 11 Senate Election), and interact with our chat feature to synthesize a candidate’s recent remarks or thoughts on specific issues."
        },
        {
            "Q": "What if my area is not covered?",
            "A": "If you are not within California's District 11, you can sign up to be notified when we add support for politicians in your area."
        },
        {
            "Q": "How do you gather information about candidates?",
            "A": "We sort elections by time, date, and importance. Information is collected from all verifiable government sources and is presented intuitively. Additionally, we analyze recent remarks, votes, speeches, and posts by the politicians."
        },
        {
            "Q": "How accurate is the information provided?",
            "A": "Extremely."
        },
        {
            "Q": "Is there a fee to use the platform?",
            "A": "Free to use!"
        },
        {
            "Q": "Can I search for specific remars?",
            "A": "Yep, you can use the chat to search for specific candidates or topics. For example, you can type 'What has Scott Weiner said about election interference?' or 'Recent remarks on abortion' to get relevant summaries."
        },
        {
            "Q": "Where does the platform get its information?",
            "A": "Our information comes from government databases, official candidate websites, verified news sources, and transcripts of recent speeches and interviews. We want the information to be trustworthy and timely!"
        },
    ];
    const zipcodes = [94158, 94143, 94133, 94132, 94131, 94130, 94129, 94127, 94124, 94123,
        94122, 94121, 94118, 94117, 94116, 94115, 94114, 94112, 94111, 94110,
        94109, 94108, 94107, 94105, 94104, 94103, 94102
    ]
    return (
        <div id="about" className="text-neutral-900 w-full max-w-5xl mx-auto pt-10 md:pt-20 ">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-x-10">
                    <div className="flex gap-10 flex-col">
                        <div className="flex gap-4 flex-col">

                            <div className="flex gap-2 flex-col">
                                <h4 className="text-3xl md:text-5xl font-regular max-w-xl text-left font-semibold">
                                    We want to make politics  transparent.
                                </h4>
                                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-neutral-500  text-left">

                                    Voting should be about a politician's track record,  held ideologies, and real actions.
                                    Not campaigns, flashy websites, or partisan groupthink.
                                    We hope Candidly can be the trusted source of information on politicians that voters in America deserve.
                                </p>
                            </div>
                            <div className="">
                                <Button onClick={() => window.open("mailto:pablosfsanchez@gmail.com")} className="gap-4 hidden md:flex hover:bg-opacity-80" >
                                    Questions?  Contact us <Icons.mail className="text-neutral-200 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {QAs.map((QA, index) => (
                            <AccordionItem key={index} value={"index-" + index}>
                                <AccordionTrigger className="text-left">
                                    {QA.Q}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {QA.A}
                                </AccordionContent>
                            </AccordionItem>
                        ))}

                        {/* {Array.from({ length: 8 }).map((_, index) => (
                                <AccordionItem key={index} value={"index-" + index}>
                                    <AccordionTrigger>
                                        This is the start of something new
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Managing a small business today is already tough. Avoid further
                                        complications by ditching outdated, tedious trade methods. Our
                                        goal is to streamline SMB trade, making it easier and faster
                                        than ever.
                                    </AccordionContent>
                                </AccordionItem>
                            ))} */}
                    </Accordion>
                </div>
            </div>
        </div>

    )
}