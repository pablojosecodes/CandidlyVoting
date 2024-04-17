import './dots.css'

import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

import { AnimatePresence, motion } from "framer-motion"
import { Dialog, DialogHeader, DialogContent } from '@/components/ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';
import { useUser } from '@clerk/nextjs';
import DefaultCard from '@/components/DefaultCard';



const convertToHHMM = (dateStrings: string[]): string[] => {
    return dateStrings.map(dateString => {
        const date = new Date(dateString);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return hours + minutes;
    });
};



const HourInput = ({ isMinutes, def }: { isMinutes?: boolean, def?: string }) => {
    const [inputValue, setInputValue] = useState(def ? def : '');

    const handleChange = (event: any) => {
        const { value } = event.target;
        let regex;

        if (isMinutes) {
            regex = /^[0-5]?[0-9]?$/;
        } else {
            regex = /^(2[0-3]|[01]?[0-9])?$/;
        }

        // Update state only if input matches the regex
        if (regex.test(value)) {
            setInputValue(value);
        }
    };

    const handleBlur = () => {
        // If the input value is not empty and is less than 10, pad it with a leading zero
        let newValue = inputValue;
        if (newValue && newValue.length < 2) {
            newValue = newValue.padStart(2, '0');
        } else if (!newValue) {
            // If the input value is empty, set it to "00"
            newValue = '00';
        }
        setInputValue(newValue);
    };

    return (
        <input
            className='w-[20px] bg-transparent text-sm'
            type="text"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="__"
            maxLength={2}
        />
    );
};

function convertISOToTimeArray(input: string[]) {
    const startISO = input[0]
    const endISO = input[1]

    const parseTime = (isoString: string) => {
        const date = new Date(isoString);
        date.setHours(date.getHours() + 7);

        let hours = date.getHours().toString();
        let minutes = date.getMinutes().toString();

        // Padding with '0' if necessary
        hours = hours.length < 2 ? '0' + hours : hours;
        minutes = minutes.length < 2 ? '0' + minutes : minutes;

        return [hours, minutes];
    };
    const startTime = parseTime(startISO);
    const endTime = parseTime(endISO);

    return [...startTime, ...endTime];
}

import { useCompletion } from 'ai/react';
import { ScrollAreaHorizontalDemo } from '@/components/ScrollMediax';
import Container from './Container';
import { context } from '@prisma/client';


export default function Search({ magified }: { magified?: boolean }) {
    const [keywords, setKeywords] = useState("")
    const [intermediate, setIntermediate] = useState("")
    const { isSignedIn } = useUser()

    // const [sources, setSources] = useState(false);
    const sourcesRef = useRef<HTMLDivElement>(null);
    const [sources, setSources] = useState(false)

    useEffect(() => {
        // Explicitly declare the type of the timeout variable
        let timeout: ReturnType<typeof setTimeout>;

        if (sources && sourcesRef.current) {

            timeout = setTimeout(() => {
                sourcesRef?.current?.scrollIntoView({ behavior: 'smooth' });
            }, 500); // 5000 milliseconds = 5 seconds
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [sources]);



    const [prompt, setPrompt] = useState(false)

    const [visible, setVisible] = useState(false)
    const magicSearch = () => {
        if (!isSignedIn) {
            setPrompt(true)
            return
        }
        if (intermediate != keywords) {
            setKeywords(intermediate)
            setVisible(true)
        }
    }

    const setKey = (value: string) => {
        setIntermediate(value)

    }
    const {
        completion,
        input,
        setInput,
        stop,
        isLoading,
        handleInputChange,
        handleSubmit,
        data
    } = useCompletion();


    const [localIsLoading, setLocalIsLoading] = useState(isLoading);
    const lastCompletion = useRef(completion);

    useEffect(() => {
        if (completion !== lastCompletion.current) {
            lastCompletion.current = completion;
            setLocalIsLoading(true); // Reset loading when completion changes

            // Setup a timer to set isLoading to false if completion hasn't changed for 1 second
            const timer = setTimeout(() => {
                setLocalIsLoading(false);
            }, 1000);

            // Clear the timer on cleanup or when completion changes again
            return () => clearTimeout(timer);
        }
    }, [completion]); // Depend on completion to restart the timer

    useEffect(() => {
        setLocalIsLoading(isLoading); // Sync local isLoading with the hook's isLoading
    }, [isLoading]);





    const [first, setFirst] = useState(true)

    const [text, setText] = useState("")
    const questions: string[] = [
        "Their thoughts on public policy?",
        "Recent social media posts?",
        "Who is Yvette?",
        "Who is Scott?"
    ];

    const handleFormSubmit = (event: any) => {
        event.preventDefault(); // Prevent the default form submission behavior

        if (!isSignedIn) {
            // If the user is not signed in, log a message or handle accordingly
            console.log("Please sign in to submit this form.");
            // Optionally, redirect to the login page or display a login modal
            return; // Stop the function here if not signed in
        }

        // If the user is signed in, call the predefined handleSubmit function
        handleSubmit(event); // Assuming handleSubmit uses the event object
    };


    return (
        <div className={` relative overflow-contain w-full bg- mb-4 grid gap-y-8 `}>



            {first && < DefaultCard askDefault={setInput} />}

            {text &&

                // <Container>
                <>
                    <div className='mt-16 flex content-end'>
                        <div className='flex-none h-8'>
                            <Icons.person className='mr-1 inline-block h-8  w-8' />
                            :
                        </div>
                        <p className='ml-2 grow'>
                            {text}
                        </p>
                    </div>

                    <div className='flex content-end'>
                        <div className='flex-none h-8'>
                            <Icons.anthropic className='mr-1 inline-block h-8  w-8' />
                            :
                        </div>
                        <p className='ml-2 grow'>
                            {completion}
                        </p>
                    </div>
                    {!isLoading && !sources && <div className="mt-4  px-8 flex items-center gap-2 w-full flex-wrap">
                        {questions.map((question, ind) => {
                            return (
                                <button key={ind} onClick={() => setInput(question)} className="h-auto text-left border bg-sky-300/20 hover:bg-sky-4 ring-1 ring-sky-400 hover:border-sky-8 text-sky-12 py-2 px-4 text-base rounded-lg max-w[128px] disabled:opacity-30">
                                    {question}
                                </button>
                            )
                        })}
                        <button onClick={() => setSources(true)} key={-1} className="h-auto text-left border bg-rose-300/20 hover:bg-sky-4 ring-1 ring-rose-400 hover:border-rose-8 text-rose-12 py-2 px-4 text-base rounded-lg max-w[128px] disabled:opacity-30">
                            Sources?
                        </button>
                    </div>}

                </>


                // </Container>

            }
            {sources && !isLoading &&
                <>
                    <div ref={sourcesRef} className="mt-4  plex items-center gap-2 w-full flex-wrap">
                        <button onClick={() => setSources(false)} key={-1} className="h-auto hover:bg-rose-400/20 text-left border bg-rose-300/20 hover:bg-sky-4 ring-1 ring-rose-400 hover:border-rose-8 text-rose-12 py-2 px-4 text-base rounded-lg max-w[128px] disabled:opacity-30">
                            Sources!
                        </button>
                    </div>
                    < ScrollAreaHorizontalDemo data={((data![0] as any)['values'] || null) as unknown as context[]} />
                </>
            }


            {/* {!first && } */}


            {/* <ScrollAreaHorizontalDemo /> */}

            <Dialog open={prompt} onOpenChange={setPrompt}
            >
                <DialogContent className='!border-neutral-300 bg-neutral-100'>
                    <DialogHeader >
                        <p className='text-neutral-950'>
                            Log in to access advanced features!
                        </p>

                    </DialogHeader>
                    <DialogDescription>
                        <Button className='bg-sky-600 hover:bg-sky-700' onClick={() => window.open("/sign-in", "_self")}>
                            Log in
                        </Button>
                    </DialogDescription>
                </DialogContent>
            </Dialog>


            {/* <button onClick={() => {
                console.log()
                // console.log(text)
            }}>
                ZZ
            </button> */}



            <div className="fixed bottom-safe bottom-0  left-0  z-[1000] w-full         justify-center">

                {/* <div className="fixed bottom-10 left-0 w-full" > */}
                <div
                    className=" pb-8 bg-neutral-200/80 pt-4 px-12 mx-auto max-w-2xl rounded-t-xl w-[90%]   justify-center  items-center space-x-2">
                    <form className='bg-neutral-50 w-full max-w-xl  flex border p-1  rounded-xl  gap-x-2 border-neutral-400 placeholder:text-neutral-600' onSubmit={handleFormSubmit}>

                        <Input autoFocus onKeyDown={e => {
                            if (e.key === 'Enter') {
                                e.preventDefault(); // Prevent the default action to avoid form submission or other unwanted behavior
                                magicSearch()
                            }

                        }
                        }
                            value={input}
                            onChange={handleInputChange}
                            className='text-neutral-900 placeholder:text-neutral-800 focus:ring-none focus:border-none border-none ring-none ring-0 border-0' type="text" placeholder="Your question here..." />
                        {
                            isLoading ? <Button type='button' className='border-neutral-600 border hover:bg-neutral-950 border-1 text-neutral-200' onClick={(e) => {
                                e.preventDefault()


                                stop()
                            }} >
                                <Icons.sparkle className='w-5 h-5' />
                            </Button>
                                :
                                <Button type='submit' className='border-neutral-600 border hover:bg-neutral-950 border-1 text-neutral-200' onClick={() => {

                                    if (isSignedIn) {
                                        setFirst(false)
                                        setText(input)
                                        setSources(false)
                                    }
                                    magicSearch()
                                }} >
                                    <Icons.magic className='w-5 h-5' />
                                </Button>}

                    </form>
                    <p className='mt-4 text-neutral-800 text-sm  text-center'>
                        Learn more about these politicians!

                    </p>

                </div>

            </div>

        </div >

    )
}