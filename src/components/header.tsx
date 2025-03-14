import { HeaderLogo } from "@/components/header-logo";
import { Navigation } from "@/components/navigation";

export const Header = () => {
    return (
        <header className="px-4 py-6 lg:px-14 pb-1">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    );
};