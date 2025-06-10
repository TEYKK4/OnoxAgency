import {Button} from './button.tsx';
import {FacebookCircleIcon} from "../assets/facebook-circle-icon.tsx"
import {InstagramIcon} from "../assets/instagram-icon.tsx"
import {Divider} from "./divider.tsx";

function AzColumn() {
    return (
        <div className="flex flex-col">
            <p className="mb-4 text-sm font-semibold leading-tight text-blue-950">
                Azerbaijan
            </p>
            <div className="flex flex-col gap-4">
                <div className="text-sm leading-tight text-slate-500">
                    +48 999999999
                </div>
            </div>
        </div>
    );
}

function BlColumn() {
    return (
        <div className="flex flex-col">
            <p className="mb-4 text-sm font-semibold leading-tight text-blue-950">
                Belarus
            </p>
            <div className="flex flex-col gap-4">
                <div className="text-sm leading-tight text-slate-500">
                    +48 999999999
                </div>
            </div>
        </div>
    );
}

function UkrColumn() {
    return (
        <div className="flex flex-col">
            <p className="mb-4 text-sm font-semibold leading-tight text-blue-950">
                Ukraine
            </p>
            <div className="flex flex-col gap-4">
                <div className="text-sm leading-tight text-slate-500">
                    +48 999999999
                </div>
            </div>
        </div>
    );
}

function UzColumn() {
    return (
        <div className="flex flex-col">
            <p className="mb-4 text-sm font-semibold leading-tight text-blue-950">
                Uzbekistan
            </p>
            <div className="flex flex-col gap-4">
                <div className="text-sm leading-tight text-slate-500">
                    +48 999999999
                </div>
            </div>
        </div>
    );
}

function KyColumn() {
    return (
        <div className="flex flex-col">
            <p className="mb-4 text-sm font-semibold leading-tight text-blue-950">
                Kyrgyzstan
            </p>
            <div className="flex flex-col gap-4">
                <div className="text-sm leading-tight text-slate-500">
                    +48 999999999
                </div>
            </div>
        </div>
    );
}

function Copyright() {
    return (
        <p className="text-xs text-slate-500">
            © ONOX 2025
        </p>
    );
}

export default function Preview() {
    return (
        <div className="flex flex-col gap-1 py-6 max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col">
                <p className="mb-4 text-2xl font-semibold leading-tight text-blue-950">
                    Contact Us
                </p>
            </div>
            <div className="mb-6 flex w-full flex-col gap-10 lg:mb-16 lg:flex-row lg:gap-20">
                <div
                    className="grid grow grid-cols-1 gap-10 text-center md:grid-cols-2 md:justify-items-center lg:grid-cols-5 lg:text-start 2xl:grow-0 2xl:gap-32"
                >
                    <AzColumn/>
                    <BlColumn/>
                    <UkrColumn/>
                    <UzColumn/>
                    <KyColumn/>
                </div>
            </div>
            <Divider direction="horizontal"/>
            <div
                className="flex w-full flex-col-reverse items-center gap-6 text-center lg:flex-row lg:justify-between lg:gap-0 lg:text-left"
            >
                <Copyright/>
                <div className="flex gap-8">
                    {/*<Button variant="text" size="small" iconOnly aria-label="facebook" href="https://www.facebook.com">*/}
                    {/*    <FacebookCircleIcon/>*/}
                    {/*</Button>*/}
                    <Button variant="text" size="small" iconOnly aria-label="instagram"
                            href="https://www.instagram.com/onoxazerbaijan/">
                        <InstagramIcon/>
                    </Button>
                </div>
            </div>
        </div>
    );
}