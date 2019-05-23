import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
// react component used to create charts
import ChartistGraph from "react-chartist";
// react components used to create a SVG / Vector map

import Card from "components/Card/Card.jsx";
import StatsCard from "components/Card/StatsCard.jsx";

import {
  dataPie,
  dataSales,
  optionsSales,
  responsiveSales,
  table_data
} from "variables/Variables.jsx";

class Dashboard extends Component {
  createTableData() {
    var tableRows = [];
    for (var i = 0; i < table_data.length; i++) {
      tableRows.push(
        <tr key={i}>
          <td>
            <div className="flag">
              <img src={table_data[i].flag} alt="us_flag" />
            </div>
          </td>
          <td>{table_data[i].country}</td>
          <td className="text-right">{table_data[i].count}</td>
          <td className="text-right">{table_data[i].percentage}</td>
        </tr>
      );
    }
    return tableRows;
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col lg={2} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Atendimentos"
                statsValue="37"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={2} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Receita"
                statsValue="R$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Aberto"
              />
            </Col>
            <Col lg={2} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Consultas"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
          </Row>
          <Row />
          <Row>
            <Col md={4}>
              <Card
                title="Modalidade"
                category="Atendimento por modalidade"
                content={<ChartistGraph data={dataPie} type="Pie" />}
                legend={
                  <div>
                    <i className="fa fa-circle text-info" /> MG
                    <i className="fa fa-circle text-danger" />
                    RX
                    <i className="fa fa-circle text-warning" /> Consulta
                  </div>
                }
                stats={
                  <div>
                    <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Agenda de Horarios"
                category="Ultimas 24hrs"
                content={
                  <ChartistGraph
                    data={dataSales}
                    type="Line"
                    options={optionsSales}
                    responsiveOptions={responsiveSales}
                  />
                }
                legend={
                  <div>
                    <i className="fa fa-circle text-info" /> Agendado
                    <i className="fa fa-circle text-danger" /> Atendido
                    <i className="fa fa-circle text-warning" /> Em Espera
                  </div>
                }
                stats={
                  <div>
                    <i className="fa fa-history" /> Atualizado ultimos 3 min
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
