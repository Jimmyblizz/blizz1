import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Table,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
// react component that creates a switch button that changes from on to off mode
import Switch from "react-bootstrap-switch";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

import StatsCard from "components/Card/StatsCard.jsx";

class ExtendedTables extends Component {
  render() {
    const view = <Tooltip id="view">Detalhes</Tooltip>;
    const edit = <Tooltip id="edit">Editar</Tooltip>;
    const remove = <Tooltip id="remove">Remover</Tooltip>;

    const actions = (
      <td className="td-actions text-right">
        <OverlayTrigger placement="top" overlay={view}>
          <Button simple bsStyle="info" bsSize="xs">
            <i className="fa fa-user" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={edit}>
          <Button simple bsStyle="success" bsSize="xs">
            <i className="fa fa-edit" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={remove}>
          <Button simple bsStyle="danger" bsSize="xs">
            <i className="fa fa-times" />
          </Button>
        </OverlayTrigger>
      </td>
    );
    return (
      <div className="main-content">
        <Col lg={2} sm={6}>
          <StatsCard
            bigIcon={<i className="pe-7s-server text-warning" />}
            statsText="Atendimentos"
            statsValue="37"
            statsIcon={<i className="fa fa-refresh" />}
            statsIconText="Atualizado agora"
          />
        </Col>
        <Col lg={2} sm={6}>
          <StatsCard
            bigIcon={<i className="pe-7s-wallet text-success" />}
            statsText="Receita"
            statsValue="R$9,345"
            statsIcon={<i className="fa fa-calendar-o" />}
            statsIconText="Procedimentos"
          />
        </Col>
        <Col lg={2} sm={6}>
          <StatsCard
            bigIcon={<i className="pe-7s-wallet text-danger" />}
            statsText="Despesa"
            statsValue="R$ 3.564"
            statsIcon={<i className="fa fa-calendar-o" />}
            statsIconText="Custos Fixos"
          />
        </Col>

        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Atendimentos do dia"
                category="Atendimentos do dia a serem realizados"
                tableFullWidth
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className="text-center">#</th>
                        <th>Nome</th>
                        <th>Exame</th>
                        <th className="text-right">Valor</th>
                        <th className="text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>Andrew Mike</td>
                        <td>RX Col Lombar</td>
                        <td className="text-right">R$ 95,00</td>
                        {actions}
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td>John Doe</td>
                        <td>RX Torax</td>
                        <td className="text-right">R$ 70,00</td>
                        {actions}
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td>Anna Mike</td>
                        <td>MG Rotina</td>
                        <td className="text-right">R$ 120,00</td>
                        {actions}
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td>Mike Monday</td>
                        <td>Consulta Orto.</td>
                        <td className="text-right">R$ 75,00</td>
                        {actions}
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td>Paul Dickens</td>
                        <td>RX Joelho 2 Incidencias</td>
                        <td className="text-right">R$ 140,00</td>
                        {actions}
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Atendimento em Aberto"
                category="Fechamento de Caixa"
                tableFullWidth
                content={
                  <Table striped responsive>
                    <thead>
                      <tr>
                        <th className="text-center">#</th>
                        <th>Nome</th>
                        <th>Exame</th>
                        <th className="text-right">VALOR</th>
                        <th className="text-right">Finalizar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>Andrew Mike</td>
                        <td>RX Col Lombar</td>
                        <td className="text-right">R$ 95,00</td>
                        <td className="text-right">
                          <Switch onText="" offText="" defaultValue={false} />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td>John Doe</td>
                        <td>RX Torax</td>
                        <td className="text-right">R$ 70,00</td>
                        <td className="text-right">
                          <Switch onText="" offText="" defaultValue={false} />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td>Anna Mike</td>
                        <td>MG Rotina</td>
                        <td className="text-right">R$ 120,00</td>
                        <td className="text-right">
                          <Switch onText="" offText="" />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td>Mike Monday</td>
                        <td>Consulta Orto.</td>
                        <td className="text-right">R$ 75,00</td>
                        <td className="text-right">
                          <Switch onText="" offText="" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ExtendedTables;
