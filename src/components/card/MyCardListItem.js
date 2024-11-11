import {Box, Card, Stack, Text} from '@chakra-ui/react'

import {translations} from '@/mockData/constants';
import Link from 'next/link';
import {useMemo} from 'react';

export function MyCardListItem ({data, setCardData}) {
    const link = useMemo(() => {
        return data.link
    }, [data])

    console.log(link)
    return (
        <Box
            width={{
                base: '100%',
                sm: '100%',
                md: 'calc(50% - 8px)',
                lg: 'calc(50% - 8px)',
                xl: 'calc(33.3% - 8px)',
                '2xl': 'calc(25% - 8px)'
        }}
        >
            <Link
                href={link}
            >
                <Card.Root
                    p={3}
                    onClick={() => setCardData(data)}
                >
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
        </Box>
    )
}