import {Flex, Stack} from '@chakra-ui/react';
import {LuBookMarked, LuLanguages, LuMoon, LuSun} from 'react-icons/lu';
import {LinkButton} from '@/components/ui/link-button';

export default function MySidebar() {
    return (
        <>
            <Flex
                bg="gray.800"
                color="white"
                alignItems={'center'}
                justifyContent={'space-between'}
                direction={{
                    base: 'row',
                    lg: 'column',
                }}
                width={{
                    base: '100vw',
                    lg: '65px'
                }}
                height={{
                    base: '65px',
                    lg: '100vh',
                }}
                pt={{
                    base: 0,
                    lg: 5,
                }}
                pb={{
                    base: 0,
                    lg: 5,
                }}
                position="fixed"
                zIndex={1}
                top={{
                    base: 'calc(100vh - 65px)',
                    lg: '0'
                }}
                left={0}
            >
                <LinkButton
                    mt={{
                        base: 0,
                        lg: 2,
                    }}
                    textAlign="center"
                    width={'40px'}
                    height={'40px'}
                    variant="ghost"
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    L
                </LinkButton>
                <Stack
                    direction={{
                        base: 'row',
                        lg: 'column',
                    }}
                    mt={{
                        base: 0,
                        lg: 4,
                    }}
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
        </>
    );
}
