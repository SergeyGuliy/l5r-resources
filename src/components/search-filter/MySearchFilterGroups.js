import {Button, HStack} from '@chakra-ui/react';
import {Switch} from '@/components/ui/switch';
import {hiddenNinjutsuTrue} from '@/mockData/constants';

export default function MySearchFilterGroups({filter, groupIndex, setFilters}) {
    const allChecked = filter.subGroups.every((value) => value.checked)
    const indeterminate = filter.subGroups.some((value) => value.checked) && !allChecked

    function onCheckedGroup({checked}) {
        setFilters((current) => {
            const newValues = [...current]
            newValues[groupIndex] = {
                ...newValues[groupIndex],
                subGroups: newValues[groupIndex].subGroups.map((subGroup) => ({...subGroup, checked}))
            }

            return newValues
        })
    }

    function onCheckedSubGroup(checked,subGroupIndexToUpdate) {
        setFilters((current) => {
            const newValues = [...current]
            newValues[groupIndex] = {
                ...newValues[groupIndex],
                subGroups: newValues[groupIndex].subGroups.map((subGroup, subGroupIndex) => {
                    return subGroupIndexToUpdate !== subGroupIndex? subGroup: {...subGroup, checked}
                })
            }
            return newValues
        })
    }

    if (!filter.subGroups?.length) return


    return (
        <>
            <Switch
                checked={indeterminate ? 'indeterminate' : allChecked}
                colorPalette={'blue'}
                onCheckedChange={(e) => onCheckedGroup(e)}
                size="md"
                mb={2}
            >
                {filter.label}
            </Switch>

            <HStack>
                {filter.subGroups.map((subGroup, subGroupIndexToUpdate) => {
                    if (subGroup.value === hiddenNinjutsuTrue) return 

                    return (
                        <Button
                            size="xs"
                            key={subGroup.value}
                            colorPalette={subGroup.checked? 'blue': 'blue'}
                            variant={subGroup.checked? 'solid': 'outline'}
                            onClick={() => onCheckedSubGroup(!subGroup.checked, subGroupIndexToUpdate)}
                        >
                            {subGroup.label}
                        </Button>
                    )
                })}
            </HStack>
        </>
    )
}
