import { jobCardData } from "../Data/Data"
import { JobCards } from "./JobCards"
import { Sort } from "./Sort"

export const Jobs = () => {
    return (
        <div className="px-5">
            <div className="flex justify-between m-5">
                <div className="text-3xl text-mine-shaft-200 font-semibold">Recommended Jobs</div>
                <Sort />
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {
                jobCardData.map((data , index) => <JobCards key={index} {...data}/>)
            }
            </div>
            
        </div>
    )
}
