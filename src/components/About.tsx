import {Avatar} from "./avatar.tsx"
import {AtomIcon} from "../assets/atom-icon.tsx"
import {BeeIcon} from "../assets/bee-icon.tsx"
import {ClubsIcon} from "../assets/clubs-icon.tsx"

function GuidanceCard() {
    return (
        <div className="flex max-w-xs flex-col gap-6 items-center">
            <Avatar icon={<AtomIcon className="size-6 stroke-inherit" />} elevated />
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center">
                <p className="text-xl font-semibold">
                    Personalized Guidance
                </p>
                <p className="text-base text-slate-500">
                    Get expert advice tailored to your dreams and goals. Our experienced team is here to make your study abroad journey stress-free.
                </p>
            </div>
        </div>
    );
}

function UniversityCard() {
    return (
        <div className="flex max-w-xs flex-col gap-6 items-center">
            <Avatar icon={<BeeIcon className="size-6 stroke-inherit" />} elevated />
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center">
                <p className="text-xl font-semibold">
                    Top Universities Worldwide
                </p>
                <p className="text-base text-slate-500">
                    Choose from the best educational institutions across the globe. We help you find the perfect fit for your academic aspirations.
                </p>
            </div>
        </div>
    );
}

function ProcessCard() {
    return (
        <div className="flex max-w-xs flex-col gap-6 items-center">
            <Avatar icon={<ClubsIcon className="size-6 stroke-inherit" />} elevated />
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center">
                <p className="text-xl font-semibold">
                    Hassle-Free Process
                </p>
                <p className="text-base text-slate-500">
                    From application to visa assistance, we handle all the details. Focus on your future while we take care of the rest.
                </p>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <section
            className="flex flex-col items-center gap-y-12 py-12 2xl:py-16 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32"
        >
            <div
                className="mb-0 flex max-w-[260px] flex-col items-center justify-center gap-6 text-center md:col-span-3 md:mb-4 md:max-w-full"
            >
                <p className="text-sm font-semibold uppercase text-slate-500">
                    ONOX
                </p>
                <h3 className="max-w-[340px] text-4xl font-semibold tracking-tight md:text-5xl lg:max-w-none">
                    Study Abroad. It's simple.
                </h3>
            </div>
            <div
                className="grid w-full grid-flow-row justify-items-center gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-32"
            >
                <GuidanceCard/>
                <UniversityCard/>
                <ProcessCard/>
            </div>
        </section>
    );
};