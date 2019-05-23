import Dashboard from "views/Dashboard.jsx";
import Central_Cadastros from "views/Central_Cadastros.jsx";
import Atendimento from "views/Atendimento.jsx";
import Financeiro from "views/Financeiro.jsx";
import Aux_financeiro from "views/Aux_financeiro.jsx";

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
    component: Central_Cadastros
  },
  {
    path: "/atendimento",
    layout: "/admin",
    name: "Atendimento",
    icon: "pe-7s-date",
    component: Atendimento
  },
  {
    collapse: true,
    path: "/financeiro",
    layout: "/admin",
    name: "Financeiro",
    icon: "pe-7s-piggy",
    component: Financeiro,
    state: "openComponents",
    views: [
      {
        path: "/Financeiro",
        layout: "/admin",
        name: "Financeiro",
        mini: "FIN",
        component: Financeiro
      },
      {
        path: "/Aux_Financeiro",
        layout: "/admin",
        name: "Aux. Financeiro",
        mini: "AUX",
        component: Aux_financeiro
      }
    ]
  }
];
export default routes;
