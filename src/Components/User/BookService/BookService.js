import React, { useContext } from 'react';
import UserHeader from '../UserHeader/UserHeader';
import { Container, Form, Button } from 'react-bootstrap';
import ProcessPayment from '../../Payment/ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';

const BookService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSubmit = () => {
        const name = loggedInUser.name;
        const email = loggedInUser.email;
        const service = document.getElementById('serviceName').value;
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        const status = 'Pending';

        const bookingInfo = { name, email, service, date, time, status };
        fetch('https://young-thicket-08812.herokuapp.com/bookService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingInfo)
        })
            .then(response => response.json())
    }

    return (
        <div>
            <UserHeader></UserHeader>
            <Container className="mt-5">
                <h1>Book Your Service</h1>
                <Form>
                    <Form.Group controlId="serviceName">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control className="mb-4" type="text" placeholder="Enter service name" />
                    </Form.Group>

                    <ProcessPayment></ProcessPayment>

                    <Button className="mt-3" onClick={handleSubmit} variant="primary">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default BookService;