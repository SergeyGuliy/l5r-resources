import {Stack} from '@chakra-ui/react';
import MyLink from '@/components/MyLink';

export default function MyLinks({linksData}) {
    return (
        <Stack
            direction={{ base: 'column', sm: 'row' }}
            wrap="wrap"
            gap="2"
            justify={'center'}
        >
            {linksData.map((linkData, linkIndex) => (<MyLink key={linkIndex} linkData={linkData}/>))}
        </Stack>
    )
}