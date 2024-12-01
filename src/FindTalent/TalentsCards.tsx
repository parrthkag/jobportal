import { Button, Divider, Text } from "@mantine/core"
import { IconBrandInstagram, IconBrandLinkedinFilled, IconCircleDashedCheck, IconHeart, IconMapPin } from "@tabler/icons-react"
import { Link } from "react-router-dom";





export const TalentsCards = (props:any) => {
    return (
        <div className="max-w-[20rem] w-full flex flex-col bg-mine-shaft-900 p-4 rounded-lg gap-2  border-bright-sun-400  hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-200 ease-in-out !shadow-bright-sun-400">
            <div className="bg-mine-shaft-700 px-1 py-2 rounded-lg flex flex-col gap-4 items-center relative w-full sm:w-auto">
                <div className="bg-mine-shaft-300 rounded-full p-1">
    <img className="h-24 w-24 rounded-full" src={`/images/AvatarImg/${props.image}.png`} alt="profilepic" />
                </div>
                <div className="flex gap-2">
                    <Link to="/talent-profile">
                    <Button variant="filled" size="xs" color="mine-shaft.2">
                        <span className="text-mine-shaft-950 text-xs">View Profile</span>
                    </Button>
                    </Link>
                    <Button variant="filled" size="xs" color="bright-sun.5">Message</Button>
                </div>
            </div>


            <div className="flex flex-col gap-3 justify-evenly w-full">
                <div className="flex justify-between">
                    <div>
                        <div className="text-xl flex items-center gap-2 text-mine-shaft-100 font-semibold">
                           {props.name}<span className="text-blue-400"><IconCircleDashedCheck /></span>
                        </div>
                        <div className=" text-mine-shaft-200  text-sm">
                            {props.role}
                        </div>
                    </div>
                    <IconHeart />
                </div>

                <Text
                    lineClamp={3}
                    className="!text-xs !text-mine-shaft-300 text-justify "
                >{props.about}
                </Text>
                <div className="flex gap-2">
                {
                    props.skills?.map((skill:any,index:any) =>  
                        <div key={index} className="bg-mine-shaft-700 px-1 text-bright-sun-400 text-xs rounded-md  hover:bg-mine-shaft-600 hover:text-bright-sun-500 cursor-pointer">
                    {skill}
                        </div>)
                }
                </div>

              
                <Divider size="sm" color="mine-shaft.6"/>
                <div className="flex justify-between ">
                <div className="text-xs flex text-mine-shaft-300">
                <IconMapPin size={18}/>{props.location}
                </div>
                <div className="flex gap-1">
                    <IconBrandLinkedinFilled size={20} color="blue" className="bg-mine-shaft-100 rounded-md"/>
                    <IconBrandInstagram size={20} className="bg-pink-500 text-bright-sun-200 rounded-md"/>
                </div>
                </div>
            </div>
        </div>

    );
}
