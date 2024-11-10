import MyLinks from '@/components/MyLinks';
import {techTranslations} from '@/data/groups';
import {Box} from '@chakra-ui/react';

const linksData = [
  {
    name: techTranslations.kata,
    link: '/techniques/katas',
  },
  {
    name: techTranslations.kihos,
    link: '/techniques',
  },
  {
    name: techTranslations.appeals,
    link: '/techniques',
  },
  {
    name: techTranslations.rituals,
    link: '/techniques',
  },
  {
    name: techTranslations.shuji,
    link: '/techniques',
  },
  {
    name: techTranslations.mahos,
    link: '/techniques',
  },
  {
    name: techTranslations.ninjutsu,
    link: '/techniques/ninjutsu',
  },
]

export default function Home() {
  return (
      <Box display="flex" flexDirection="column">
        <MyLinks linksData={linksData}/>
      </Box>
  );
}
