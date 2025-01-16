import {Button} from './button.tsx';
import {FireIcon} from '../assets/fire-icon.tsx';
import {MenuIcon} from '../assets/menu-icon.tsx';


export default function Preview() {
    return (
        <div
            className="m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex items-center justify-between py-4">
            <div className="flex items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0">
                <Button variant="text" size="small" iconOnly aria-label="Menu" className="lg:hidden">
                    <MenuIcon className="stroke-inherit"/>
                </Button>
            </div>
            <div className="hidden gap-10 md:flex">
                <div className="hidden gap-8 lg:flex">
                    <Button variant="text-default" href="/about">
                        About
                    </Button>
                    <Button variant="text-default" href="/contact">
                        FAQ
                    </Button>
                    <Button variant="text-default" href="/contact">
                        Contact
                    </Button>
                </div>
                <Button endAdornment={<FireIcon className="size-6 stroke-white"/>}>
                    Apply Now
                </Button>
            </div>
        </div>
    );
}