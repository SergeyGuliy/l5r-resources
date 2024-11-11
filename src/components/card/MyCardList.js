import {MyCardListItem} from '@/components/card/MyCardListItem';
import {Stack} from '@chakra-ui/react';

export default function MyCardList({tech, setCardData}) {
    return (
        <Stack
            direction={{ base: 'column', sm: 'row' }}
            wrap="wrap"
            gap="2"
            justify={'center'}
        >
            {tech.map((data, index) =>  <MyCardListItem data={data} key={index} setCardData={setCardData}/>)}
        </Stack>
    )
}