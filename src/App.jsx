import { Filter } from "./components/Filter";
import { TableArea } from "./components/TableArea";
import { Logo } from "./components/Logo";
import SearchMenu from "./components/SearchBar";
import { useState } from "react";
import { Container, MantineProvider } from "@mantine/core";
import FilterButton from "./components/MantineFilter";

function App() {
  const [highlightedTeams, setHighlightedTeams] = useState([]);
  const [highlightedJobTitles, setHighlightedJobTitle] = useState([]);
  const [searchEmployeeValue, setsearchEmployeeValue] = useState("");

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="lg">
        <Logo />

        <SearchMenu
          jobTitleValue={highlightedJobTitles}
          setJobTitleValue={setHighlightedJobTitle}
          setTeamValue={setHighlightedTeams}
          teamValue={highlightedTeams}
          searchEmployeeValue={searchEmployeeValue}
          setsearchEmployeeValue={setsearchEmployeeValue}
        />

        <TableArea
          highlightedTeams={highlightedTeams}
          highlightedJobTitles={highlightedJobTitles}
          searchedEmployeeValue={searchEmployeeValue}
        />
      </Container>
    </MantineProvider>
  );
}

export default App;
