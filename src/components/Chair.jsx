import { Group, Avatar, Text, Button, Flex } from "@mantine/core";
import React, { useState, useEffect } from "react";

import "./Chair.css";

export const Chair = ({ chair, indexChair, highlighted }) => {
  const [hover, setHover] = useState(false);
  const showPerson = (employee) => {
    setHover(true);
  };
  const hidePerson = (employee) => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={() => showPerson(chair)}
      onMouseLeave={() => hidePerson(chair)}
    >
      <div
        className={`chair chair-${indexChair} ${
          chair !== null ? "chair-occupied" : ""
        } ${highlighted ? "chair-highlighted" : ""}`}
      ></div>

      {chair !== null && (
        <div
          className={`employee-card employee-card-${indexChair} ${
            hover ? "employee-card-hover" : ""
          }`}
        >
          <Flex direction="column" w={200} gap="md">
            <Flex gap="lg">
              <Avatar src={chair.avatar} radius={"50%"} size={65} />
              <div>
                <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                  {chair.jobTitle}
                </Text>
                <Text fw={500}>{chair.name}</Text>
              </div>
            </Flex>

            <Flex direction="column">
              <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                Team
              </Text>
              <Text fw={500}>{chair.team}</Text>
            </Flex>

            <Flex direction="column">
              <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                Current Project
              </Text>
              <Text fw={500}>{chair.currentProject}</Text>
            </Flex>
          </Flex>
        </div>
      )}
    </div>
  );
};
