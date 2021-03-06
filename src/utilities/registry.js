// Controllers
import Home from "Pages/home";
import Login from "Pages/login";
import Signin from "Pages/signin";

import FlightList from "Pages/flightlist";
import details from "Pages/fightdetails/details";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Home: Injector(Home, "Home"),
  Login: Injector(Login, "Login"),
  Signin: Injector(Signin, "Signin"),

  FlightList: Injector(FlightList, "FlightList"),
  Modal_final: Injector(details, "details"),
};



