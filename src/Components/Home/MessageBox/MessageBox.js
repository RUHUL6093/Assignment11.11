import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const MessageBox = () => {

    const handleSubmit = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const message = document.getElementById('message').value;

        const fullMessage = { name, email, phoneNumber, message };
        fetch('https://young-thicket-08812.herokuapp.com/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fullMessage)
        })
            .then(response => response.json())
    }

    return (
        <div>
            <h1 className="App mt-5">Send us Message to Improve Our Services</h1>
            <Container className="mt-5">
                <Form className="d-flex gap-5">
                    <div className="col-md-6">
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>

                        <Button className="mt-3"onClick={handleSubmit} variant="primary">
                            Send Message
                        </Button>
                    </div>

                    <div className="col-md-6">
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter number" />
                        </Form.Group>

                        <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" placeholder="Enter message" />
                        </Form.Group>

                    </div>

                </Form>
            </Container>
        </div>
    );
};

export default MessageBox;