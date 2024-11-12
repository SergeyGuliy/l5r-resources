import {Box} from '@chakra-ui/react';

export default function MyCardPreview({cardData}) {
    console.log(cardData)
    return (
        <Box
            dangerouslySetInnerHTML={{__html: cardData.description}}
            width={{
                base: '100%',
                sm: '100%',
                md: 'calc(50% - 8px)',
                lg: 'calc(50% - 8px)',
                xl: 'calc(50% - 8px)',
                '2xl': 'calc(50% - 8px)'
            }}
        />
    )
}