import {Badge, Box, Card, HStack, Stack, Text} from '@chakra-ui/react'

import {translations} from '@/mockData/constants';
import {useMemo} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export function MyCardListItem ({data}) {
    const router = useRouter()
    const link = useMemo(() => ({
        pathname: '/[group]/[item]',
        query: { group: router.query.group, item: data.link, },
    }), [data.link, router.query.group])

    return (
        <Box width={'100%'}>
            <Link href={link}>
                <Card.Root p={3}>
                    <Stack direction="row" justifyContent={'space-between'} width={'100%'}>
                        <Stack gap="0">
                            <Text fontWeight="semibold" textStyle="sm">{data.name}</Text>
                            <HStack mt="2">
                                {!!translations[data.group] &&
                                    <Badge variant="surface" size="md">{translations[data.group]}</Badge>}

                                {!!translations[data.subgroup] &&
                                    <Badge variant="surface" size="md">{translations[data.subgroup]}</Badge>}
                            </HStack>
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