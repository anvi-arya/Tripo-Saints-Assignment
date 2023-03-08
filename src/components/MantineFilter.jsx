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
import "./Filter.css";

function FilterButton({
  teamValue,
  setTeamValue,
  jobTitleValue,
  setJobTitleValue,
}) {
  const [showTeams, setshowTeams] = useState(false);
  const [showJobTitles, setshowJobTitles] = useState(false);
  useEffect(() => {
    console.log(teamValue);
  }, [teamValue]);
  useEffect(() => {
    if (!showTeams) {
      setTeamValue([]);
    }
  }, [showTeams]);
  useEffect(() => {
    if (!showJobTitles) {
      setJobTitleValue([]);
    }
  }, [showJobTitles]);
  return (
    <Popover ml="auto" width={800} position="bottom-end" withArrow shadow="md">
      <Popover.Target>
        <ActionIcon>
          <IconFilter />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown
        className="check-box-shadow"
        component={Flex}
        sx={{ gap: "1em", justifyContent: "space-evenly" }}
      >
        <Popover
          width={400}
          position="bottom"
          withArrow
          shadow="md"
          opened={showJobTitles}
        >
          <Popover.Target>
            <Checkbox
              value={showJobTitles}
              onChange={(e) => setshowJobTitles(e.target.checked)}
              component={Button}
              label="Job Title"
            />
          </Popover.Target>
          <Popover.Dropdown className="check-box-shadow">
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
          <Popover
            width={400}
            position="bottom"
            withArrow
            shadow="md"
            opened={showTeams}
          >
            <Popover.Target>
              <Checkbox
                value={showTeams}
                onChange={(e) => setshowTeams(e.target.checked)}
                component={Button}
                label="Teams"
              />
            </Popover.Target>
            <Popover.Dropdown className="check-box-shadow">
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
