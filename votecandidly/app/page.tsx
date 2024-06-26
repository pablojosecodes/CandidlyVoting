'use client'
import { useState } from 'react';





export type rotate = "left" | "right" | null

import Header from '@/components/Header';



import Search from './Search';
import { IndexContext } from '@/hooks/homeContext';




export type IPage = "Info" | "Search" | "Feedback" | "Pricing"
import { useSearchParams } from 'next/navigation'

import Info from './Info';


export default function ContentPage() {



    const searchParams = useSearchParams()

    const search = searchParams.get('in') as IPage | null






    const viable = ["Info", "Search", "Feedback", "Pricing"]


    const [index, setIndex] = useState<IPage>((search && viable.indexOf(search) != -1) ? search : "Info")



    return (
        <IndexContext.Provider value={index}>
            <div className="flex flex-col     w-full">

                <Header setIndex={setIndex} auth />
                <div className=' bg-black  flex flex-col  justify-between '>
                    <div className="flex bg-white  justify-center    w-full">
                        <div className={` max-w-2xl pt-2 w-[90%] grid gap-y-3`}>
                            {index == "Info" && <Info setIt={setIndex} />}
                            {index == "Search" && <Search />}
                        </div>
                    </div>

                </div>
            </div>
        </IndexContext.Provider>

    )
}