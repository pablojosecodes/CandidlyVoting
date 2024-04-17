type IC = {
    children: JSX.Element
}
export default function Container({ children }: IC) {
    return (

        <div className="w-full    h-screen flex flex-col items-center mx-auto bg-gray-1">
            <div className="h-[calc(100dvh-200px)] pb-8 w-full   overflow-y-auto background-gray-1 relative">
                <div className=" w-full" />
                {/* <section className="pt-[20px] flex w-full mb-2 sticky top-[22px] bg-white/30 backdrop-blur-sm items-end">
                    <div className="ml-auto">
                        <button
                            type="button"
                            id="radix-:R256rja:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                            className="rt-reset-button rt-reset-a rt-BaseButton rt-Button rt-r-size-2 rt-variant-soft"
                        >
                            Sources 
                        </button>
                    </div>
                </section> */}
                <div className="mt-[24px]">

                    <div className=" grid gap-y-4 [overflow-anchor:none]">
                        {children}
                    </div>
                </div>
            </div>

            <div
                style={{
                    position: "fixed",
                    zIndex: 9999,
                    top: 16,
                    left: 16,
                    right: 16,
                    bottom: 16,
                    pointerEvents: "none"
                }}
            />
            <div
                style={{
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: "-1px",
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: 0,
                    display: "none"
                }}
            />
        </div>)

}