import React, { useState, useEffect } from "react";
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
  AirLineSearchList,
  FlightList,
  HeadersDiv,
} from "./flightSearch.style";

import { Link } from "react-router-dom";
import axios from "axios";
import Details from "../fightdetails/details";
import { DatePicker } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const FlightSearch = () => {
  const avlFlights = [];
  const [isFlight, setFlight] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [show, setShow] = useState(false);
  // const [fDate, setDate] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const data = [
    { flightName: "Air ATOMS" },
    { flightName: "Air India" },
    { flightName: "Vistara" },
    { flightName: "Indigo" },
  ];
  const ListOfAirLines = data.map((d) => (
    <li key={d.flightName}>{d.flightName}</li>
  ));

  const [airLines, setAirLines] = useState([]);
  const [airLinesFilter, setAirLinesFilter] = useState([]);
  useEffect(() => {
    fetchAirLines();
  }, [airLinesFilter]);

  const fetchAirLines = () => {
    return axios
      .get("https://run.mocky.io/v3/510515d9-8167-46bd-99af-033e9984890b")
      .then((res) => {
        setAirLines(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const showFlight = () => {
    setFlight(true);
  };
  const dateFormat = "MM/DD/YYYY";
  const searchFlight = () => {
    airLines.forEach((x) => {
      console.log("Json Date: ", x.flightDate);
      console.log("Selected Date: ", selectedDate);
      const convertedSelectedDate = Date.parse(selectedDate);
      console.log(convertedSelectedDate);
      const jsonDate = Date.parse(x.flightDate);
      console.log(jsonDate);
      if (
        jsonDate === convertedSelectedDate &&
        x.source === from &&
        x.destination === to
      ) {
        avlFlights.push(x);
      }
    });
    setAirLinesFilter(avlFlights);
    console.log(avlFlights);
    showFlight();
  };

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
              <DatePicker
                defaultValue={moment("08/01/2021", dateFormat)}
                format={dateFormat}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
              />
            </DateInput>
            <SourceInput>
              <input
                type="text"
                name="source"
                placeholder="Source"
                onChange={(e) => setFrom(e.target.value)}
              />
            </SourceInput>
            <Destination>
              <input
                type="text"
                name="destination"
                placeholder="Destination"
                onChange={(e) => setTo(e.target.value)}
              />
            </Destination>
            <SearchButton>
              <button type="submit" name="destination" onClick={searchFlight}>
                Search
              </button>
            </SearchButton>
          </SearchDiv>
          <AirLineSearchList isFlight={isFlight}>
            <HeadersDiv>
              <div>Date</div>
              <div>Source</div>
              <div className="destiny">Destination</div>
              <div>View</div>
            </HeadersDiv>
            {airLinesFilter.map((a) => {
              return (
                <>
                  <FlightList key={a.id}>
                    <div className="FlightDate">{a.flightDate}</div>
                    <div className="FlightSource">{a.source}</div>
                    <div className="FlightDestination">{a.destination}</div>
                    <div className="ViewButton">
                      <button onClick={() => setShow(true)} type="button">
                        Flightdetails
                      </button>
                    </div>
                  </FlightList>
                  <Details
                    closeModal={() => setShow(false)}
                    show={show}
                    source={a.source}
                    destination={a.destination}
                  />
                </>
              );
            })}
          </AirLineSearchList>
        </ContainerDiv>
      </MainDiv>
    </>
  );
};

export default FlightSearch;
