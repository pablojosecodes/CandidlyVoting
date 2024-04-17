import "./globals.css";


import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider, SignUp } from '@clerk/nextjs';
import { SettingsProvider } from "@/utils/context/indexContext";
import getCurrentUser from "@/utils/db/getCurrentUser";
import { ISettings } from "@/types";

import { Analytics } from "@vercel/analytics/react"


import { TooltipProvider } from "@/components/ui/tooltip";

import { users } from "@prisma/client";
export const metadata = {
  title: 'Candidly',
  description: 'vote well.',
}
export default async function RootLayout({ children }: any) {


  const user: users | null = await getCurrentUser()
  console.log(user)

  const settings: ISettings = {
    page: -1,
    index: 0,
    id: "",
    user: user as users
    // stripe: stripe!
  };


  return (


    <html className="dark" lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>

      <body>

        <SettingsProvider initialSettings={settings}>
          <Analytics />
          <ClerkProvider appearance={{
            signIn: {
              variables: {
                colorPrimary: "#0ea5e9",
                colorText: "#171717",
                colorBackground: "#f5f5f5",
                colorAlphaShade: "#171717"
              },

            },
            signUp: {
              variables: {
                colorPrimary: "#0ea5e9",
                colorText: "#171717",
                colorBackground: "#f5f5f5",
                colorAlphaShade: "#171717"
              },

            },
          }}>




            <main className=" ! overscroll-none w-full relative  min-h-screen text-neutral-900  w-screen overscroll-contain h-screen bg-white main  overflow-x-hidden">
              <TooltipProvider>
                {children}
              </TooltipProvider>
            </main>
            <Toaster />

            {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}

            {/* <div className="absolute spotlight left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_300px,_400px_400px,#fbfbfb36_0%,#000_100%)]"></div> */}

            {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div> */}

            {/* <div className="absolute spotlight left-0 right-0 bottom-[30%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_at_50%_300px,_400px_400px,#fbfbfb36_0%,#000_100%)]"></div> */}

            <Toaster />
            {/* </ThemeProvider> */}
          </ClerkProvider>
        </SettingsProvider>



        {/* </ThemeProviders> */}
      </body>
    </html >
  );
}
export const revalidate = 0;
