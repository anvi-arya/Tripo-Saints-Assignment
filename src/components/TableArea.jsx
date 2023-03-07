import React from "react";
import TableData from "../data/TableData.json";
import "./TableArea.css";

export const TableArea = () => {
  return (
    <div className="container">
      {/* dynamically injecting tables */}
      {TableData.map((table, indexTable) => {
        return (
          <div key={indexTable} className="table">
            Table {indexTable + 1}
            {table.map((chair, indexChair) => {
              return (
                <div key={indexChair}>
                  <div
                    className={`chair chair-${indexChair} ${
                      chair !== null ? "chair-occupied" : ""
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
