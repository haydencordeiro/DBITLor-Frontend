
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
  FormGroup,
  Form,
  Input,
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

import TeacherHeader from "components/Headers/TeacherHeader.js";
// import { TRUE } from "node-sass";

const TeacherDashboard = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  var [application, SetApplication] = useState([]);
 
  useEffect(() => {
    var access_token = "53716934355c0e13967ec968a14440c073dcb51f"
    // console.log(`${process.env.API_URL}api/loggedinteachereditapplications/`);
    
    axios.get(`https://dbit-lor.herokuapp.com/api/loggedinusersapplications/`, {
      headers: {
        'Authorization': `Token ${props.token}`
      }
    })
      .then((res) => {
        SetApplication(res.data);
        // console.log(res.data);

      })
      .catch((error) => {
        console.error(error)
      })
  }, [props.token])

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

  function historyStatusColor(inp) {
    switch (inp) {

      case "pending": return <td style={{ color: 'orange' }}>Pending</td>;
      case "approved": return <td style={{ color: 'green' }}>Approved</td>;
      case "rejected": return <td style={{ color: 'red' }}>Rejected</td>;


      default: return <td style={{ color: 'blue' }}>Processing</td>
    }
  }

  function LastLorStatus() {
    // console.log(application);
    if (application.length == 0) {
      return 0;
    }
    else {
      // console.log(application[0].status);

      switch (application[0].status) {

        case "pending": return 0;
        case "approved": return 1;
        case "completed": return 2;


        default: return 0;
      }
    }
  }


  return (
    <>
      <TeacherHeader />

      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          {/* <Col className="mb-5 mb-xl-0" xl="8">
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
                    <Steps current={LastLorStatus()} vertical style={timelineStyles}>
                      <Steps.Item title="Pending" />
                      <Steps.Item title="Approved" />
                      <Steps.Item title="Complete" />
                    </Steps>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col> */}
          <Col xl="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Pending Requests
                    </h6>
                    <h2 className="mb-0">Approve LOR</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart lorHistoryTable" style={{height:'100%'}}>
                  <table className="table" borderless={1}>
                    <tr>
                      <th>Student Name</th>
                      <th>Subject</th>
                      <th>View LOR</th>
                    </tr>
                    <tr>
                      <td>Grejo Joby</td>
                      <td>Algorithms</td>
                      <td><Button className="default">View</Button></td>
                    </tr>
                    <tr>
                      <td>Grejo Joby</td>
                      <td>Algorithms</td>
                      <td><Button className="default">View</Button></td>
                    </tr>
                    <tr>
                      <td>Grejo Joby</td>
                      <td>Algorithms</td>
                      <td><Button className="default">View</Button></td>
                    </tr>
                    <tr>
                      <td>Grejo Joby</td>
                      <td>Algorithms</td>
                      <td><Button className="default">View</Button></td>
                    </tr>
                    <tr>
                      <td>Grejo Joby</td>
                      <td>Algorithms</td>
                      <td><Button className="default">View</Button></td>
                    </tr>

                    {/* {application.map((obj, i) => */}

                      {/* <tr>
                        <td>{obj.teacher.first_name} {obj.teacher.last_name}</td>
                        <td>{obj.date} {obj.time}</td>
                        {/* <td style={{ color: 'green' }}>Approved</td> */}
                        {/* {historyStatusColor(obj.status)} */}
                      {/* </tr> */} 

                    {/* )} */}

                    {/* 
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
                    </tr> */}
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

export default TeacherDashboard;
