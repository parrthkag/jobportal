import { useState } from 'react';
import { Button, Combobox, useCombobox,} from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const Relevance = ['Relevance', 'Most Recent', 'Salary : Low to High', 'Salary : High to Low'];

export function Sort() {
    const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = Relevance.map((item) => (
        <Combobox.Option className='!text-xs' value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <>

            <Combobox
                store={combobox}
                width={150}
                position="bottom-start"
                onOptionSubmit={(val) => {
                setSelectedItem(val);
                combobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <div onClick={()=>combobox.toggleDropdown()} className='border border-bright-sun-400 text-xs gap-2 rounded-lg flex items-center px-2 py-1'>
                        {selectedItem} <IconAdjustments className='h-5 w-5 text-bright-sun-400'/>
                    </div>
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </>
    );
}