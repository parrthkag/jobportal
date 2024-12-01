import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconYinYang } from "@tabler/icons-react"
import { footerLinks } from "../Data/Data"

export const HelpLinks = () => {
    return (
        <div className="pt-20 bg-mine-shaft-950 pb-5 flex gap-5 justify-around ">
            <div className="w-1/4 flex flex-col gap-4">
                <div className="flex gap-2 items-center text-bright-sun-400">
                    <IconYinYang className="h-8 w-8 " stroke={1.5} />
                    <div className="text-2xl font-semibold">PathFinder</div>
                </div>
                <div className="text-sm text-mine-shaft-200">A dynamic job portal for showcasing skills, building profiles, and connecting talent with
                    the right opportunities.</div>
                <div className="flex items-center gap-4 text-bright-sun-500">
                    <div ><IconBrandFacebook className="h-10 w-10 bg-mine-shaft-900 rounded-full p-1  hover:bg-mine-shaft-800 hover:text-bright-sun-400" /></div>
                    <div><IconBrandInstagram className="h-10 w-10 bg-mine-shaft-900 rounded-full p-1  hover:bg-mine-shaft-800 hover:text-bright-sun-400" /></div>
                    <div><IconBrandX className="h-10 w-10 bg-mine-shaft-900 rounded-full p-2 hover:bg-mine-shaft-800 hover:text-bright-sun-400" /></div>
                </div>
            </div>
            {
                footerLinks.map((item,index)=><div key={index}>
                    <div className="text-xl text-bright-sun-400 font-semibold mb-4">{item.title}</div>
                    {
                        item.Links.map((link,index)=> <div key={index} className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out">{link}</div>)
                    }
                </div>)
            }

        </div>
    )
}
