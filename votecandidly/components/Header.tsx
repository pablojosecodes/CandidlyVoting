import { Dispatch, SetStateAction, useContext } from "react"

import { Icons } from "@/components/ui/icons";
import { useClerk, useUser } from "@clerk/nextjs";
import { IndexContext } from "@/hooks/homeContext";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { IPage } from "@/app/page";



type IOH = {

    auth?: boolean
    loggedOut?: boolean
    authPopup?: () => void
    setIndex?: Dispatch<SetStateAction<IPage>>
    index?: number
    magify?: () => void
    magified?: boolean


}
export default function Header({ magified, magify, auth, index, setIndex, loggedOut, authPopup }: IOH) {
    const { signOut } = useClerk();


    const Indicator = ({ active }: { active: boolean }) => {
        return (
            <div className={`col-span-1 w-full h-1.5 ${active ? "bg-white" : "bg-neutral-500 animtate-pulse"}`}>
            </div>

        )

    }
    const contextIndex = useContext(IndexContext)

    const { user } = useUser()

    return (
        <div className="pb-20">
            {
                !auth ?
                    <div className="fixed z-[100] bg-neutral-950/50 backdrop-blur-lg top-0 px-1 flex justify-between w-full">
                        <img onClick={() => window.open("/", "_self")} className="cursor-pointer  h-10 w-10" src="/logo.png" />


                        {/* <button onClick={() => signOut()} >
                <Icons.userIcon className="h-6 w-6 my-auto text-white" />
            </button> */}
                    </div >
                    :
                    <div className="fixed z-[101] py-2 helvetica bg-neutral-100/70 fixed before:absolute before:-z-10 before:inset-0 before:backdrop-blur-2xl  top-0 px-6  md:px-4  flex justify-between w-full">
                        <img className="cursor-pointer   my-auto h-5 w-5 md:h-10 md:w-10" src="/logo.png" />





                        <div className={`flex   text-base pl-4 md:pl-0 gap-x-4 md:gap-x-6 font-sans w-full max-w-2xl w-full       overflow-hidden`}>

                            <button onClick={() => {
                                if (setIndex) {
                                    if (window.location.pathname != "/") {
                                        window.open("/?in=Info", "_self")
                                    }
                                    setIndex("Info")
                                }
                                else {
                                    window.open("/", "_self")
                                }
                            }

                            } className={` ${contextIndex == "Info" ? "text-neutral-800 " : "hover:text-sky-700"} flex items-center  md:gap-x-2 transition duration-300 ease-in-out  py-3 md:py-2 /50   flex text-center content-center  justify-center col-span-1  border-r-neutral-600  cursor-pointer`}>
                                <Icons.politics className="w-4 h-4 md:h-6 md:w-6 block " />
                                <span className="hidden md:block">
                                    Politicians
                                </span>
                            </button>
                            {loggedOut ?


                                <button className='relative   transition duration-500 ease-in-out  py-3 md:py-2     flex text-center content-center justify-center col-span-1 - border-r-neutral-600 ' onClick={() => window.open("/sign-in")}>
                                    sign in
                                </button>
                                :
                                <button className={` ${contextIndex == "Search" ? "text-neutral-800 " : "hover:text-sky-700"}  my-auto relative   flex items-center  md:gap-x-2 transition duration-500 ease-in-out  py-3 md:py-2 transition duration-300 ease-in-out     flex text-center content-center justify-center col-span-1  border-r-neutral-600 `}
                                    onClick={() => {
                                        if (setIndex) {
                                            if (window.location.pathname != "/") {
                                                window.open("/?in=Search", "_self")
                                            }
                                            setIndex("Search")
                                        }
                                        else {
                                            window.open("/", "_self")
                                        }
                                    }

                                    }>
                                    <Icons.cloud className="w-4 h-4 md:h-6 md:w-6 block " />
                                    <span className="my-auto hidden md:block">
                                        Understand
                                    </span>
                                </button>

                            }



                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="my-auto border-none border-0 ring-0 ring-none cursor-pointer" asChild>
                                {user?.imageUrl ? <img onClick={() => window.open("https://withsoma.com", "_blank")} className=" border-0  !border-none ring-none ring-0 overflow-hidden rounded my-auto h-8 w-8"
                                    src={user?.imageUrl}
                                /> :
                                    <div className="h-8 w-8 rounded bg-neutral-800  ">
                                    </div>
                                }
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className=" z-[1001] border-none border-0 bg-neutral-900 p-0 w">


                                <Button className="w-full bg-neutral-800 text-neutral-300" onClick={() => signOut()}>
                                    Log Out
                                </Button>


                            </DropdownMenuContent>
                        </DropdownMenu>





                    </div >

            }
        </div>

    )
}