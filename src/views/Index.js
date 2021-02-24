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
import React, { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
// import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
// reactstrap components

import axios from 'axios';

import { Steps } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import 'assets/css/styles.css';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  // CardTitle,
  // NavItem,
  // NavLink,
  // Nav,
  // Progress,
  // Table,
  Container,
  Row,
  Col,
} from "reactstrap";



// core components
import {
  chartOptions,
  parseOptions,
  // chartExample1,
  // chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
// import { TRUE } from "node-sass";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  // useEffect(() => {
  //     var access_token="44c5f2df36420898817d76dde745c18e8c526d54"
  //     // console.log(`${process.env.API_URL}api/loggedinteachereditapplications/`);
  //     axios.get(`https://dbit-lor.herokuapp.com/api/loggedinteachersapplications/`, {
  //       headers: {
  //         'Authorization': `Token 44c5f2df36420898817d76dde745c18e8c526d54`
  //       }
  //     })
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  //   }, [])

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  const timelineStyles = {
    // width: '200px',
    height: '100%',
    display: 'inline-table',
    verticalAlign: 'top',
    color: 'white'
  };

  return (
    <>
      <Header />

      {/* Page content */}
      <Container className="mt--7" fluid>

        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Status
                    </h6>
                    <h2 className="text-white mb-0">Latest LOR Status</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <div className="verticalTimeline">
                    <Steps current={1} vertical style={timelineStyles}>
                      <Steps.Item title="Finished" />
                      <Steps.Item title="In progress" />
                      <Steps.Item title="Waiting" />
                      <Steps.Item title="Waiting" />
                    </Steps>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      history
                    </h6>
                    <h2 className="mb-0">Your LORs</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart lorHistoryTable">
                  <table className="table" borderless={1}>
                    <tr>
                      <th>Teacher Name</th>
                      <th>Subject</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td>Ms. Ditty Varghese</td>
                      <td>Algorithms</td>
                      <td style={{ color: 'green' }}>Approved</td>
                    </tr>
                    <tr>
                      <td>Mr. Imran Mirza</td>
                      <td>Software Engineering</td>
                      <td style={{ color: 'orange' }}>Pending</td>
                    </tr>
                    <tr>
                      <td>Ms. Sejal Chopra</td>
                      <td>COA</td>
                      <td style={{ color: 'blue' }}>Drafting</td>
                    </tr>
                    <tr>
                      <td>Ms. Priya Kaul</td>
                      <td>ERP</td>
                      <td style={{ color: 'red' }}>Rejected</td>
                    </tr>
                    <tr>
                      <td>Ms. Sana Shaikh</td>
                      <td>Python</td>
                      <td style={{ color: 'green' }}>Approved</td>
                    </tr>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Index;
