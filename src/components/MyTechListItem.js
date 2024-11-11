import {Card, Stack, Text} from '@chakra-ui/react'

import {translations} from '@/mockData/groups';
import Link from 'next/link';
import {useMemo} from 'react';

export function MyTechListItem ({data, setCardData}) {
    const link = useMemo(() => {
        return data.link
    }, [data])

    console.log(link)
    return (
        <Link href={link}>
            <Card.Root width="100%" minWidth="320px" maxWidth="550px" onClick={() => setCardData(data)} p={3}>
                <Stack direction="row" justifyContent={'space-between'} width={'100%'}>
                    <Stack gap="0">
                        <Text fontWeight="semibold" textStyle="sm">{data.name}</Text>
                        <Text color="fg.muted" textStyle="sm">{translations[data.subgroup]}</Text>
                    </Stack>
                    <Stack gap="0">
                        <Text color="fg.muted" textStyle="sm">Ранг: {data.rank}</Text>
                    </Stack>
                </Stack>
            </Card.Root>
        </Link>
    )
}