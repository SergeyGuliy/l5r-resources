import Link from 'next/link';
import {Card, Text} from '@chakra-ui/react';

export default function MyLink({linkData}) {
    return (
        <Link href={linkData.link}>
            <Card.Root width="100%" minWidth="320px" maxWidth="550px" p={3}>
                <Text fontWeight="semibold" textStyle="sm">{linkData.name}</Text>
            </Card.Root>
        </Link>
    )
}