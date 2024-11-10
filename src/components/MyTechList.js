import {MyTechListItem} from '@/components/MyTechListItem';
import {Stack} from '@chakra-ui/react';

export default function MyTechList({tech, setCardData}) {
    return (
        <Stack
            direction={{ base: 'column', sm: 'row' }}
            wrap="wrap"
            gap="2"
            justify={'center'}
        >
            {tech.map((data, index) =>  <MyTechListItem data={data} key={index} setCardData={setCardData}/>)}
        </Stack>
    )
}