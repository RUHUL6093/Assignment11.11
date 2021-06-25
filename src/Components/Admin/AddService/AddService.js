import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';

const AddService = () => {
    const [imgUrl, setImgUrl] = useState();

    const handleSubmit = () => {
        const name = document.getElementById('serviceName').value;
        const price = document.getElementById('servicePrice').value;
        const description = document.getElementById('serviceDescription').value;
        const imgURL = imgUrl;
        const service = { name, price, imgURL, description };
        fetch('https://young-thicket-08812.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(response => response.json())
            // .then(data => console.log(data))
    }

    const handleImage = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'ec585676253f01bc8213ab2e0e8976e9');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
                alert('Image uploaded');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <AdminHeader></AdminHeader>
            <Container className="mt-5">
                <h1>Add Service</h1>
                <Form>
                    <Form.Group controlId="serviceName">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="servicePrice">
                        <Form.Label>Service Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter price" />
                    </Form.Group>

                    <Form.Group controlId="serviceDescription">
                        <Form.Label>Service Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" />
                    </Form.Group>

                    <Form>
                        <Form.Group controlId="servicePhoto">
                            <Form.File onChange={handleImage} id="exampleFormControlFile1" label="Add Photo ( after adding photo wait until the pop-up message shown )" />
                        </Form.Group>
                    </Form>

                    <Button onClick={handleSubmit} variant="primary">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddService;