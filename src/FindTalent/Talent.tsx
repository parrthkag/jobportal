import { TalentsData } from "../Data/Data"
import { Sort } from "../FindJobs/Sort"
import { TalentsCards } from "./TalentsCards"


export const Talent = () => {
    return (
        <div className="px-5">
            <div className="flex justify-between m-5">
                <div className="text-3xl text-mine-shaft-200 font-semibold">Talents</div>
                <Sort />
            </div>
            <div className="mt-10 flex flex-wrap gap-3 justify-evenly">
                {
                    TalentsData.map((data, index) => <TalentsCards key={index} {...data} />)
                }

            </div>

        </div>
    )
}
