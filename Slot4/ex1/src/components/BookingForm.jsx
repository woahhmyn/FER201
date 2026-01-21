import { Form, Button, Row, Col } from "react-bootstrap";

function BookingForm() {
    return (
        <div className="booking-form justify-content-center mt-5" style={{ maxWidth: "100%" }}>
            <h2 style={{ fontSize: "50px", textAlign: "center" }} >Book Your Table</h2>
            <Form>
                <Row className="mb-3 justify-content-center">
                    <Col md={3}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>

                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="dropdownSelect">
                            <Form.Label>Type of Service</Form.Label>
                            <Form.Control as="select">
                                <option>Select a service</option>
                                <option>Service 1</option>
                                <option>Service 2</option>
                                <option>Service 3</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3 justify-content-center">
                    <Form.Group as={Col} md={9} controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter your description" />
                    </Form.Group>
                </Row>
                <Button variant="warning" type="submit" className="d-block mx-auto mb-5">
                    Send Message
                </Button>
            </Form>
        </div >
    );

}
export default BookingForm;