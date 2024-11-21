import { Table } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { skills } from "@/mockData/routeData/skills";

export function MyAnswersSkills({ accumulatedSkills }) {
  const [showAll] = useState(false);

  const skillsToShow = useMemo(() => {
    if (showAll) return Object.entries(accumulatedSkills);
    // eslint-disable-next-line no-unused-vars
    return Object.entries(accumulatedSkills).filter(([_, value]) => value > 0);
  }, [accumulatedSkills, showAll]);

  return (
    <Table.Root size="sm">
      <Table.Body>
        {skillsToShow.map(([key, value]) => (
          <Table.Row key={key}>
            <Table.Cell textAlign="left">{skills[key].title}</Table.Cell>
            <Table.Cell textAlign="right">{value}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
