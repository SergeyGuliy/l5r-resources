import MyLinks from '@/components/MyLinks';
import {Box} from '@chakra-ui/react';
import {routeData} from '@/data';


export default function Home() {
    return (
        <Box display="flex" flexDirection="column">
            <MyLinks linksData={routeData.techniques.links}/>
        </Box>
    );
}
