import {Button, Group, IconButton} from '@chakra-ui/react';
import {LuFilter, LuFilterX} from 'react-icons/lu';

import {MySearch} from '@/components/search-filter/MySearch';
import {useState} from 'react';
import {MyFilterDialog} from '@/components/search-filter/MyFilterDialog';

export default function MySearchFilter({
                                           useSearch,
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
    const [open, setOpen] = useState(false)

    return (
        <Group mb={2}>
            <MySearch search={search} setSearch={setSearch} useSearch={useSearch}/>

            <Button
                variant="solid"
                colorPalette={isTouched? 'orange': 'blue'}
                onClick={() => setOpen(true)}
            >
                Фильтр
                <LuFilter />
            </Button>

            {isTouched && <IconButton
                variant="solid"
                colorPalette={'orange'}
                onClick={() => clearFilters()}
            >
                <LuFilterX />
            </IconButton>}

            <MyFilterDialog
                open={open}
                setOpen={setOpen}
                filters={filters}
                setFilters={setFilters}
                useTechLvls={useTechLvls}
                lvls={lvls}
                setLvls={setLvls}
            />
        </Group>
    )
}