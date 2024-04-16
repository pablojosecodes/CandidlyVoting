import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: 'Candidly',
  description: 'Get real voting information.',


}
export default async function RootLayout({ children }: any) {


  return (
    <html lang="en">

      <body className="bg-white overscroll-none w-full relative  min-h-screen flex flex-col">

            <Analytics />
            <main className=" text-neutral-50  relative main overflow-x-hidden">

              {children}
            </main>
            <Toaster />

      </body>

    </html >
  );
}
export const revalidate = 0;
