
import {work} from "../Data/Data"
import { Avatar } from "@mantine/core";


export const Working = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-mine-shaft-100 mb-3 font-semibold text-center">
                How it <span className="text-bright-sun-400">Works</span></div>
            <div className="text-mine-shaft-300 mb-10 mx-auto w-1/2 text-center text-lg">Seamlessly guide your way to the career you’ve been dreaming of.</div>
            <div className="flex px-20 justify-between items-center ">
                <div className="relative">
                    <img className ="w-[30rem]" src="/images/header/Girl.png" alt="girl"  />
                        <div className="w-36 flex flex-col top-[12%] right-0 absolute items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-2 backdrop-blur-md">
                            <Avatar className="!h-14 !w-14" src="/images/header/avatar-8.png" alt="it's me" />
                            <div className="text-sm text-mine-shaft-200 font-semibold text-center">Complete Your Profile</div>
                            <div  className="text-xs text-mine-shaft-300">0% completed</div>
                        </div>
                </div>
                <div className="flex flex-col gap-10">
                    {
                        work.map((item,index)=><div key={index} className="flex items-center gap-4  ">
                        <div className="p-2.5 bg-bright-sun-400 rounded-full">
                            <img className="h-12 w-12" src={`/images/${item.image}.png`} alt="" />
                        </div>
                        <div>
                            <div className="text-mine-shaft-200 font-semibold text-xl">{item.name}</div>
                            <div className="text-mine-shaft-300">{item.desc}</div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    )
}
