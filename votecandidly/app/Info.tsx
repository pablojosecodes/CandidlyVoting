
import './dots.css'
import { Tweet } from 'react-tweet'




import { Icons } from '@/components/ui/icons';
import { clsx } from 'clsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dispatch, SetStateAction, useState } from 'react';
import { useSettings } from '@/utils/context/indexContext';
import { ISettings } from '@/types';
import { IPage } from './page';

export default function Info({ setIt }: {

    setIt?: Dispatch<SetStateAction<IPage>>
}) {

    const [feedback, setFeedback] = useState("")

    const [submitting, setSubmitting] = useState(false)
    const [openFeed, setOpenFeed] = useState(false)
    const [done, setDone] = useState(false)


    const sendFeedback = async () => {
        setSubmitting(true)
        console.log(feedback)


        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedback),
        });
        if (response.status == 200) {
            setDone(true)
            setTimeout(() => {
                setSubmitting(false)

                setOpenFeed(false)
                setTimeout(() => {
                    setFeedback("")
                    setDone(false)

                }, 400)
            }, 400)

        }
        return response




        // return (

        // )
    }
    const { settings, setSettings } = useSettings()
    const [hidden, setHidden] = useState([""])

    const hide = (value: string) => {
        setHidden(hidden => [...hidden, value])
    }

    const [indices, setIndices] = useState<number[]>([])

    const UnderstandButton = ({ index }: { index: number }) => {
        return (

            <Button onClick={() => setIndices([...indices, index])} className='mt-2 bg-neutral-300 hover:bg-neutral-400 ring-neutral-700 ring-1 text-neutral-900'>
                Understood
            </Button>
        )
    }

    return (
        <div className='w-full flex pb-4   gap-x-6 '>
            <div className='grid gap-y-12 pt-12  w-full'>
                <p className='w-full text-xl md:text-3xl font-regular bgwhite text-left font-semibold'>
                    CA State Senate elections, District 11

                </p>
                {indices.indexOf(0) == -1
                    &&
                    <div className='max-w-xl bg-neutral-100 p-4 rounded-lg shadow'>
                        <h3 className='text-lg font-semibold'>Term Details</h3>
                        <p>Members of the California State Senate serve four-year terms with term limits. Legislators assume office the first Monday in December following their election.</p>

                        <UnderstandButton index={0} />
                    </div>}
                {indices.indexOf(1) == -1
                    &&
                    <div className='bg-neutral-100  max-w-xl p-4 rounded-lg shadow'>
                        <h3 className='text-lg font-semibold'>Deadlines</h3>
                        <ul className='list-disc pl-5'>
                            <li><strong>Voter Registration Deadline:</strong> Oct. 21, 2024
                                {/* <ul className='list-circle pl-4'>
                                    <li>In-person</li>
                                    <li>By mail: Received by</li>
                                    <li>Online</li>
                                </ul> */}
                            </li>
                            <li><strong>Absentee/Mail-in Ballot Return Deadline:</strong> Nov. 5, 2024
                                {/* <ul className='list-circle pl-4'>
                                    <li>In-person</li>
                                    <li>By mail: Postmarked by</li>
                                </ul> */}
                            </li>
                            <li><strong>Election Day Poll Hours:</strong> 7:00 a.m. to 8:00 p.m.</li>
                        </ul>
                        <UnderstandButton index={1} />
                    </div>
                }

                {indices.indexOf(2) == -1 &&

                    <div className='max-w-xl bg-neutral-100 p-4 rounded-lg shadow'>
                        <h3 className='text-lg font-semibold'>November Election</h3>

                        <div>
                            <h4 className='text-md font-regular'>Voting Day: March 5, 2024</h4>
                        </div>
                        <div>
                            <h4 className='text-md font-regular'>Current Title Holder: Scott Weiner</h4>
                        </div>
                        <UnderstandButton index={2} />

                    </div>

                }



                <div className='flex flex-wrap justify-between gap-x-2 gap-y-4'>
                    {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 "> */}
                    <div className="flex flex-col justify-between bg-white shadow-lg rounded-lg overflow-hidden w-80">
                        <div className='w-full grid bg-'>

                            <div className="bg-blue-800 p-4 text-white text-center">
                                <img className="w-24 h-24 rounded-full mx-auto border-4 border-white" src="https://wp.digitaldemocracy.calmatters.org/wp-content/uploads/2023/12/scott-wiener-1970.jpg" alt="Scott Wiener" />
                                <h2 className="text-xl font-semibold mt-2">Scott Wiener</h2>
                                <p className="text-sm">Democratic Party</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold border-b pb-2">California State Senate District 11</h3>
                                <div className="mt-2">
                                    <p><strong>Tenure:</strong> 2016 - Present</p>
                                    <p><strong>Term ends:</strong> December 2, 2024</p>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-semibold">Education</h4>
                                    <p>Bachelor's from Duke University</p>
                                    <p>Law degree from Harvard University</p>
                                </div>
                            </div>
                            <Button onClick={() => setIt && setIt("Search")} className='mx-auto mb-4 w-60 bg-sky-500 hover:bg-sky-600 rounded ring-1 ring-neutral-800 '>
                                Learn more
                            </Button>
                        </div>

                        <div className="w-full self-end bg-gray-100 p-4 text-center">
                            {/* <p>Next Election: November 5, 2024</p> */}
                            <div className="flex justify-center space-x-2">
                                <a href="https://www.facebook.com/scottdwiener/" className="text-blue-600 hover:text-blue-800">Facebook</a>
                                <a href="https://twitter.com/Scott_Wiener" className="text-blue-600 hover:text-blue-800">Twitter</a>
                                <a href="https://www.instagram.com/scott_wiener/?hl=en" className="text-blue-600 hover:text-blue-800">Instagram</a>


                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between bg-white shadow-lg rounded-lg overflow-hidden w-80">
                        <div className='w-full grid '>
                            <div className="bg-red-600 p-4 text-white text-center">
                                <img className="w-24 h-24 rounded-full mx-auto border-4 border-white" src="https://pbs.twimg.com/profile_images/1718796352887664640/VCHC30R7_400x400.jpg" alt="Yvette Corkrean" />
                                <h2 className="text-xl font-semibold mt-2">Yvette Corkrean</h2>
                                <p className="text-sm">Republican Party</p>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold border-b pb-2">California State Senate District 11</h3>
                                <div className="mt-2">
                                    <p><strong>Birthplace:</strong> Vallejo, Calif.</p>
                                    <p><strong>Profession:</strong> Registered Nurse</p>
                                </div>

                                <div className="mt-4">
                                    <h4 className="font-semibold">Education</h4>
                                    <p>Bachelor's from California State University, Fullerton, 2003</p>
                                </div>

                            </div>
                            <Button onClick={() => setIt && setIt("Search")} className='mb-4 mx-auto w-60 bg-red-500 rounded ring-1 ring-neutral-800 '>
                                Learn more
                            </Button>
                        </div>
                        <div className="bg-gray-100 p-4 text-center">
                            {/* <p>Next Election: November 5, 2024</p> */}
                            <div className="flex justify-center space-x-2">
                                <a href="https://www.facebook.com/yvetteforsenate" className="text-red-600 hover:text-red-800">Facebook</a>
                                <a href="https://twitter.com/yvettecorkrean" className="text-red-600 hover:text-red-800">Twitter</a>
                                <a href="https://www.instagram.com/yvetteforsenate/" className="text-red-600 hover:text-red-800">Instagram</a>
                            </div>
                        </div>
                    </div>


                </div>



                {/* 
                <div className='max-w-sm react-tweet-theme class text-xs'>
                    <Tweet id="1683920951807971329" />
                </div> */}
            </div>



        </div >

    )
}