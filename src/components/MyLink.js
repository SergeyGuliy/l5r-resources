import Link from 'next/link';
import {Card, Text} from '@chakra-ui/react';

export default function MyLink({linkData}) {
    return (
        <Link href={linkData.link}>
            <Card.Root p={3} width="100%" minWidth="320px" maxWidth="550px">
                <Text fontWeight="semibold" textStyle="sm">{linkData.name}</Text>
            </Card.Root>
        </Link>
    )
}