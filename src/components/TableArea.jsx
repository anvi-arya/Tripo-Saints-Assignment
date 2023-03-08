import React from "react";
import TableData from "../data/TableData.json";
import { Chair } from "./Chair";
import "./TableArea.css";

export const TableArea = ({
  highlightedTeams,
  highlightedJobTitles,
  searchedEmployeeValue,
}) => {
  // array of chairs {table1.chair1:false}

  return (
    <div className="container">
      {/* dynamically injecting tables */}
      {TableData.map((table, indexTable) => {
        return (
          <div key={indexTable} className="table">
            Table {indexTable + 1}
            {table.map((chair, indexChair) => {
              return (
                <Chair
                  chair={chair}
                  highlighted={
                    highlightedTeams.includes(chair?.team) ||
                    highlightedJobTitles.includes(chair?.jobTitle) ||
                    searchedEmployeeValue === chair?.name
                  }
                  indexChair={indexChair}
                  key={indexChair}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
