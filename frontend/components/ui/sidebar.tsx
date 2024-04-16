import { cn } from "@/utils/utils"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from './icons';
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export type Setting = (typeof setsettings)[number]

export const setsettings = [
    "Twitter", "Instagram", "Github"
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    settings: Setting[],
    toggle: () => void,
    value?: string
}

export function Sidebar({ toggle, className, settings, value }: SidebarProps) {
    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-16">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 w-full flex justify-between text-lg font-semibold tracking-tight">
                        <p className="my-auto">
                            Primary
                        </p>
                        <Button className="m-0 p-0" onClick={() => toggle()}>
                            <Icons.tab className="text-white h-4 w-4" />
                        </Button>
                    </h2>
                    <div className="space-y-1">

                        {/* Primary (home, browse, extra1) Settings - library (Billing, User, Environments), LInks - setttings */}

                        <Button variant={!value ? "secondary" : "ghost"} className="w-full justify-start">

                            <Icons.home className="mr-2 h-4 w-4" />
                            <Link href="/dashboard/home">
                                Home
                            </Link>
                        </Button>
                        <Button variant={value == "New" ? "secondary" : "ghost"} className="w-full justify-start">
                            <Icons.feedback className="mr-2 h-4 w-4" />
                            New
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Icons.moderation className="mr-2 h-4 w-4" />
                            Extra1
                        </Button>
                    </div>
                </div>
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Settings
                    </h2>
                    <div className="space-y-1">
                        <Button variant={value == "Billing" ? "secondary" : "ghost"} className="w-full justify-start">
                            <Icons.sentiment className="mr-2 h-4 w-4" />
                            <Link href="/dashboard/billing">
                                Billing
                            </Link>
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Icons.user className="mr-2 h-4 w-4" />
                            User
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <Icons.health className="mr-2 h-4 w-4" />
                            Environments
                        </Button>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                        Links
                    </h2>
                    <ScrollArea className="h-[300px] px-1">
                        <div className="space-y-1 p-2">
                            {settings?.map((setting, i) => (

                                <Button
                                    key={`${setting}-${i}`}
                                    variant="ghost"
                                    className="w-full justify-start font-normal"
                                >
                                    {setting == "Instagram" && <InstagramLogoIcon className="mr-2 h-4 w-4" />}
                                    {setting == "Twitter" && <TwitterLogoIcon className="mr-2 h-4 w-4" />}
                                    {setting == "Github" && <Icons.gitHub className="mr-2 h-4 w-4" />}
                                    {setting}
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}