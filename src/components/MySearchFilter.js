import {Box, Button, DialogTrigger, Group, IconButton, Input, Separator, Stack, Text} from '@chakra-ui/react';
import {LuFilter, LuFilterX, LuX} from 'react-icons/lu';
import {InputGroup} from '@/components/ui/input-group';
import {
    DialogBody, DialogCloseTrigger,
    DialogContent,
    DialogHeader, DialogRoot,
    DialogTitle
} from '@/components/ui/dialog';
import MySearchFilterGroups from '@/components/MySearchFilterGroups';
import MySearchFilterLvls from '@/components/MySearchFilterLvls';

export default function MySearchFilter({
                                           search,
                                           setSearch,
                                           isTouched,
                                           filters,
                                           setFilters,
                                           clearFilters,
                                           useTechLvls,
                                           lvls,
                                           setLvls,
}) {
    return (
        <Group mb={2}>
            <InputGroup flex="1" endElement={search && (
                <Box position="absolute" top="50%" right="0.5rem" transform="translateY(-50%)">
                    <Button
                        onClick={() => setSearch('')}
                        aria-label="Clear input"
                        size="sm"
                        variant="ghost"
                    >
                        <LuX />
                    </Button>
                </Box>
            )}>
                <Input placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            </InputGroup>


            <DialogRoot>
                <DialogTrigger asChild>
                    <Button variant="solid" colorPalette={isTouched? 'orange': 'blue'}>
                        Фильтр
                        <LuFilter />
                    </Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Фильтр</DialogTitle>
                        <DialogCloseTrigger />
                    </DialogHeader>

                    <DialogBody>
                        <Stack>
                            {filters.map((filter, groupIndex) => (
                                <MySearchFilterGroups
                                    filter={filter}
                                    key={groupIndex}
                                    groupIndex={groupIndex}
                                    setFilters={setFilters}
                                />
                            ))}
                            {
                                useTechLvls && <MySearchFilterLvls
                                    lvls={lvls}
                                    setLvls={setLvls}/>
                            }
                        </Stack>
                    </DialogBody>
                </DialogContent>
            </DialogRoot>


            {isTouched && <IconButton
                variant="solid"
                colorPalette={'orange'}
                onClick={() => clearFilters()}
            >
                <LuFilterX />
            </IconButton>}
        </Group>
    )
}