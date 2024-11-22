import { Table } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { skills } from "@/mockData/routeData/skills";
import MyHoverCard from "@/components/MyHoverCard";
import { translations } from "@/mockData/routeData/constants";

export function MyAnswersSkills({ accumulatedSkills }) {
  const [showAll] = useState(false);
  // console.log(skills.subgroup);

  const skillsToShow = useMemo(() => {
    if (showAll) return Object.entries(accumulatedSkills);
    // eslint-disable-next-line no-unused-vars
    return Object.entries(accumulatedSkills).filter(([_, value]) => value > 0);
  }, [accumulatedSkills, showAll]);

  return (
    <Table.Root size="sm" showColumnBorder>
      <Table.ColumnGroup>
        <Table.Column width="100px" />
        <Table.Column />
        <Table.Column width="50px" />
      </Table.ColumnGroup>
      <Table.Body>
        {skillsToShow.map(([key, value]) => (
          <Table.Row key={key}>
            <Table.Cell textAlign="left">
              {translations[skills[key].subgroup]}
            </Table.Cell>
            <Table.Cell textAlign="left">
              <MyHoverCard cardData={skills[key]} />
            </Table.Cell>
            <Table.Cell textAlign="center">{value}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
