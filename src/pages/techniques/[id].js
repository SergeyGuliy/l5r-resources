import MyPage from '@/components/MyPage';
import {useRouter} from 'next/router';
import {routeData} from '@/mockData';
import {useMemo} from 'react';


export default function Home() {
    const router = useRouter()

    const pageData  =useMemo(() => {
        return routeData[router.query.id]
    }, [router.query.id])

    if (!pageData) return

    return (
        <MyPage
            links={pageData.links}
            tech={pageData.list}
            title={pageData.title}
            filterGroups={pageData.filterSettings}
            useTechLvls={pageData.useTechLvls}
            useSearch={pageData.useSearch}
        />
    );
}
