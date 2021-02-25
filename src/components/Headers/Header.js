
import React from "react";
import {generatePath, Link } from "react-router-dom";
import axios from 'axios';
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";

const Header = (props) => {
  function GeneratePdf(){
    // props.GetUserToken(username,password);
    console.log(props.token);
    const article = { appID:1 };
    const headers = { 
        'Authorization': `Token ${props.token}`,
        

    };
    axios.post('https://dbit-lor.herokuapp.com/api/generatepdf/', article, { headers })
    .then(
        (response)=>{

            console.log(response.data.downloadLink);

            
        }  
        )
        .catch((error) => {
          console.error(error,"failed to download");
        });

        
    
  }
  console.log(props);
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
                        <CardTitle tag="h5" className="text-uppercase text-muted text-center mb-0">Place New Request for LOR</CardTitle>
                      </div>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Link to="/admin/lor-request">
                        <Button color="default mt-3" type="button">Request LOR</Button>
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
                        <CardTitle tag="h5" className="text-uppercase text-muted text-center mb-0">Get your LOR Approved</CardTitle>
                      </div>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Button color="default mt-3" type="button">Approve LOR</Button>

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle tag="h5" className="text-uppercase text-muted text-center mb-0">Download Your LOR</CardTitle>
                      </div>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Button color="default mt-3" type="button" onClick={GeneratePdf}>Download</Button>

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              {/* <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Performance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
