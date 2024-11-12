import {Button, Flex, Stack} from '@chakra-ui/react';
import {LuBookMarked, LuLanguages, LuMoon, LuSun} from 'react-icons/lu';
import {LinkButton} from '@/components/ui/link-button';
import {useRouter} from 'next/router';

export default function MySidebar() {
    const router = useRouter()

    function onClick(e) {
        e.preventDefault();
        router.push('/')
    }

    return (
        <Flex
            bg="gray.800"
            color="white"
            alignItems={'center'}
            justifyContent={'space-between'}
            direction={{base: 'row', lg: 'column',}}
            width={{base: '100vw', lg: '65px'}}
            height={{base: '65px', lg: '100vh',}}
            pt={{base: 0, lg: 5,}}
            pb={{base: 0, lg: 5,}}
            pl={{base: 5, lg: 0,}}
            pr={{base: 5, lg: 0,}}
            position="fixed"
            zIndex={1}
            top={{base: 'calc(100vh - 65px)', lg: '0'}}
            left={0}
        >
            <LinkButton
                mt={{base: 0, lg: 2,}}
                textAlign="center"
                width={'40px'}
                height={'40px'}
                variant="ghost"
                fontSize="xl"
                fontWeight="bold"
                href={'/'}
                onClick={onClick}
            >
                L5R
            </LinkButton>
            <Stack
                direction={{base: 'row', lg: 'column',}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <LinkButton variant="ghost" align="center" p="3" _hover={{ bg: 'gray.700' }} width={'40px'} height={'40px'}>
                    <LuBookMarked />
                </LinkButton>
                <LinkButton variant="ghost" align="center" p="3" _hover={{ bg: 'gray.700' }} width={'40px'} height={'40px'}>
                    <LuSun />
                </LinkButton>
                <LinkButton variant="ghost" align="center" p="3" _hover={{ bg: 'gray.700' }} width={'40px'} height={'40px'}>
                    <LuMoon />
                </LinkButton>
                <LinkButton variant="ghost" align="center" p="3" _hover={{ bg: 'gray.700' }} width={'40px'} height={'40px'}>
                    <LuLanguages />
                </LinkButton>
            </Stack>
        </Flex>
    );
}
