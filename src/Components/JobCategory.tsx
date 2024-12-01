import { Carousel } from '@mantine/carousel'
import { jobCategory } from '../Data/Data';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

export const JobCategory = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-mine-shaft-100 mb-3 font-semibold text-center">
                Browse <span className="text-bright-sun-400">Jobs</span> Category </div>
            <div className="text-mine-shaft-300 mb-10 mx-auto w-1/2 text-center text-lg">Discover diverse job opportunities crafted for your skills—start your career journey today!</div>
            <Carousel slideSize="22%" slideGap="md" loop className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0  hover:[&_button]:opacity-100
            "
                nextControlIcon={<IconArrowRight className="h-8 w-8" />}
                previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
                >
                {
                    jobCategory.map((category, index) => <Carousel.Slide>

                        <div className="flex flex-col items-center w-72 gap-2 border border-bright-sun-400 rounded-xl p-5 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-200 ease-in-out !shadow-bright-sun-400">
                            <div className="p-2 bg-bright-sun-400 rounded-full">
                                <img className="h-8 w-8" src={`/category/${category.image}.png`} alt="" />
                            </div>
                            <div className="text-mine-shaft-100 text-xl font-semibold">{category.title}</div>
                            <div className="text-mine-shaft-300 text-center text-sm">{category.description}</div>
                            <div className="text-bright-sun-300 text-lg">{category.openings}</div>
                        </div>
                    </Carousel.Slide>)
                }
            </Carousel>

        </div>
    )
}
