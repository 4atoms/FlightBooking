// Controllers
import Home from "Pages/home";
import Login from "Pages/login";
import Modal_final from "../pages/fightdetails";

function Injector(component, name) {
  const hoc = component;
  hoc.displayName = name;

  return hoc;
}

export default {
  Home: Injector(Home, "Home"),
  Modal_final: Injector(Modal_final, "Modal_final"),
  Login: Injector(Login, "Login"),
};
