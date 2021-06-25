import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import UserHeader from '../UserHeader/UserHeader';

const Review = () => {

    const handleSubmit = () => {
        const name = document.getElementById('yourName').value;
        const companyName = document.getElementById('companyName').value;
        const description = document.getElementById('description').value;

        const review = { name, companyName, description };
        fetch('https://young-thicket-08812.herokuapp.com/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            // .then(data => console.log(data))
    }

    return (
        <div>
            <UserHeader></UserHeader>
            <Container className="mt-5">
                <h1>Add Review</h1>
                <Form>
                    <Form.Group controlId="yourName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter company name" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" />
                    </Form.Group>

                    <Button className="mt-3"onClick={handleSubmit} variant="primary">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Review;