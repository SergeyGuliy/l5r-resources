import {routeData} from '@/mockData';
import MyPage from '@/components/MyPage';


export default function Home() {
    const pageData =routeData.techniques
    console.log(pageData)

    return (
        <MyPage
            links={pageData.links}
            tech={pageData.list}
            title={pageData.title}
            filterGroups={pageData.filterSettings}
            useTechLvls={pageData.useTechLvls}
        />
    );
}
