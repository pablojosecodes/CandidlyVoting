export default function DefaultCard({ askDefault }: { askDefault: (val: string) => void }) {
    const questions: string[] = [
        "Which politicians are you currently tracking?",
        "What can I do?",
        "Who is running District 11?",
        "How do you gather information?",
        "What is Scott's opinion on psyhedelics?",
        "Who is Yvette?"
    ];

    return (
        <>



            <div className="mt-16 px-2 pb-8 w-full sm:max-w-2xl overflow-y-auto  relative">


                <div className="mt-2 mx-auto w-full">
                    <div className="rounded-lg ring-1 ring-neutral-300 p-8 ">
                        <h1 className="mb-2 text-lg font-semibold text-gray-12">
                            Say {"\""}hi{"\""} to Candidly!
                        </h1>
                        <p className="mb-2 leading-normal text-muted-foreground text-gray-11" />
                        <p className="leading-normal text-muted-foreground text-gray-11">
                            Integrated with Claude for accuracy, we aim to be the trusted source of information on politicians that American voters deserve. Learn about your local elections, query our platform, and stay informed.

                            <br />
                            <br />
                            Ask it a question below, or try one of these examples:
                        </p>
                        <div className="mt-4 flex items-center gap-2 w-full flex-wrap">
                            {questions.map((question, ind) => {
                                return (
                                    <button key={ind} onClick={() => askDefault(question)} className="h-auto text-left border bg-sky-300/20 hover:bg-sky-4 ring-1 ring-sky-400 hover:border-sky-8 text-sky-12 py-2 px-4 text-base rounded-lg max-w[128px] disabled:opacity-30">
                                        {question}
                                    </button>
                                )
                            })}

                            {/* <button className="h-auto text-left border bg-sky-300/20 hover:bg-sky-4 ring-1 ring-sky-400 hover:border-sky-8 text-sky-12 py-2 px-4 text-base rounded-lg max-w[128px] disabled:opacity-30">
                            How do I write a good PRD?
                        </button>
                        <button className="h-auto text-left border bg-sky-300/20 hover:bg-sky-4 ring-1 ring-sky-400 hover:border-sky-8 text-sky-12 py-2 px-4 text-base rounded-lg max-w[128px] disabled:opacity-30">
                            How do I get better at strategy?
                        </button>
                        <button className="h-auto text-left border bg-sky-300/20 hover:bg-sky-4 ring-1 ring-sky-400 hover:border-sky-8 text-sky-12 py-2 px-4 text-base rounded-lg max-w[128px] disabled:opacity-30">
                            How do I improve my conversion?
                        </button>
                        <button className="h-auto text-left border bg-sky-300/20 hover:bg-sky-4 ring-1 ring-sky-400 hover:border-sky-8 text-sky-12 py-2 px-4 text-base rounded-lg max-w[128px] disabled:opacity-30">
                            How do I get better at influence?
                        </button>
                        <button className="h-auto text-left border bg-sky-300/20 hover:bg-sky-4 ring-1 ring-sky-400 hover:border-sky-8 text-sky-12 py-2 px-4 text-base rounded-lg max-w[128px] disabled:opacity-30">
                            How do I run a great 1:1 meeting?
                        </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}