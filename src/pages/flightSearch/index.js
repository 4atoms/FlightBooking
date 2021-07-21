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

const FlightSearch = () => {
  const avlFlights = [];
  const [isFlight, setFlight] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [show, setShow] = useState(false);
  // const [fDate, setDate] = useState("");
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
      .get("https://run.mocky.io/v3/097b04aa-8ef5-4b4f-841d-5a073bfade84")
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
  const searchFlight = () => {
    airLines.forEach((x) => {
      console.log(x.flightDate);
      // const newDate = new Date(x.flightDate);
      // const day = newDate.getDate();
      // const month = newDate.getMonth();
      // const year = newDate.getFullYear();
      // let date = day + "/" + month + "/" + year;
      // console.log("Formatted Date: ", date);
      // const date1 = newDate.getMilliseconds();
      // console.log("Date1: ", date1);

      // const nDate = new Date(fDate);
      // console.log("nDate: ", nDate);
      // const date2 = nDate.getMilliseconds();
      // console.log("Date2: ", date2);

      // console.log("Difference: ", nDate - date2);
      // const newDate = new Date(fDate);
      // console.log("1: ", newDate.toDateString());
      // const newType =
      // const myDate = new Date("2013/1/16");
      // console.log(myDate);
      // const jsonDate = newDate.getMilliseconds();
      // let newDateString = newDate.toLocaleDateString();
      // console.log("New Date: ", jsonDate);

      // let newDate2 = new Date(fDate);
      console.log();
      if (x.source === from && x.destination === to) {
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
              <input
                type="date"
                name="date"
                placeholder="Date"
                // onChange={(e) => setDate(e.target.value)}
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
              <button
                type="submit"
                name="destination"
                placeholder="Destination"
                onClick={searchFlight}
              >
                Search
              </button>
            </SearchButton>
          </SearchDiv>
          <AirLineSearchList isFlight={isFlight}>
            <HeadersDiv>
              <div>Date</div>
              <div>Source</div>
              <div className="destiny">Destination</div>
              <div></div>
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
                    dateTime = {a. dateTime}
                    airLineName= {a.airLineName}
                    price={a.price}
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
