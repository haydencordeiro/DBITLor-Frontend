/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Link } from "react-router-dom";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";

const TeacherHeader = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="4" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted text-center mb-0">Total Pending Requests</CardTitle>
                      </div>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Link to="/teacher/lor-form">
                        <Button color="default mt-3" type="button">25</Button>
                      </Link>
                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted text-center mb-0">Total Approved Requests</CardTitle>
                      </div>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Button color="default mt-3" type="button">30</Button>

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted text-center mb-0">Total Rejected Requests</CardTitle>
                      </div>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Button color="default mt-3" type="button">5</Button>

                    </Row>

                  </CardBody>
                </Card>
              </Col>
             
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TeacherHeader;
