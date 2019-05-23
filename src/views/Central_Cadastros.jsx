import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Table,
  Form,
  Nav,
  NavItem,
  Tooltip,
  OverlayTrigger,
  Tab
} from "react-bootstrap";

import { PanelGroup, Panel } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import UserCard from "components/Card/UserCard.jsx";
import avatar from "assets/img/default-avatar.png";

class UserPage extends Component {
  isMac() {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf("MAC") >= 0 ||
      navigator.platform.toUpperCase().indexOf("IPAD") >= 0
    ) {
      bool = true;
    }
    return bool;
  }

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

    const busca = <Tooltip id="busca">Buscar</Tooltip>;
    const buscar = (
      <OverlayTrigger placement="top" overlay={busca}>
        <Button simple bsStyle="dark" block>
          <i className="fa fa-search" />
        </Button>
      </OverlayTrigger>
    );

    const tabsBusca = (
      <Tab.Container>
        <Grid fluid>
          <Row className="clearfix">
            <Col sm={10}>
              <FormInputs
                ncols={["col-sm-5", "col-sm-5", "col-sm-12"]}
                proprieties={[
                  {
                    label: "Pontuário",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "N° Prontuário"
                  },
                  {
                    label: "Data Nasc.",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "15/02/1985"
                  },
                  {
                    label: "Nome Completo",
                    type: "text",
                    bsClass: "form-control",
                    placeholder: "Nome Completo"
                  }
                ]}
              />
            </Col>
            <Col sm={2}>{buscar}</Col>
          </Row>
        </Grid>
      </Tab.Container>
    );

    const tabsIcons = (
      <Tab.Container id="tabs-with-dropdown" defaultActiveKey="paciente">
        <Grid fluid>
          <Row className="clearfix">
            <Col sm={12}>
              <form>
                <Form horizontal>
                  <Grid fluid>
                    <div class="btn-toolbar">
                      <Button bsStyle="danger" pullRight fill type="submit">
                        Excluir
                      </Button>
                      <Button bsStyle="info" pullRight fill type="submit">
                        Editar
                      </Button>
                      <Button bsStyle="success" pullRight fill type="submit">
                        Salvar
                      </Button>
                    </div>
                    <h3> </h3>
                  </Grid>
                </Form>

                <FormInputs
                  ncols={[
                    "col-sm-2 col-xs-6",
                    "col-sm-2 col-xs-6",
                    "col-sm-3 col-xs-6",
                    "col-sm-1 col-xs-6",
                    "col-sm-2 col-xs-6",
                    "col-sm-2 col-xs-6"
                  ]}
                  proprieties={[
                    {
                      label: "Prontuario",
                      type: "text",
                      bsClass: "form-control",
                      defaultValue: "10005789",
                      disabled: true
                    },
                    {
                      label: "UserName",
                      type: "text",
                      bsClass: "form-control",
                      defaultValue: "Thiago.Nascimento",

                      disabled: true
                    },
                    {
                      label: "Nome Completo",
                      type: "text",
                      bsClass: "form-control",
                      placeholder: "Digite aqui o nome completo",
                      className: "valid",
                      defaultValue: "Thiago Nascimento Blizz Castro"
                    },
                    {
                      label: "Sexo",
                      type: "text",
                      bsClass: "form-control cpf-mask",
                      placeholder: "Masculino / Feminino",
                      defaultValue: "Mas."
                    },
                    {
                      label: "CPF",
                      type: "text",
                      bsClass: "form-control cpf-mask",
                      placeholder: "Número do CPF",
                      defaultValue: "000.000.000-00"
                    },
                    {
                      label: "RG",
                      type: "text",
                      bsClass: "form-control",
                      placeholder: "Digite aqui seu RG",
                      defaultValue: "MG-5599553"
                    }
                  ]}
                />
                <Grid fluid />
                <Grid fluid>
                  <PanelGroup
                    id="panels"
                    ref="panels"
                    onClick={() => this.forceUpdate()}
                  >
                    <Panel eventKey="1">
                      <Panel.Heading>
                        <Panel.Title toggle>
                          Contatos
                          <b className="caret" />
                        </Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>
                        <FormInputs
                          ncols={[
                            "col-sm-3",
                            "col-sm-3",
                            "col-sm-3",
                            "col-sm-3"
                          ]}
                          proprieties={[
                            {
                              label: "Telefone 1",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Número de Telefone",
                              defaultValue: "(99) 99999-9999"
                            },
                            {
                              label: "Telefone 2",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Número de Telefone",
                              defaultValue: "(88) 88888-8888"
                            },
                            {
                              label: "whatsApp",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Número do WhatsApp",
                              defaultValue: "(99) 99999-9999"
                            },
                            {
                              label: "E-mail",
                              type: "email",
                              bsClass: "form-control",
                              placeholder: "Endereço de E-mail",
                              defaultValue: "Exemplo@email.com"
                            }
                          ]}
                        />
                      </Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                      <Panel.Heading>
                        <Panel.Title toggle>
                          Endereco
                          <b className="caret" />
                        </Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>
                        <FormInputs
                          ncols={[
                            "col-sm-2",
                            "col-sm-5",
                            "col-sm-2",
                            "col-sm-3",
                            "col-sm-4",
                            "col-sm-4",
                            "col-sm-4"
                          ]}
                          proprieties={[
                            {
                              label: "CEP",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "CEP",
                              defaultValue: "30300-031"
                            },
                            {
                              label: "Endereço",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Rua / Av ",
                              defaultValue: "Av Jóse Barcelos"
                            },
                            {
                              label: "Número",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Número",
                              defaultValue: "1215"
                            },
                            {
                              label: "Complemento",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Apto / Casa",
                              defaultValue: "Apto 402"
                            },
                            {
                              label: "Bairro",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Nome do Bairro",
                              defaultValue: "Vila Militar"
                            },
                            {
                              label: "Cidade",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Cidade",
                              defaultValue: "Belo Horizonte"
                            },
                            {
                              label: "Estado",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Estado",
                              defaultValue: "Minas Gerais"
                            }
                          ]}
                        />
                      </Panel.Body>
                    </Panel>
                  </PanelGroup>
                </Grid>
                <div className="clearfix" />
              </form>
            </Col>
            <Col sm={12}>
              <Nav bsStyle="tabs">
                <NavItem eventKey="paciente">
                  <i className="fa fas fa-user" /> Paciente
                </NavItem>
                <NavItem eventKey="funcionario">
                  <i className="fa far fa-id-badge" /> Funcionário
                </NavItem>
                <NavItem eventKey="medico">
                  <i className="fa fas fa-user-md" /> Médico
                </NavItem>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="paciente">
                  <FormInputs
                    ncols={["col-sm-3", "col-sm-3"]}
                    proprieties={[
                      {
                        label: "Plano de Saúde",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Informe o Plano de Saúde",
                        defaultValue: "UNIMED"
                      },
                      {
                        label: "Titular",
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "Informe titular"
                      }
                    ]}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="funcionario" />
                <Tab.Pane eventKey="medico" />
              </Tab.Content>
            </Col>
          </Row>
        </Grid>
      </Tab.Container>
    );

    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col sm={8} lg={9}>
              <Card ctFullWidth content={tabsIcons} />
            </Col>
            <Col sm={4} lg={3}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Tania Andrew"
                userName="tania123"
                email="email@exemplo"
                description={
                  <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                  </span>
                }
              />
              <Card tableFullWidth content={tabsBusca} />
              <Card
                tableFullWidth
                content={
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Prontuário</th>
                        <th>Name</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>101001</td>
                        <td>Andrew Mike</td>
                        {actions}
                      </tr>
                      <tr>
                        <td>101002</td>
                        <td>John Doe</td>
                        {actions}
                      </tr>
                      <tr>
                        <td>101003</td>
                        <td>Alex Mike</td>
                        {actions}
                      </tr>
                      <tr>
                        <td>101004</td>
                        <td>Mike Monday</td>
                        {actions}
                      </tr>
                      <tr>
                        <td>101005</td>
                        <td>Paul Dickens</td>
                        {actions}
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

export default UserPage;
