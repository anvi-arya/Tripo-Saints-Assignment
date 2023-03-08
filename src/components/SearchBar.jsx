import { Flex, TextInput } from "@mantine/core";
import { useState } from "react";
import FilterButton from "./MantineFilter";

function SearchMenu({
  jobTitleValue,
  setJobTitleValue,
  setTeamValue,
  teamValue,
  searchEmployeeValue,
  setsearchEmployeeValue,
}) {
  return (
    <Flex ml="auto" w="200px" justify="center" align="center" pb="sm" gap="sm">
      <TextInput
        onChange={(e) => setsearchEmployeeValue(e.target.value)}
        value={searchEmployeeValue}
        placeholder="Search Employee"
      />
      <FilterButton
        jobTitleValue={jobTitleValue}
        setJobTitleValue={setJobTitleValue}
        setTeamValue={setTeamValue}
        teamValue={teamValue}
      />
    </Flex>
  );
}

export default SearchMenu;
