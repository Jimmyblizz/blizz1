import Dashboard from "views/Dashboard.jsx";
import Cent_Cadastros from "views/Cent_Cadastros.jsx";

var routes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/cadastros",
    layout: "/admin",
    name: "Central de Cadastros",
    icon: "fa far fa-address-card",
    component: Cent_Cadastros
  }
];
export default routes;
