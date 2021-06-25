import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';

const MakeAdmin = () => {

    const handleSubmit = () => {
        const email = document.getElementById('adminEmail').value;
        const admin = { email };

        fetch('https://young-thicket-08812.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(response => response.json())
    }

    return (
        <div>
            <AdminHeader></AdminHeader>
            <Container className="mt-5">
                <h1>Make Admin</h1>
                <Form>

                    <Form.Group controlId="adminEmail">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>

                <Button className="mt-3" onClick={handleSubmit} variant="primary">
                    Submit
                </Button>
                </Form>
            </Container>
        </div >
    );
};

export default MakeAdmin;