import MySearchFilter from '@/components/MySearchFilter';
import MyTechList from '@/components/MyTechList';
import {Box} from '@chakra-ui/react';
import {useMemo, useState} from 'react';
import {subGroupsNames, techTranslations} from '@/data/groups';
import MyTechPreview from '@/components/MyTechPreview';

function parseFilters(filters) {
    return filters.map(i => ({
        techGroup: i.techGroup,
        label: techTranslations[i.techGroup],
        subGroups: i.subGroups?.length? i.subGroups.map(j => ({ label: subGroupsNames[j], checked: true, value: j })) : []
    }))
}

export default function MyPage({title, tech, filterGroups, useTechLvls}) {
    const defaultFilters = parseFilters(filterGroups)

    const [search, setSearch] = useState('')
    const [filters, setFilters] = useState(defaultFilters)
    const [lvls, setLvls] = useState([])
    const [cardData, setCardData] = useState({})

    const isTouched = useMemo(() => {
        if (lvls.length) return true
        if (JSON.stringify(filters) !== JSON.stringify(defaultFilters)) return true
        return false
    }, [lvls.length, filters, defaultFilters])
    
    const filterKeys = useMemo(() => {
        const toReturn = []

        filters.forEach(group => {
            group.subGroups.forEach(subGroup => {
                if (subGroup.checked) toReturn.push(subGroup.value)
            })
        })
        
        return toReturn
    }, [filters])

    const filteredTech = useMemo(() => {
        let techToReturn = [...tech]

        if (lvls.length) {
            techToReturn = techToReturn.filter(i => lvls.includes(i.rank))
        }

        if (search.length) {
            techToReturn = techToReturn.filter(i => i.name.toUpperCase().includes(search.toUpperCase()))
        }

        if (filterKeys.length) {
            techToReturn = techToReturn.filter(i => filterKeys.includes(i.subgroup))
        }

        return techToReturn
    }, [tech, lvls, search, filterKeys])

    function clearFilters() {
        setFilters(defaultFilters)
        setLvls([])
    }

    return (
        <Box display="flex" flexDirection="column">
            <h1>{title}</h1>
            <MySearchFilter
                search={search}
                setSearch={setSearch}
                isTouched={isTouched}
                filters={filters}
                setFilters={setFilters}
                clearFilters={clearFilters}
                useTechLvls={useTechLvls}
                lvls={lvls}
                setLvls={setLvls}
            />
            <MyTechList tech={filteredTech} setCardData={setCardData}/>
            {cardData && <MyTechPreview cardData={cardData} setCardData={setCardData}/>}
        </Box>
    )
}