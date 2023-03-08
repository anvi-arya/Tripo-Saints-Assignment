import { useState, useEffect } from "react";
import {
  ActionIcon,
  Button,
  Checkbox,
  Flex,
  Group,
  Popover,
  Space,
  Text,
} from "@mantine/core";

import JobTitles from "../data/JobTitle.json";
import Teams from "../data/Teams.json";
import { IconFilter } from "@tabler/icons-react";

function FilterButton({
  teamValue,
  setTeamValue,
  jobTitleValue,
  setJobTitleValue,
}) {
  useEffect(() => {
    console.log(teamValue);
  }, [teamValue]);
  return (
    <Popover ml="auto" width={400} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <ActionIcon>
          <IconFilter />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown
        component={Flex}
        sx={{ gap: "1em", justifyContent: "space-evenly" }}
      >
        <Popover width={400} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Checkbox component={Button} label="Job Title" />
          </Popover.Target>
          <Popover.Dropdown>
            <Checkbox.Group
              label="Job Titles"
              description="Choose Job Titles to highlight"
              value={jobTitleValue}
              onChange={setJobTitleValue}
            >
              <Group mt="xs">
                {JobTitles.map((jobTitle) => (
                  <Checkbox key={jobTitle} value={jobTitle} label={jobTitle} />
                ))}
              </Group>
            </Checkbox.Group>
          </Popover.Dropdown>
        </Popover>
        <Space my="lg" />
        <div>
          <Popover width={400} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Checkbox component={Button} label="Teams" />
            </Popover.Target>
            <Popover.Dropdown>
              <Checkbox.Group
                label="Teams"
                description="Choose teams to highlight"
                value={teamValue}
                onChange={setTeamValue}
              >
                <Group mt="xs">
                  {Teams.map((team) => (
                    <Checkbox key={team} value={team} label={team} />
                  ))}
                </Group>
              </Checkbox.Group>
            </Popover.Dropdown>
          </Popover>
        </div>
      </Popover.Dropdown>
    </Popover>
  );
}

export default FilterButton;
