import { Button, Divider } from "@mantine/core"
import { IconBrandInstagram, IconBrandLinkedinFilled, IconBrandWhatsapp, IconBrandX, IconMail, IconMapPin, IconMessage, IconUserPlus } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { ExpCard } from "./ExpCard"



export const Profile = () => {
    return (
        <div className="w-full md:w-2/3 ">
            <div className="relative">
                <img className="h-36 w-full rounded-t-2xl object-cover" src="/images/bg.png" alt="bgimg" />
                <img className="h-32 w-32 sm:h-40 sm:w-40 rounded-full absolute -bottom-1/3 left-6 sm:left-8 border-4 sm:border-8 border-mine-shaft-950" src="/images/AvatarImg/avatar.png" alt="profilepic" />
                <div className="flex gap-2 absolute right-3 sm:right-7 bottom-3">
                    <Link to="/talent-profile">
                        <Button leftSection={<IconUserPlus size={15} className="text-mine-shaft-950" />} variant="filled" size="xs" color="mine-shaft.2">
                            <span className="text-mine-shaft-950 text-xs">Follow</span>
                        </Button>
                    </Link>
                    <Button leftSection={<IconMessage size={18} />} variant="filled" size="xs" color="bright-sun.5">Message</Button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="px-2 mt-3 sm:mt-2 h-auto sm:h-[22rem] sm:w-[18rem] bg-mine-shaft-900">
                    <div className="py-8 sm:py-12 flex flex-col items-center gap-2">
                        <div className="text-xl sm:text-2xl text-mine-shaft-100 font-semibold">Sachin Patel</div>
                        <div className="text-sm sm:text-md text-mine-shaft-200">Web Developer</div>
                        <div className="text-xs flex items-center text-mine-shaft-300">
                            <IconMapPin size={16} /> New York, United States
                        </div>
                        <div className="text-xs flex items-center gap-1 text-mine-shaft-300">
                            <IconBrandWhatsapp size={16} color="green" />: <span className="border-b-2 border-mine-shaft-400 ">+91 895 448 5225</span>
                        </div>
                        <div className="text-xs flex items-center gap-1 text-mine-shaft-300">
                            <IconMail size={16} />: <span>sachinpatel@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <IconBrandLinkedinFilled className="bg-white text-blue-600 rounded-md  hover:scale-125 transition-transform duration-300" size={20} />
                        <IconBrandInstagram className="bg-pink-500 text-bright-sun-100 rounded-md  hover:scale-125 transition-transform duration-300" size={20} />
                        <IconBrandX className="bg-mine-shaft-600 text-mine-shaft-100 rounded-md  hover:scale-125 transition-transform duration-300" size={20} />
                    </div>
                </div>
                <div className="w-full bg-mine-shaft-800 mt-2 p-5 sm:p-5">
                    <div className="  text-xl sm:text-2xl text-bright-sun-400 font-semibold">About</div>
                    <div className="  text-mine-shaft-200 text-xs sm:text-md mb-2">
                        I am William, a Blockchain Developer at IBM. I design decentralized applications and work on smart contract development. My goal is to create secure and transparent blockchain-based Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates iste excepturi aperiam laboriosam vero nemo nisi vel obcaecati dolore quis inventore, adipisci necessitatibus quos delectus cumque amet enim odit. Amet!
                    </div>
                    <Divider size="sm" color="mine-shaft.4"  />
                    <div className="flex flex-col gap-2 mt-3">
                        <div className="text-lg font-medium text-bright-turquoise-400">TechStack
                            <div className="mt-1 flex">
                                <div className="bg-bright-sun-200 bg-opacity-30 px-1 text-sm rounded-sm text-bright-sun-400">React</div>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-lg font-medium text-bright-turquoise-400">Work</h3>
                            <ExpCard />
                        </div>
                        <div className="">
                            <div className="text-md text-bright-turquoise-400">Education</div>
                            <div className="text-xs text-mine-shaft-200">Graduate from Swami vivekanand college of engineering</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
