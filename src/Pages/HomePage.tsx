import { Companies } from "../Components/Companies"
import { DreamJob } from "../Components/DreamJob"
import { JobCategory } from "../Components/JobCategory"
import { Suscribe } from "../Components/Suscribe"
import { Testimonials } from "../Components/Testimonials"
import { Working } from "../Components/Working"


function HomePage() {
  return (

    <div className= " min-h-[100vh]  bg-mine-shaft-950">

        <DreamJob/>
        <Companies/>
        <JobCategory/>
        <Working/>
        <Testimonials/>
        <Suscribe/>

    </div>
  )
}

export default HomePage