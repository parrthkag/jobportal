import { Avatar, Indicator } from "@mantine/core";

import { IconBell, IconSettings, IconYinYang } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

export const Header = () => {
    return (
        <div className="w-full h-20 bg-mine-shaft-950 px-4 sm:px-6 text-white flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex gap-2 items-center text-bright-sun-400">
                <IconYinYang className="h-10 w-10 sm:h-12 sm:w-12" stroke={1.5} />
                <div className="text-2xl sm:text-3xl font-semibold">PathFinder</div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex">
                <NavLinks />
            </div>

            {/* User Section */}
            <div className="flex gap-3 sm:gap-5 items-center">
                <div className="hidden sm:flex gap-2 items-center">
                    <div className="text-sm sm:text-base">Name</div>
                    <Avatar src="/images/header/avatar.png" alt="it's me" />
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <IconSettings stroke={1.5} />
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full relative">
                    <Indicator color="bright-sun.4" offset={6} size={8} processing>
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>
            </div>
        </div>
    );
};
