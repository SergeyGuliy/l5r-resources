import Link from 'next/link';
import {Card, GridItem, Text} from '@chakra-ui/react';

export default function MyLinksItem({linkData}) {
    return (
        <GridItem colSpan={{base: '12', sm: '8', md: '6', lg: '6', xl: '4', '2xl': '3'}}>
            <Link href={linkData.link}>
                <Card.Root p={2}>
                    <Text fontWeight="semibold" textStyle="sm">{linkData.name}</Text>
                </Card.Root>
            </Link>
        </GridItem>
    )
}