import Link from 'next/link';
import {Box, Card, Text} from '@chakra-ui/react';

export default function MyLinksItem({linkData}) {
    return (
        <Box
            width={{
                base: '100%',
                sm: 'calc(50% - 8px)',
                md: 'calc(50% - 8px)',
                lg: 'calc(33.3% - 8px)',
                xl: 'calc(25% - 8px)',
                '2xl': 'calc(20% - 8px)'
        }}
        >
            <Link
                href={linkData.link}
            >
                <Card.Root
                    p={3}
                >
                    <Text fontWeight="semibold" textStyle="sm">{linkData.name}</Text>
                </Card.Root>
            </Link>
        </Box>
    )
}