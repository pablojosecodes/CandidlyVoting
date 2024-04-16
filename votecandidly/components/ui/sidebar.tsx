import { cn } from "@/utils/utils"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from './icons';
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type Setting = (typeof setsettings)[number]

export const setsettings = [
    "Twitter", "Instagram", "Github"
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    toggle: () => void,
    value?: string,
    toggled: boolean
}



export function Sidebar({ toggle, className, value, toggled }: SidebarProps) {

    type SocialKeys = "Instagram" | "Twitter" | "Github"





    const pathname = usePathname()
    const path = pathname.split("/")[1]
    return (
        <div className={cn("relative h-full", className)}>

            <Button className={`hover:scale-[1.3] transition-all duration-300 z-[10000] hidden md:block cursor-pointer absolute top-1/2 !bg-transparent right-0  h-4 w-4 m-0 p-0`} onClick={() => toggle()}>
                <Icons.tab className={`  ${!toggled ? "rotate-180" : " "}  text-white bg-none h-full w-full`} />
            </Button>

            <div className="space-y-4 py-16">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 w-full flex justify-between text-lg font-semibold tracking-tight">
                        <p className="my-auto">
                            Primary
                        </p>
                    </h2>
                    <div className="space-y-1">

                        {/* Primary (home, browse, extra1) Settings - library (Billing, User, Environments), LInks - setttings */}

                        <Button variant={path == "home" ? "secondary" : "ghost"} className="w-full justify-start">
                            <Link className="w-full flex content-center items-center" href="/">
                                <Icons.home className="mr-2 h-4 w-4" />
                                Home
                            </Link>
                        </Button>
                        <Button variant={"ghost"} className="w-full justify-start">
                            <Link target="_blank" className="w-full flex content-center items-center" href="https://oncitrus.com">
                                <Icons.page className="mr-2 h-4 w-4" />
                                Page
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Settings
                    </h2>
                    <div className="space-y-1">
                        <Button variant={path == "billing" ? "secondary" : "ghost"} className="w-full justify-start">
                            <Link className="w-full flex content-center items-center" href="/billing">

                                <Icons.sentiment className="mr-2 h-4 w-4" />

                                Billing
                            </Link>
                        </Button>
                        <Button variant={path == "account" ? "secondary" : "ghost"} className="w-full justify-start">
                            <Link className="w-full flex content-center items-center" href="/account">

                                <Icons.user className="mr-2 h-4 w-4" />
                                Account
                            </Link>

                        </Button>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                        Links
                    </h2>
                    <ScrollArea className="h-[300px] px-1">
                        <div className="space-y-1 p-2">
                            {setsettings.map((setting, i) => (

                                <Button
                                    key={`${setting}-${i}`}
                                    variant="ghost"
                                    className="w-full justify-start font-normal"
                                >
                                    <Link className="w-full flex content-center items-center" href={setting == "Instagram" ? "https://instagram.com/thepablohansen" : setting == "Twitter" ? "https://twitter.com/thepablohansen" : setting == "Github" ? "https://github.com/pablojosecodes" : ""}>
                                        {setting == "Instagram" && <Icons.instagram className="mr-2 h-4 w-4" />}
                                        {setting == "Twitter" && <Icons.twitter className="mr-2 h-4 w-4" />}
                                        {setting == "Github" && <Icons.gitHub className="mr-2 h-4 w-4" />}
                                        {setting}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}