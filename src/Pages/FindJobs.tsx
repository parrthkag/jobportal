import { Divider } from "@mantine/core"
import { SearchBar } from "../FindJobs/SearchBar"
import { Jobs } from "../FindJobs/Jobs"


export const FindJobs = () => {
  return (
    <div className="bg-mine-shaft-950 min-h-[100vh] font-['poppins']">
        <Divider size="sm" mx="md"/>
        <SearchBar/>
        <Jobs/>
    </div>
  )
}
