import { Divider, Input, RangeSlider } from '@mantine/core';
import React, { useState } from 'react'

import { MultiInput } from '../FindJobs/MultiInput';
import { TalentBar } from '../Data/Data';
import { IconUserCircle } from '@tabler/icons-react';

export const SearchBarFT = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
    return (
        <> <div className="px-5 py-8  flex gap-4 items-center text-mine-shaft-100">
            <div className='flex items-center' >
                <div className='text-bright-sun-400 bg-mine-shaft-900 p-1 rounded-full mr-2 '><IconUserCircle size={25}/></div>
                <Input variant='unstyled' placeholder="Search talent" />
            </div>
            {
                TalentBar.map((item, index) => <><div key={index} className="w-1/5"><MultiInput title={item.title} icon={item.icon} options={item.options} /></div>
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
