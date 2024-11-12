import {routeData} from '@/mockData';
import MyPage from '@/components/MyPage';
import {useRouter} from 'next/router';
import {useMemo} from 'react';


export default function Home() {
    const router = useRouter()

    const groupData  =useMemo(() => {
        return routeData[router.query.group]
    }, [router.query.group])

    console.log(groupData?.filterSettings)

    if (!groupData) return

    return (
        <MyPage
            links={groupData.links}
            tech={groupData.list}
            title={groupData.title}
            filterGroups={groupData.filterSettings}
            useTechLvls={groupData.useTechLvls}
            useSearch={groupData.useSearch}
        />
    );
}
