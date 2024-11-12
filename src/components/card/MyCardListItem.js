import {Box, Card, Stack, Text} from '@chakra-ui/react'

import {translations} from '@/mockData/constants';
import {useMemo} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export function MyCardListItem ({data}) {
    const router = useRouter()
    const link = useMemo(() => ({
        pathname: '/[group]/[item]',
        query: { group: router.query.group, item: data.link, },
    }), [data])

    const dynamicWidth = useMemo(() => {
        if (router.query.item) return {
            base: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
            '2xl': '100%'
        }
        return {
            base: '100%',
            sm: '100%',
            md: 'calc(50% - 8px)',
            lg: 'calc(50% - 8px)',
            xl: 'calc(33.3% - 8px)',
            '2xl': 'calc(25% - 8px)'
        }
    }, [router.query.item])

    return (
        <Box
            width={dynamicWidth}
        >
            <Link href={link}>
                <Card.Root p={3}>
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