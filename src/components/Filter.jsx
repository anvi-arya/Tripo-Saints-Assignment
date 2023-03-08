import React, { useEffect, useState } from "react";
import Teams from "../data/Teams.json";
import JobTitles from "../data/JobTitle.json";

import "./Filter.css";

export const Filter = ({ highlightedTeams, setHighlightedTeams }) => {
  const [showTeam, setShowTeam] = useState(false);
  const [showJobTitle, setJobTitle] = useState(false);
  const [teamCheckBoxes, setTeamCheckBoxes] = useState({});

  useEffect(() => {
    //
    const teams = Object.keys(teamCheckBoxes).filter(
      (team) => teamCheckBoxes[team]
    );
    setHighlightedTeams(teams);
  }, [teamCheckBoxes]);
  useEffect(() => {
    console.log(highlightedTeams);
  }, [highlightedTeams]);

  function onChangeTeamHandler(event, team) {
    setTeamCheckBoxes((prev) => ({
      ...prev,
      [team]: event.target.checked,
    }));
  }
  return (
    <div className="filter-dropdown">
      <div className="primary-checkboxes">
        <label className="teams">
          Teams:
          <input
            value={showTeam}
            onChange={(event) => setShowTeam(event.target.checked)}
            type="checkbox"
            name="teams"
          />
        </label>
        <label className="job-title">
          Job Title :
          <input
            value={showJobTitle}
            onChange={(event) => setJobTitle(event.target.checked)}
            type="checkbox"
            name="job-title"
          />
        </label>
      </div>
      <hr />
      {showTeam ? (
        <div className="team-checkboxes">
          {Teams.map((team) => {
            return (
              <label key={team}>
                {team}{" "}
                <input
                  value={teamCheckBoxes[team]}
                  onChange={(event) => onChangeTeamHandler(event, team)}
                  type="checkbox"
                  name={team}
                />
              </label>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
      <hr />
      {showJobTitle ? (
        <div className="job-title-checkboxes">
          {JobTitles.map((jobTitle) => {
            return (
              <label>
                {jobTitle} <input type="checkbox" name={jobTitle} />
              </label>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
