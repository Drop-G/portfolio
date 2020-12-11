// function Contact() {
//     const [first1Focus, setFirst1Focus] = React.useState(false);
//     const [last1Focus, setLast1Focus] = React.useState(false);
//     const [email1Focus, setEmail1Focus] = React.useState(false);
//     return (
//              <Container>
//                 <Row className="ml-auto mr-auto" md="5">
//                    <Col className="ml-auto mr-auto" md="5">
//                       <Card className="card-contact card-raised mt-5 mb-5 pt-5 pb-5 right">
//                          <Form id="contact-form1" method="post" role="form">
//                             <CardHeader className="text-center">
//                                <CardTitle tag="h4">Contact Us</CardTitle>
//                             </CardHeader>
//                             <CardBody>
//                                <Row>
//                                   <Col className="pr-2" md="6">
//                                      <label>First name</label>
//                                      <InputGroup
//                                         className={first1Focus ? "input-group-focus" : ""}
//                                      >
//                                         <InputGroupAddon addonType="prepend">
//                                            <InputGroupText>
//                                               <i className="now-ui-icons users_circle-08"></i>
//                                            </InputGroupText>
//                                         </InputGroupAddon>
//                                         <Input
//                                            aria-label="First Name..."
//                                            autoComplete="given-name"
//                                            placeholder="First Name..."
//                                            type="text"
//                                            onFocus={() => setFirst1Focus(true)}
//                                            onBlur={() => setFirst1Focus(false)}
//                                         ></Input>
//                                      </InputGroup>
//                                   </Col>
//                                   <Col className="pl-2" md="6">
//                                      <FormGroup>
//                                         <label>Last name</label>
//                                         <InputGroup
//                                            className={last1Focus ? "input-group-focus" : ""}
//                                         >
//                                            <InputGroupAddon addonType="prepend">
//                                               <InputGroupText>
//                                                  <i className="now-ui-icons text_caps-small"></i>
//                                               </InputGroupText>
//                                            </InputGroupAddon>
//                                            <Input
//                                               aria-label="Last Name..."
//                                               autoComplete="family-name"
//                                               placeholder="Last Name..."
//                                               type="text"
//                                               onFocus={() => setLast1Focus(true)}
//                                               onBlur={() => setLast1Focus(false)}
//                                            ></Input>
//                                         </InputGroup>
//                                      </FormGroup>
//                                   </Col>
//                                </Row>
//                                <FormGroup>
//                                   <label>Email address</label>
//                                   <InputGroup
//                                      className={email1Focus ? "input-group-focus" : ""}
//                                   >
//                                      <InputGroupAddon addonType="prepend">
//                                         <InputGroupText>
//                                            <i className="now-ui-icons ui-1_email-85"></i>
//                                         </InputGroupText>
//                                      </InputGroupAddon>
//                                      <Input
//                                         autoComplete="email"
//                                         placeholder="Email Here..."
//                                         type="email"
//                                         onFocus={() => setEmail1Focus(true)}
//                                         onBlur={() => setEmail1Focus(false)}
//                                      ></Input>
//                                   </InputGroup>
//                                </FormGroup>
//                                <FormGroup>
//                                   <label>Your message</label>
//                                   <Input
//                                      id="message"
//                                      name="message"
//                                      rows="6"
//                                      type="textarea"
//                                   ></Input>
//                                </FormGroup>
//                                <Row>
//                                   <Col md="6">
//                                      <FormGroup check>
//                                         <Label check>
//                                            <Input type="checkbox"></Input>
//                                            <span className="form-check-sign"></span>
//                                I'm not a robot
//                              </Label>
//                                      </FormGroup>
//                                   </Col>
//                                   <Col md="6">
//                                      <Button
//                                         className="btn-round pull-right"
//                                         color="info"
//                                         type="submit"
//                                      >
//                                         Send Message
//                            </Button>
//                                   </Col>
//                                </Row>
//                             </CardBody>
//                          </Form>
//                       </Card>
//                    </Col>
//                 </Row>
//              </Container>
//     );
//  }
 
//  export default Contact;
 