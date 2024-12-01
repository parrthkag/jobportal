import { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group,  Pill, PillsInput, ScrollArea, useCombobox } from '@mantine/core';
import { IconSelector } from '@tabler/icons-react';


export function MultiInput(props: any) {
    useEffect(() => {
        setData(props.options)
    }, [])
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const [search, setSearch] = useState('');
    const [data, setData] = useState<string[]>([]);
    const [value, setValue] = useState<string[]>([]);

    const exactOptionMatch = data.some((item) => item === search);

    const handleValueSelect = (val: string) => {
        setSearch('');

        if (val === '$create') {
            setData((current) => [...current, search]);
            setValue((current) => [...current, search]);
        } else {
            setValue((current) =>
                current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
            );
        }
    };

    const handleValueRemove = (val: string) =>
        setValue((current) => current.filter((v) => v !== val));

    const values = value
        .slice(
            0, 1)
        .map((item) => (
            <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
                {item}
            </Pill>
        ));

    const options = data
        .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
        .map((item) => (
            <Combobox.Option value={item} key={item} active={value.includes(item)}>
                <Group gap="sm">
                    <Checkbox
                        size='xs'
                        color='bright-sun.4'
                        checked={value.includes(item)}
                        onChange={() => { }}
                        aria-hidden
                        tabIndex={-1}
                        style={{ pointerEvents: 'none' }}
                    />
                    <span className='text-mine-shaft-200'>{item}</span>
                </Group>
            </Combobox.Option>
        ));

    return (
        <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
            <Combobox.DropdownTarget>
                <PillsInput variant="Unstyled" rightSection={<IconSelector />} onClick={() => combobox.toggleDropdown()}
                    leftSection={<div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2"><props.icon /></div>}>
                    <Pill.Group>
                        {value.length > 0 && (
                            <>
                                {values}
                                {value.length > 1 &&
                                    <Pill>+{value.length - 1} more</Pill>
                                }
                            </>
                        )}

                        <Combobox.EventsTarget>
                            <PillsInput.Field
                                value={search}
                                onBlur={() => combobox.closeDropdown()}
                                placeholder={props.title}
                                onChange={(event) => {
                                    combobox.updateSelectedOptionIndex();
                                    setSearch(event.currentTarget.value);
                                }}
                                onKeyDown={(event) => {
                                    if (event.key === 'Backspace' && search.length === 0) {
                                        event.preventDefault();
                                        handleValueRemove(value[value.length - 1]);
                                    }
                                }}
                            />
                        </Combobox.EventsTarget>
                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>


            <Combobox.Dropdown>
                <ScrollArea.Autosize mah={200} type="scroll">
                    <Combobox.Options>
                        {options}

                        {!exactOptionMatch && search.trim().length > 0 && (
                            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
                        )}

                        {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
                            <Combobox.Empty>Nothing found</Combobox.Empty>
                        )}
                    </Combobox.Options>
                </ScrollArea.Autosize>
            </Combobox.Dropdown>


        </Combobox>
    );
}