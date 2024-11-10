import {Card, Stack, Text} from '@chakra-ui/react'

import {kataTranslations} from '@/data/groups';

export function MyTechListItem ({data, setCardData}) {
    return (
        <Card.Root width="100%" minWidth="320px" maxWidth="550px" onClick={() => setCardData(data)}>
            <Card.Body p={3}>
                    <Stack direction="row" justifyContent={'space-between'} width={'100%'}>
                        <Stack gap="0">
                            <Text fontWeight="semibold" textStyle="sm">{data.name}</Text>
                            <Text color="fg.muted" textStyle="sm">{kataTranslations[data.subgroup]}</Text>
                        </Stack>
                        <Stack gap="0">
                            <Text color="fg.muted" textStyle="sm">Ранг: {data.rank}</Text>
                        </Stack>
                    </Stack>
            </Card.Body>
        </Card.Root>
    )
}