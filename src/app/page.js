'use client'

import {InputGroup} from '@/components/ui/input-group';
import {Box, Button, Group, Input} from '@chakra-ui/react';
import {LuX} from 'react-icons/lu';
import {useState} from 'react';
import MyLinks from '@/components/MyLinks';

const linksData = [
    {
        name: 'Техники',
        link: '/techniques',
    },
    {
        name: 'Стойки',
        link: '/techniques',
    },
    {
        name: 'Кланы',
        link: '/techniques',
    },
    {
        name: 'Семьи',
        link: '/techniques',
    },
    {
        name: 'Школы',
        link: '/techniques',
    },
    {
        name: 'Броня',
        link: '/techniques',
    },
    {
        name: 'Оружие',
        link: '/techniques',
    },
    {
        name: 'Свойства предметов',
        link: '/techniques',
    },
    {
        name: 'Состояния',
        link: '/techniques',
    },
    {
        name: 'Местность',
        link: '/techniques',
    },
    {
        name: 'Фигуры',
        link: '/techniques',
    },
]

export default function Home() {
  const [search, setSearch] = useState('')

  return (
      <Box display="flex" flexDirection="column">
          <Group mb={2}>
              <InputGroup flex="1" endElement={search && (
                  <Box position="absolute" top="50%" right="0.5rem" transform="translateY(-50%)">
                      <Button
                          onClick={() => setSearch('')}
                          aria-label="Clear input"
                          size="sm"
                          variant="ghost"
                      >
                          <LuX />
                      </Button>
                  </Box>
              )}>
                  <Input disabled placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)}/>
              </InputGroup>
          </Group>

          <MyLinks linksData={linksData}/>
      </Box>
  );
}
