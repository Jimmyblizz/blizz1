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

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

import img1 from "assets/img/blog-1.jpg";
import img2 from "assets/img/blog-2.jpg";
import img3 from "assets/img/blog-3.jpg";
import img4 from "assets/img/blog-4.jpg";
import img5 from "assets/img/blog-5.jpg";

class ExtendedTables extends Component {
  render() {
    const viewPost = <Tooltip id="view">Ver Imagens</Tooltip>;
    const editPost = <Tooltip id="edit">Laudo</Tooltip>;
    const removePost = <Tooltip id="remove">Apagar Laudo</Tooltip>;

    const actionsPost = (
      <td className="td-actions">
        <OverlayTrigger placement="left" overlay={viewPost}>
          <Button simple icon bsStyle="info">
            <i className="fa fa-image" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="left" overlay={editPost}>
          <Button simple icon bsStyle="success">
            <i className="fa fa-edit" />
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="left" overlay={removePost}>
          <Button simple icon bsStyle="danger">
            <i className="fa fa-times" />
          </Button>
        </OverlayTrigger>
      </td>
    );
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                textCenter
                title="Central de Laudos"
                category="Exames a Laudar"
                tableFullWidth
                content={
                  <Table responsive className="table-bigboy">
                    <thead>
                      <tr>
                        <th className="text-center">Exame</th>
                        <th>Procedimento</th>
                        <th className="th-description">Descricao</th>
                        <th className="text-right">Data</th>

                        <th className="text-right">imgs</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img alt="..." src={img1} />
                          </div>
                        </td>
                        <td className="td-name">RX Membros Superiores</td>
                        <td>
                          Most beautiful agenda for the office, really nice
                          paper and black cover. Most beautiful agenda for the
                          office.
                        </td>
                        <td className="td-number">30/08/2016</td>
                        <td className="td-number">5</td>
                        {actionsPost}
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img alt="..." src={img2} />
                          </div>
                        </td>
                        <td className="td-name">TC Cranio</td>
                        <td>
                          Design is not just what it looks like and feels like.
                          Design is how it works.
                        </td>
                        <td className="td-number">17/07/2016</td>
                        <td className="td-number">1,302</td>
                        {actionsPost}
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img alt="..." src={img3} />
                          </div>
                        </td>
                        <td className="td-name">RM Angio Cranio</td>
                        <td>
                          A groundbreaking Retina display. All-flash
                          architecture. Fourth-generation Intel processors.
                        </td>
                        <td className="td-number">23/06/2016</td>
                        <td className="td-number">1,199</td>
                        {actionsPost}
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img alt="..." src={img4} />
                          </div>
                        </td>
                        <td className="td-name">RX Membros Superiores</td>
                        <td>
                          A desk is a generally wooded piece of furniture and a
                          type of useful table often used in a school or office
                          setting for various academic or professional
                          activities ...
                        </td>
                        <td className="td-number">30/08/2016</td>
                        <td className="td-number">5</td>
                        {actionsPost}
                      </tr>
                      <tr>
                        <td>
                          <div className="img-container">
                            <img alt="..." src={img5} />
                          </div>
                        </td>
                        <td className="td-name">RX Torax Completo</td>
                        <td>
                          The Office Chair adapts naturally to virtually every
                          body and is a permanent fixture.
                        </td>
                        <td className="td-number">10/05/2016</td>
                        <td className="td-number">4</td>
                        {actionsPost}
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
