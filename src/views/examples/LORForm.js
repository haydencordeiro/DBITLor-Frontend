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
import React,{useState,useEffect} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import axios from 'axios'


const LORForm = (props) => {

  var [teachers,SetTeachers]=useState([]);
  var [selectedTeacher,SetSelectedTeacher]=useState(null);


  
  useEffect(() => {
      
    //   console.log(`Token ${token}`);
      axios.get(`https://dbit-lor.herokuapp.com/api/listallteachers/`, {
        headers: {
          'Authorization': `Token ${props.token}`
        }
      })
      .then((res) => {
        SetTeachers(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.error(error)
      })
    }, [props.token])

    function SelectTeacher(e){
      SetSelectedTeacher(e.target.value);

    }
    function SubmitFormForLor(){
      if(selectedTeacher!=null){
        SetSelectedTeacher(null);
      console.log("form submitted");
      const article = { teacherID:parseInt(selectedTeacher) };
      const headers = { 
          'Authorization': `Token ${props.token}`,

          // 'My-Custom-Header': 'foobar'
      };
      axios.post('https://dbit-lor.herokuapp.com/api/applyforlor/', article, { headers })
      .then(
          (response)=>{
              console.log(response.data);
          }  
          );
      }

    }

  return (
    <>
      {/* <UserHeader /> */}
      <div
        className="header pb-4 pt-3 pt-lg-4 d-flex align-items-center"
        style={{
          minHeight: "400px",
          // backgroundImage:
          //   "url(" +
          //   require("../../assets/img/theme/profile-cover.jpg").default +
          //   ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Request LOR</h1>
              <p className="text-white mt-0 mb-5">
                Fill in the correct details to apply for approval of your LOR from the respected faculty.
              </p>
              {/* <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button> */}
            </Col>
          </Row>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="10">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col> */}
          <Col className="order-xl-1" xl="11">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">LOR Request Form</h3>
                  </Col>
                  {/* <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col> */}
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Student information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-student-id"
                          >
                            Student ID
                          </label>
                          <Input
                            className="form-control-alternative"
                            // defaultValue="2018190010"
                            id="input-student-id"
                            placeholder="Student ID"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            // defaultValue="Lucky"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            // defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >Branch</label>
                          <Input className="form-control-alternative" type="select" name="select" id="input-branch">
                            <option>Computer</option>
                            <option>IT</option>
                            <option>EXTC</option>
                            <option>Mechanical</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-passout-year"
                          >
                            Year of Passout
                          </label>
                          <Input
                            className="form-control-alternative"
                            // defaultValue="2020"
                            id="input-passout-year"
                            placeholder="2020"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Faculty information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-faculty-dept"
                          >Department</label>
                          <Input className="form-control-alternative" type="select" name="select" id="input-faculty-dept">
                            <option>Computer</option>
                            <option>IT</option>
                            <option>EXTC</option>
                            <option>Mechanical</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-faculty-name"
                          >Faculty Name</label>
                          <Input className="form-control-alternative" type="select" name="select" id="input-faculty-name" value={selectedTeacher} onChange={SelectTeacher}>
                            {teachers.map((obj,idx)=><option value={obj.id}>{obj.first_name} {obj.last_name}</option>)}
                            
                            {/* <option>IT</option>
                            <option>EXTC</option>
                            <option>Mechanical</option> */}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">LOR Draft</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Enter your complete LOR Content</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="20"
                        // defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        // Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                  <Row>

                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                      <Button onClick={SubmitFormForLor(2)}>Submit</Button>
                    </Col>
                  </FormGroup>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LORForm;
