import Dashboard from "views/Dashboard.jsx";
import Central_Cadastros from "views/Central_Cadastros.jsx";
import Atendimento from "views/Atendimento.jsx";
import Financeiro from "views/Financeiro.jsx";
import Aux_financeiro from "views/Aux_financeiro.jsx";
import Faturamento from "views/Faturamento.jsx";
import Laudos from "views/Laudos.jsx";

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
    path: "/laudos",
    layout: "/admin",
    name: "Laudos",
    icon: "pe-7s-file",
    component: Laudos
  },
  {
    collapse: true,
    path: "/financeiro",
    layout: "/admin",
    name: "Financeiro",
    icon: "pe-7s-cash",
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
  },
  {
    collapse: true,
    path: "/faturamento",
    layout: "/admin",
    name: "Faturamento",
    icon: "pe-7s-folder",
    component: Faturamento,
    views: [
      {
        path: "/Faturas",
        layout: "/admin",
        name: "Faturas",
        mini: "FAT",
        component: Faturamento
      }
    ]
  }
];
export default routes;
