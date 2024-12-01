import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export const DreamJob = () => {
    return (
        <div className="flex items-center px-16">

            <div className="flex flex-col w-[45%]">
                <div className="text-7xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400" >Find your <span>Dream</span> <span>Jobs</span> with us </div>

                <div className="text-lg text-mine-shaft-200">Explore 1000+ jobs get jobs and wxplore the different MNC at your nearest location </div>

                <div className="flex gap-3 mt-5">
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Title" placeholder="Software Engineer" />
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Type" placeholder="Full Time" />

                    <div className="bg-bright-sun-400 rounded-lg text-mine-shaft-100 h-full w-20 p-2 flex items-center justify-center hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className="h-[85%] w-[85%]" />
                    </div>
                </div>
            </div>

            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img className="ml-20" src="/images/header/boy.png" alt="boyimg" />
                    <div className="w-fit absolute -right-24 top-[70%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md ">
                        <div className="text-center mb-1 text-sm text-mine-shaft-100">10K+ got Jobs</div>
                        <Avatar.Group>
                            <Avatar src="/images/header/avatar-7.png" />
                            <Avatar src="/images/header/avatar-8.png" />
                            <Avatar src="/images/header/avatar.png" />
                            <Avatar>+5</Avatar>
                        </Avatar.Group>
                    </div>

                    <div className="w-fit absolute -left-15 top-[36%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                                <img src="/images/header/google.png" alt="google" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div className=" text-xs text-mine-shaft-200">New York</div>
                            </div>
                        </div>
                        <div className="flex gap-2 text-mine-shaft-200 text-xs justify-around">
                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
