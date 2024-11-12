import {MyCardListItem} from '@/components/card/MyCardListItem';
import {Stack} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import {useMemo} from 'react';

export default function MyCardList({tech, setCardData}) {
    const router = useRouter()

    const dynamicWidth = useMemo(() => {
        if (router.query.item) return {
            base: '100%',
            sm: '100%',
            md: 'calc(50% - 8px)',
            lg: 'calc(50% - 8px)',
            xl: 'calc(50% - 8px)',
            '2xl': 'calc(50% - 8px)'
        }
        return {
            base: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
            '2xl': '100%'
        }
    }, [router.query.item])

    return (
        <Stack
            direction={{ base: 'column', sm: 'row' }}
            wrap="wrap"
            gap="8px"
            justify={'center'}
            width={dynamicWidth}
        >
            {tech.map((data, index) =>  <MyCardListItem
                data={data}
                key={index}
                setCardData={setCardData}
            />)}
        </Stack>
    )
}