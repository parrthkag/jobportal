import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { Profile } from "../TalentProfile/Profile"


export const TalentProfilePage = () => {
    return (
        <div className="bg-mine-shaft-950 min-h-[100vh] font-['poppins'] p-5">
            <Divider size="sm"/>
            <Link className="my-5 inline-block " to="/find-talent">
                    <Button leftSection={<IconArrowLeft size={20}/>} variant="light" size="xs" color="bright-sun.4">
                        Back
                    </Button>
            </Link>
            <div className="flex gap-3">
                <Profile/>
            </div>

        </div>
    )
}
