import { IconClock, IconHeart } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";

export const JobCards = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 p-4 w-72 rounded-md flex flex-col gap-2 ">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-mine-shaft-800 rounded-md p-2">
            <img className="h-7 w-7" src={`/companies/Icons/${props.company}.png`} alt="icon" />
          </div>
          <div>
            <div className="text-mine-shaft-200 font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconHeart />
      </div>

      <div className="mt-2 flex items-center gap-2">
        <div className="bg-mine-shaft-800 rounded-md p-1 text-bright-sun-400 text-xs">
          {props.experience}
        </div>
        <div className="bg-mine-shaft-800 rounded-md p-1 text-bright-sun-400 text-xs">
          {props.jobType}
        </div>
        <div className="bg-mine-shaft-800 rounded-md p-1 text-bright-sun-400 text-xs">
          {props.location}
        </div>
      </div>

      <Text
        lineClamp={3}
        className="!text-xs !text-mine-shaft-300 text-justify "
      >{props.description}
      </Text>
      <Divider size="sm" color="mine-shaft.7" />
      <div className="flex justify-between items-center">
        <div className="text-mine-shaft-100">
          &#8377;{props.package}<span className="text-mine-shaft-300 text-sm">LPA</span>
        </div>
        <div className="flex gap-1 items-center text-mine-shaft-300 text-sm">
          <IconClock className="h-5 w-5" />
          {props.postingTime}days ago
        </div>
      </div>
    </div>
  );
};
