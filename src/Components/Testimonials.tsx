import { Avatar, Button, Rating } from "@mantine/core"
import { testimonial } from "../Data/Data"


export const Testimonials = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-mine-shaft-100 mb-3 font-semibold text-center">
                What<span className="text-bright-sun-400"> User</span> Says About us?</div>
            <div className="flex justify-evenly">
                {
                    testimonial.map((data, index) => <div key={index} className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 rounded-xl p-3 mt-10">
                        <div className="flex gap-3 ">
                            <Avatar className="!h-14 !w-14 " src="/images/header/avatar.png" alt="it's me" />
                            <div>
                                <div className="text-lg text-mine-shaft-100 font-semibold ">{data.name}</div>
                                <Rating value={3.5} fractions={2} readOnly />;
                            </div>
                        </div>
                        <div className="text-xs text-mine-shaft-300">{data.desc}</div>
                    </div>)
                }
            </div>
            <div className="flex relative mb-10">
            <Button color="bright-sun.4" variant="filled" className=" !absolute !right-10 mt-5 "><span className="text-mine-shaft-950 text-lg font-semibold">Show more</span></Button>
            </div>

        </div>
    )
}
