import { Divider, RangeSlider } from "@mantine/core"
import { dropDownData } from "../Data/Data"
import { MultiInput } from "./MultiInput"
import { useState } from "react";

export const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <> <div className="px-5 py-8  flex gap-4">
      {
        dropDownData.map((item, index) => <><div key={index} className="w-1/5"><MultiInput {...item} /></div>
          <Divider size="sm" orientation="vertical" /></>)
      }
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex justify-between ">
          <div className="text-sm text-mine-shaft-200">Salary</div>
          <div className="text-sm text-mine-shaft-200">&#8377;{value[0]} LPA-&#8377;{value[1]} LPA</div>
        </div>
        <RangeSlider color="bright-sun.4" size="xs" value={value} onChange={setValue}
            labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
          }} />
      </div>
    </div>
      <Divider size="sm" mx="md" />
    </>
  )
}
