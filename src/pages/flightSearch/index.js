import React from "react";
import {
  MainDiv,
  LogoDiv,
  LogOutButton,
  SkyDiv,
  ContainerDiv,
  ListOfFlights,
  SearchDiv,
  DateInput,
  SourceInput,
  Destination,
  SearchButton,
} from "./flightSearch.style";

import { Link } from "react-router-dom";

const FlightSearch = () => {
  const data = [
    { flightName: "Air ATOMS" },
    { flightName: "Air India" },
    { flightName: "Vistara" },
    { flightName: "Indigo" },
  ];
  const ListOfAirLines = data.map((d) => (
    <li key={d.flightName}>{d.flightName}</li>
  ));
  return (
    <>
      <MainDiv>
        <SkyDiv>
          <h2>Sky is not the Limit</h2>
        </SkyDiv>
        <LogoDiv>
          <h1>Air ATOMS</h1>
        </LogoDiv>
        <LogOutButton>
          <Link to="/Login">Log Out</Link>
        </LogOutButton>
        <ContainerDiv>
          <ListOfFlights>
            <h2>List of Flights</h2>
            {ListOfAirLines}
          </ListOfFlights>
          <SearchDiv>
            <DateInput>
              <input type="date" name="date" placeholder="Date" />
            </DateInput>
            <SourceInput>
              <input type="text" name="source" placeholder="Source" />
            </SourceInput>
            <Destination>
              <input type="text" name="destination" placeholder="Destination" />
            </Destination>
            <SearchButton>
              <button
                type="submit"
                name="destination"
                placeholder="Destination"
              >
                Search
              </button>
            </SearchButton>
          </SearchDiv>
        </ContainerDiv>
      </MainDiv>
    </>
  );
};

export default FlightSearch;
