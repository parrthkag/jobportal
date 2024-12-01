import { Divider } from "@mantine/core"
import { SearchBarFT } from "../FindTalent/SearchBarFT"
import { Talent } from "../FindTalent/Talent"



export const FindTalent = () => {
  return (
    <div className="bg-mine-shaft-950 min-h-[100vh] font-['poppins']">
    <Divider size="sm" mx="md"/>
    <SearchBarFT/>
    <Talent/>
   
</div>
  )
}
