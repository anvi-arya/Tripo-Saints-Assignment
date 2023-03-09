--Employee tracking app

 Spot (Sitting + Bot)

 (i) It is a small web application naming "Spot" which main purpose is to help authorized personnel to look 
     at employees and see who is sitting where and doing what, all on a single screen.

(ii) There are two indicators which has been implemented to know if a seat is vacant or occupied by an employee
     (a) Occupied seat
     (b) Vacant seat

(iii) Rolling over or hovering on a particular seat gives details of an employee and its current project.
      If the seat is vacant, means no employee sitting there, hence no information will display.

(iv)  A user will also be able to search for an employee name to get his location in the office.

(v)  A Filter functionality has also been implemented which helps to see employees by Highlighting position of multiple
     employees that are:
     (a) Part of a Team
     (b) Part of Group or JobTitle


--Synopsis:

  1. First of all this a small web application built using React js framework bundled using vite. As any expanding company needs to keep a 
  track of employees and their ongoing projects. Hence using Excel sheets for such a purpose could be time consuming and
  boring. This application comes to rescue. The main purpose is to let authorized personnel to look at employess and see
  who is sitting where and doing what, all on a single screen.

  2. After going through many ideas and imagination as how to break this application functionality into structural components,
     I got this approach to implement and it works well.

     (i) For displaying Table and chair, I made an array of "Tables" where all table will be stored as its elements.
         Now again each "Table" element inside "Tables" array will be having 4 "chairs" that will be stored as objects.

     (ii) Each "Chair" which actually is an object will contain information in key:value pair.
          Each chair represent an employee.
          The infprmation is like: 
          "name": "value",
          "team": "value",
          "jobTitle": "Value",
          "currentProject": "value",
          "avatar": "Value"
     note: the chair could have all those properties or it could be null

    (iii) I have made 3 separate json data files to populate and depopulate the "Tables" array.

    (iv) I have implemented a functionality using react hooks and css where user can "hover" on a particular
         occupied chair and a card will appear showing information of that particular employee, for eg. name, jobTitle, project etc.
    
    (v) I have implemented searchBar with input, Filter button with dropdown menu using Mantine library version 6". 
         The SearchBar is used to search particular employee name and highlight particular chair with blue color if seat 
         is not vacant. The Filter button once clicked opens a dropdown menu where two check boxes: Teams and jobTitle are 
         there. The Teams and JobTitle checkboxes are further clicked to get a dropdown menu of avilable "Teams" and
         "JobTitle".

         Finally user can click on a particular Checkbox of a particular Team or JobTitle to get position and the corresponding 
         chair will be highlighted if seat is not vacant.

    (vi) I have used useState to set the State of checkboxes as whether they are checked or unchecked.

    (vii) I have given null value to the particular object of "Table" array where Chair is empty ie. no employee sitting 
          on the chair.

   (Viii) The "vacant chair" is denoted by "light grey color" and "occupied chair" is denoted by "black color"







--Tech or Framework used:

      In this project, I used the React library version 18 I chose to use React because of its fast rendering capabilities and component-based architecture,
      composition of components and it's ability to automatically update components when data changes which allows for easy reusability of code.

--External library or dependencies used
      
      In this project, I used the Mantine library version 6 Mantine is a React components and hooks library which 
      provides a set of customizable UI components and utilities. I chose to use Mantine because it allowed to quickly
      build a responsive and accessible UI for our application, without the need to write too much custom CSS.

--Code Explanation

      React Components:
       
      Custom components used:
      1. Logo
      2. SearchBar
      3. TableArea

      -Explaining Components:
       
       App.jsx:

       It is a file where I've created React Component named "App" that renders a logo, a searchMenu and a TableArea.
       The useState hook is used to define three state variables: highlightedTeams, highlightedJobTitles, and searchEmployeeValue. 
       These variables are initialized with empty arrays and an empty string, respectively. These variables act as the global state 
       for reflecting the changes from filter component to the table area.

       The MantineProvider component is used to provide Mantine theme and global styles to the entire application. The Container 
       component is used to keep the UI in the middle of the page even on bigger screens

       The Logo component is a custom component that renders a company logo.

       The SearchMenu component is a custom component that accepts multiple props: jobTitleValue, setJobTitleValue, setTeamValue,
       teamValue, searchEmployeeValue, and setsearchEmployeeValue. These props  

       The useState hook is used to define the state variables for the selected job titles, selected teams, and search value.

       The TableArea component is a custom component that accepts multiple props: highlightedTeams, highlightedJobTitles, and 
       searchedEmployeeValue. These props are used to filter and display a table of employees based on the selected job titles,
       selected teams, and search value.

       
      Logo.jsx:

      It is a file in react where a React Component named "Logo" that renders  a logo named "Spot".

      The Logo component is defined as a functional component using an arrow function. It returns 
      a div element with the class name of "logo-design" and the text content of "Spot".

      SearchBar.jsx:

      "SearchMenu" is an custom component in React which creates a search menu using Mantine UI components. The search menu 
      includes a text input field for searching employees and a button that opens a filter menu for filtering employees by
      job title and team.

      The component takes in the following props:

      jobTitleValue: The current selected job title filter value
      setJobTitleValue: A function to update the selected job title filter value
      setTeamValue: A function to update the selected team filter value
      teamValue: The current selected team filter value
      searchEmployeeValue: The current search value for employee name
      setsearchEmployeeValue: A function to update the search value for employee name


      This component returns a component (flexbox) that contains the TextInput component forsearching employees and the FilterButton
      component for filtering employees.

      The onChange function of the TextInput component updates the searchEmployeeValue state using the setsearchEmployeeValue 
      function when the value of the input field changes.

      The FilterButton component is passed the necessary props to update the jobTitleValue, setJobTitleValue, setTeamValue, 
      and teamValue state values when a filter is selected.


      

     MantineFilter.jsx:

     "FilterButton" is an custom component in React which creates a a filter button using Mantine UI components and a filter icon from 
     @tabler/icons-react, The filterbutton opens a pop-up menu with two filter options: job titles and teams.

      The component takes in the following props:

      teamValue: The current selected team filter value
      setTeamValue: A function to update the selected team filter value
      jobTitleValue: The current selected job title filter value
      setJobTitleValue: A function to update the selected job title filter value

      The component returns a Popover component that contains an ActionIcon component for displaying the filter button. When
      the filter button is clicked, a Popover.Dropdown component is displayed with two Popover components for the job titles
      and teams filters.

      The showJobTitles and showTeams state values determine whether the corresponding filters are displayed or not. When the 
      showJobTitles state value changes, the Popover component for the job titles filter is opened or closed. Similarly, when 
      the showTeams state value changes, the Popover component for the teams filter is opened or closed.

      The jobTitleValue and teamValue state values determine which job titles and teams are currently selected. The setJobTitleValue
      and setTeamValue functions update these state values when the user selects or deselects a filter option.

      The component also includes useEffect hooks to reset the jobTitleValue and teamValue state values when the corresponding filters 
      are closed. When the showJobTitles state value changes and the job titles filter is closed, the jobTitleValue state value 
      is reset to an empty array. Similarly, when the showTeams state value changes and the teams filter is closed, the teamValue
      state value is reset to an empty array.

      The JobTitles and Teams arrays are imported from separate JSON files and used to populate the filter options in the Popover 
      components. Each filter option is displayed as a Checkbox component that can be selected or deselected by the user. 
      The selected filter options are displayed in the filter button label.



      TableArea.jsx:

      The "TableArea" functional custom component is used here to displays a table with chairs, where each chair may or may not be
      highlighted based on whether any employee is sitting on it or not.

      The TableArea component receives three props:

      highlightedTeams: an array of teams to be highlighted.
      highlightedJobTitles: an array of job titles to be highlighted.
      searchedEmployeeValue: a string representing the name of the employee being searched.

      The component then maps over the "TableData" array to dynamically render the tables and their corresponding chairs. Each chair is
      rendered using the Chair component, which receives the following props:

      chair: an object representing the chair's properties.
      highlighted: a boolean indicating whether or not the chair should be highlighted based on the criteria specified in the TableArea props.
      indexChair: an integer representing the index of the chair in the table.
      key: a unique identifier for the chair component.


      Chair.jsx:

      Here a component named "Chair" which is used in the TableArea component.

      It renders a chair with some information about an employee sitting on it if the chair is occupied. The information about the employee is
      displayed on hovering over the chair.

      The Chair component receives three props:

      chair: an object with information about the employee sitting on the chair, if the chair is occupied. If the chair is not occupied, it is set to null.
      indexChair: the index of the chair in the table.
      highlighted: a boolean value indicating whether the chair should be highlighted or not based on search criteria.

      The component contains a state variable "hover" that is used to determine whether the employee information should be displayed or not.

      The showPerson and hidePerson functions are called respectively when the mouse enters and leaves the chair component. They update the "hover"
      state variable to control the display of the employee information.

      The Chair component renders two div elements:

      The first div renders the chair as a square with a background color. If the chair is occupied, the chair-occupied class is added to the div to show a different style.
      The second div renders the employee information in a card format. It is only displayed if the chair prop is not null and the mouse is hovering over the chair. 
      The employee-card-hover class is added to the div to show a different style.

      The employee information includes:

      An avatar of the employee.
      The job title and name of the employee.
      The team and current project of the employee.


      logo.css:

      This is a CSS style for a logo with a circular shape, a gray background, and white text. It has a width and height of 100px and is centered using the grid and place-items properties.
      The font used is Tahoma, with a size of 2rem and a weight of 600. It also has a margin-top of 1em.


      SearchBar.css:

      This CSS code defines a search bar with an input field. The search bar takes up the full width of its container. The input field is floated to the right and has a fixed width of 200px.
      The overflow: hidden property ensures that any content that exceeds the width of the container is hidden.


      TableArea.css:

      The "container" class styles a container element that holds the tables and chairs.

      It has a padding of 5em at the top and bottom and 1em on the left and right.

      It has a background-color of white and a border of 1px solid black.

      It uses display: flex to align the tables horizontally and flex-wrap: wrap to wrap
      them to the next line when the container is not wide enough. 

      It also uses justify-content: center and align-items: center to center the content
      vertically and horizontally within the container.

      The gap property creates a gap of 5em between the tables.

      The .table class styles each table element.

      It has a z-index of 2, which positions it above the chairs. It uses display: flex to
      center the chairs vertically and horizontally.
      
      It has a z-index of 2, which positions it above the chairs. It uses display: flex to 
      center the chairs vertically and horizontally.

      It has a fixed width of 250px and a fixed height of 150px. It has a background-color 
      of #ccc and no border, but an outline of 2px solid white.


      Chair.css:

      The "chair" class defines styles for an individual chair, with a circular shape and a gray background color by default.

      The chair-occupied class is used to style chairs that are currently occupied, with a black background color and no border.

      The chair-highlighted class is used to style chairs that are being highlighted, with a blue background color.

      There are also specific styles for each of the four chairs, with different clip-path values to create a triangular shape for each chair. 

      The employee-card class defines styles for an individual employee card, which is positioned absolutely on top of the corresponding chair when the chair is occupied.

      The opacity, pointer-events, and transform properties are used to make the employee card invisible and non-interactive by default, and then visible and interactive when the corresponding chair is hovered over.



      Filter.css:

      This CSS class adds a box shadow effect to an element. 


--Data Folder Contains Json Data Files to be used in Application:

 (1) Teams.Json
 (2) TableData.json
 (3) jobTitle.Json
 (4) EmpName.json
















