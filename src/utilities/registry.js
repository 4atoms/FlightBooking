// Controllers
import Home from "Pages/home";
import Login from "Pages/login";
import FlightList from "Pages/flightlist";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Home: Injector(Home, "Home"),
  Login: Injector(Login, "Login"),
  FlightList: Injector(FlightList, "FlightList"),
};
