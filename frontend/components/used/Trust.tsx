import { Icons } from "@/components/ui/icons";



export default function TrustPage() {
    const FeatureExplanation = ({ icon, index, text, description }: { icon: JSX.Element, index: number, text: string, description: string }) => {
        return (
            <a
                className={`group js-carousel-item  w-[95%] flex-1 px-6 py-4 snap-center snap-always relative focus:outline-none transition  bg-neutral-100  hover:bg-[#04050C]/5 rounded-[20px] min-w-[312px] md:min-w-0`}
                href="/"

                target="_blank"
            >
                <p className="m text-large-20 font-semibold">
                    {index}.

                </p>

                <h4 className={`   w- mt-2 mb-2 text-large-20 font-bold leading-[120%]`}>
                    {text}
                </h4>

                <p className="mb-10">

                    {description}
                </p>

                <div className={` text-neutral-800 absolute left-4 bottom-2 flex items-center gap-2`}>
                    {/* <Icons.avatar className="lazyloaded h-[40px] w-[40px]" /> */}
                    {icon}


                </div>
                <div className={`absolute  transition-scale duration-300 hover:scale-[1.2]  right-4 bottom-4 rounded-full flex justify-center items-center bg-[#2F3546] h-[33px] w-[33px]`}>
                    <Icons.send className="text-neutral-300 h-[15px] w-[15px] m-auto" />
                </div>
            </a>
        )
    }


    return (
        <div id="process" className="bg-white pt-20 md:pt-40 pb-9 ">
            <section className="container mx-auto flex flex-col items-center max-w-[950px]">
                <h3
                    className="font-bold text-center text-[#04050C] text-[28px] md:text-[40px] lg:text-[44px] leading-[105%] aos-init aos-animate"
                    data-aos="fade-up"
                >
                    {/* - How we get our information
1. We sort elections by time, date, and importance
2. We gather all verifiable government information on candidates- and present it in an intuitive way 
3. We analyze recent remarks, votes, speeches, and posts by the politicians you vote for */}
                    How we get our
                    {" "}
                    <span className="hidden md:inline-block">
                        {" "}voting
                    </span>
                    <br />
                    information
                </h3>
                <p
                    className="mt-3 text-center md:text-large-18 max-w-[459px] text-[#363D4E] aos-init aos-animate"
                    data-aos="fade-up"
                >
                    We are extremely careful about vetting the information we gather and ensuring its utmost objectivity and usefulness.  The following is our process.
                </p>
                <div className="mt-7 md:mz-8 lg:mt-16 text-[#363D4E] w-screen md:w-auto">
                    <div
                        className="js-carousel flex gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbars"
                        style={{ scrollSnapTypeX: "mandatory" }}
                    >
                        <div className="md:hidden min-w-[calc(50vw-156px-8px)]" />
                        <FeatureExplanation icon={<Icons.sorting className="lazyloaded h-[40px] w-[40px] transition-all duration-300 group-hover:text-sky-500" />} index={1} text="Sort" description="We sort elections by time, date, and importance." />
                        <FeatureExplanation icon={<Icons.gathering className="lazyloaded h-[40px] w-[40px] transition-all duration-300 group-hover:text-sky-500" />} index={2} text="Gather" description="We gather all verifiable government information." />
                        <FeatureExplanation icon={<Icons.analysis className="lazyloaded h-[40px] w-[40px] transition-all duration-300 group-hover:text-sky-500" />} index={3} text="Analyze" description="We analyze recent remarks, votes, speeches, and posts" />

                    </div>

                </div>


            </section>

        </div>
    )
}