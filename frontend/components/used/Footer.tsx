'use client'
import { usePathname } from "next/navigation"

export default function Footer() {
	const pathname = usePathname()

	return (
		<div className={`mt-24 bg-[#F3F4F7]  ${pathname.includes("dashboard") && "hidden"}`}>
			<nav className=" text-sm border-t grid grid-cols-1 border-neutral-300/10 text-[#363D4E] dark:text-neutral-200">
				<div className="w-full mx-auto px-5 md:px-10 pt-8 lg:pt-14 pb-4 md:pb-8 md:flex max-w-5xl">
					<div className="flex-2 lg:grow flex gap-5">
						<div className="flex-1 lg:flex-2 flex flex-col lg:flex-row">
							<div className="lg:mr-16 flex-1">
								<div className="mb-16 hidden md:block">

									<div className="font-semibold text-black dark:text-white">
										Candidly
									</div>
									<a className="inline-block -mx-1 px-1 mt-3" href="/#about">
										About
									</a>
									<br />
									<a className="inline-block -mx-1 px-1 mt-3" href="/#demo">
										Demo
									</a>
									<br />
									<a className="inline-block -mx-1 px-1 mt-3" href="/#process">
										Process
									</a>
								</div>

							</div>
							<div className="flex-1">
								<div className="mb-16 hidden lg:block">
									<div className="font-semibold text-black dark:text-white">
										Resources
									</div>
									<a
										className="inline-block -mx-1 px-1 mt-3 whitespace-nowrap"
										href="mailto:pablosfsanchez@gmail.com"
									>
										Support
									</a>
									<br />
									{/* <a
										className="inline-block -mx-1 px-1 mt-3"
										href="uptime"
									>
										Uptime
									</a> */}
								</div>
								<div className="mb-16 lg:hidden">
									<div className="font-semibold text-black dark:text-white">
										Company
									</div>
									<a className="inline-block -mx-1 px-1 mt-3" href="https://go.votecandidly.com/sign-in">
										Sign in
									</a>
									<br className="lg:hidden" />
									<a
										className="inline-block -mx-1 px-1 mt-3"
										href="https://go.votecandidly.com/sign-up"
									>
										Sign Up
									</a>
								</div>

							</div>
						</div>
						<div className="lg:ml-12 flex-1 flex flex-col">
							<div className="mb-16 hidden lg:flex flex-col items-start">
								<div className="font-semibold text-black dark:text-white">
									Company
								</div>
								<a className="inline-block -mx-1 px-1 mt-3" href="https://go.votecandidly.com/sign-in">
									Sign in
								</a>
								<br className="lg:hidden" />
								<a
									className="inline-block -mx-1 px-1 mt-3"
									href="https://go.votecandidly.com/sign-up">

									Sign up
								</a>
							</div>
							<div className="mb-16 lg:hidden">
								<div className="font-semibold text-black dark:text-white">
									Resources
								</div>
								<a
									className="inline-block -mx-1 px-1 mt-3 whitespace-nowrap"
									href="mailto:pablosfsanchez@gmail.com"
								>
									Support
								</a>
								<br />
								{/* <a
									className="inline-block -mx-1 px-1 mt-3"
									href="https://betterstack.com/docs/uptime"
								>
									Uptime
								</a> */}
							</div>
							{/* <div className="flex flex-col items-start">
								<div className="font-semibold text-black dark:text-white">
									Compare
								</div>
								<a
									className="inline-block -mx-1 px-1 mt-3"
									href="/pingdom-alternative"
								>
									Pingdom
								</a>
								<a
									className="inline-block -mx-1 px-1 mt-3"
									href="/pagerduty-alternative"
								>
									Pagerduty
								</a>
								<a
									className="inline-block -mx-1 px-1 mt-3"
									href="/statuspage-io-alternative"
								>
									StatusPage.io
								</a>
								<a
									className="inline-block -mx-1 px-1 mt-3"
									href="/uptime-robot-alternative"
								>
									Uptime Robot
								</a>
								<a
									className="inline-block -mx-1 px-1 mt-3"
									href="/statuscake-alternative"
								>
									StatusCake
								</a>
								<a
									className="inline-block -mx-1 px-1 mt-3"
									href="/opsgenie-alternative"
								>
									Opsgenie
								</a>
								<a
									className="inline-block -mx-1 px-1 mt-3"
									href="/victorops-alternative"
								>
									VictorOps
								</a>
							</div> */}
						</div>
					</div>
					<div className="md:ml-12 flex-1 flex flex-col items-start grow max-w-[450px]">
						{/* <div className="font-semibold text-black dark:text-white">
							Recent blog posts
						</div> */}
						{/* <a
							className="inline-block -mx-1 px-1 mt-4"
							href="/"
						>
							What's so great about Reactive web applications?
						</a> */}


					</div>


				</div>
				<div className="grid grid-cols-5 w-full mx-auto px-5 md:px-10  pb-8  md:flex max-w-5xl">
					<div className="col-span-full flex items-center gap-4 sm:gap-6 md:col-span-10 md:place-content-end">
						<a
							className="transition hover:text-primary"
							target="_blank"
							rel="me nofollow noopener noreferrer"
							aria-label="X (formerly Twitter)"
							href="https://twitter.com/thepablohansen"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={18}
								height={16}
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
								/>
							</svg>
						</a>
						{/* h- */}
						<a
							className="transition hover:text-primary"
							target="_blank"
							rel="me nofollow noopener noreferrer"
							aria-label="GitHub"
							href="https://github.com/pablojosecodes"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={18}
								height={18}
								fill="none"
								viewBox="0 0 18 18"
							>
								<path
									fill="currentColor"
									d="M9 0C4.027 0 0 4.089 0 9.137 0 13.431 2.902 16.995 6.818 18a1.3 1.3 0 0 1-.068-.434v-1.554H5.625c-.607 0-1.17-.273-1.418-.776-.292-.549-.337-1.394-1.08-1.92-.225-.182-.045-.365.203-.343.472.137.854.458 1.214.937s.518.594 1.193.594c.315 0 .81-.023 1.26-.092.247-.64.675-1.21 1.193-1.485-3.015-.365-4.455-1.873-4.455-3.929 0-.891.382-1.736 1.012-2.467-.202-.709-.472-2.17.09-2.742 1.351 0 2.16.892 2.363 1.12a6.8 6.8 0 0 1 2.182-.366c.788 0 1.508.137 2.182.365.203-.228 1.013-1.119 2.363-1.119.54.549.292 2.033.067 2.742.63.708.99 1.576.99 2.467 0 2.056-1.417 3.564-4.41 3.884.833.433 1.419 1.667 1.419 2.58v2.082c0 .068-.023.136-.023.205C15.48 16.516 18 13.135 18 9.137 18 4.09 13.973 0 9 0"
								/>
							</svg>
						</a>
						<a
							className="transition hover:text-primary"
							target="_blank"
							rel="me nofollow noopener noreferrer"
							aria-label="LinkedIn"
							href="https://www.linkedin.com/in/pablo-hansen"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={18}
								height={18}
								fill="none"
								viewBox="0 0 18 18"
							>
								<path
									fill="currentColor"
									d="M0 1.29C0 .576.592 0 1.322 0h15.356C17.408 0 18 .577 18 1.29v15.42c0 .713-.592 1.29-1.322 1.29H1.322C.592 18 0 17.423 0 16.71zm5.56 13.778V6.94h-2.7v8.128zM4.21 5.83c.943 0 1.529-.623 1.529-1.404-.017-.798-.585-1.404-1.51-1.404S2.7 3.629 2.7 4.426c0 .78.586 1.404 1.493 1.404zm5.522 9.238v-4.54c0-.242.018-.485.09-.658.195-.485.64-.988 1.386-.988.978 0 1.368.745 1.368 1.838v4.348h2.701v-4.662c0-2.497-1.331-3.658-3.109-3.658-1.433 0-2.076.787-2.436 1.342v.028h-.018l.018-.028V6.94h-2.7c.034.763 0 8.128 0 8.128z"
								/>
							</svg>
						</a>
						<a
							className="transition hover:text-primary"
							target="_blank"
							rel="me nofollow noopener noreferrer"
							aria-label="Facebook"
							href="https://www.facebook.com/"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={18}
								height={18}
								fill="none"
								viewBox="0 0 18 18"
							>
								<path
									fill="currentColor"
									d="M18 9.055C18 4.054 13.97 0 9.001 0 4.03.001 0 4.054 0 9.056 0 13.575 3.291 17.321 7.593 18v-6.327H5.309V9.056h2.286V7.06c0-2.27 1.344-3.522 3.4-3.522.985 0 2.014.176 2.014.176v2.228h-1.135c-1.117 0-1.466.698-1.466 1.415v1.698h2.495l-.398 2.616h-2.098V18C14.71 17.319 18 13.574 18 9.055"
								/>
							</svg>
						</a>
						{/* <a
							className="transition hover:text-primary"
							target="_blank"
							rel="me nofollow noopener noreferrer"
							aria-label="Twitch"
							href="https://www.twitch.tv/thepablohansen"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={16}
								height={18}
								fill="none"
								viewBox="0 0 16 18"
							>
								<g fill="currentColor">
									<path d="M3.214 0 0 3.214v11.572h3.857V18l3.214-3.214h2.572L15.429 9V0zm10.929 8.357L11.57 10.93H9l-2.25 2.25v-2.25H3.857V1.286h10.286z" />
									<path d="M12.215 3.536h-1.286v3.857h1.286zM8.679 3.536H7.393v3.857H8.68z" />
								</g>
							</svg>
						</a> */}
						{/* <a
							className="transition hover:text-primary"
							target="_blank"
							rel="me nofollow noopener noreferrer"
							aria-label="YouTube"
							href="https://www.youtube.com/thepablohansen"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={19}
								height={14}
								fill="none"
								viewBox="0 0 19 14"
							>
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M16.44 1.087c.775.208 1.38.815 1.59 1.59.548 2.212.512 6.395.01 8.641a2.25 2.25 0 0 1-1.59 1.59c-2.188.542-11.993.475-14.055 0a2.25 2.25 0 0 1-1.59-1.59C.287 9.21.323 4.751.793 2.688a2.25 2.25 0 0 1 1.59-1.59C5.31.489 15.398.686 16.44 1.089M7.682 4.301l4.7 2.696-4.7 2.696z"
									clipRule="evenodd"
								/>
							</svg>
						</a> */}
						{/* <a
							target="_blank"
							className="transition hover:text-primary"
							rel="me nofollow noopener noreferrer"
							aria-label="TikTok"
							href="https://tiktok.com/@thepablohansen"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={16}
								height={18}
								fill="none"
								viewBox="0 0 16 18"
							>
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M11.663 0c.297 2.554 1.723 4.077 4.201 4.24v2.872c-1.436.14-2.694-.33-4.158-1.215v5.373c0 6.826-7.441 8.96-10.433 4.066-1.922-3.148-.745-8.672 5.422-8.894v3.03c-.47.076-.972.194-1.431.35-1.372.465-2.15 1.335-1.933 2.868.415 2.938 5.805 3.808 5.357-1.933V.005h2.975z"
									clipRule="evenodd"
								/>
							</svg>
						</a> */}
					</div>

				</div>
			</nav >

		</div >
	)
}