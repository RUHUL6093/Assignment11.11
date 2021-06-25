import React, { useEffect, useState } from 'react';
import { Button, Container, Table, Spinner } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';

const ManageService = () => {

    const [manageService, setManageService] = useState([]);

    useEffect(() => {
        fetch('https://young-thicket-08812.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setManageService(data));
    }, [])

    function deleteService(id) {
        fetch(`https://young-thicket-08812.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
    }

    return (
        <div>
            {
                manageService.length === 0 && <Spinner className="spinner" animation="border" role="status">
                <span className="sr-only"></span>
              </Spinner>
            }
            <AdminHeader></AdminHeader>
            <Container className="mt-5">
                <h1>Manage Services</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        manageService.map(odr => <tbody><tr><td>{odr.name}</td><td>{odr.price}</td><td><Button onClick={() =>deleteService(odr._id)} variant="danger">Delete</Button></td></tr></tbody>)
                    }
                </Table>
            </Container>
        </div>
    );
};

export default ManageService;