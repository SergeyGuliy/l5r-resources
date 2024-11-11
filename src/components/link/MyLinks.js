import {Stack} from '@chakra-ui/react';
import MyLinksItem from '@/components/link/MyLinksItem';

export default function MyLinks({linksData}) {
    return (
        <Stack
            direction={{ base: 'column', sm: 'row' }}
            wrap="wrap"
            gap="8px"
            justify={'center'}
            mb={5}
        >
            {linksData.map((linkData, linkIndex) => (<MyLinksItem key={linkIndex} linkData={linkData}/>))}
        </Stack>
    )
}