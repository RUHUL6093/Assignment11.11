import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Button } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';

const OrderList = () => {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://young-thicket-08812.herokuapp.com/orderList')
            .then(response => response.json())
            .then(data => setOrderList(data));
    }, [])

    const updateStatus = (id) => {
        const status = 'Done';
        const upStatus = {status};
        fetch(`https://young-thicket-08812.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(upStatus)
        })
        .then(response => response.json())
    }

    return (
        <div>
            {
                orderList.length === 0 && <Spinner className="spinner" animation="border" role="status">
                <span className="sr-only"></span>
              </Spinner>
            }
            <AdminHeader></AdminHeader>
            <Container className="mt-5">
                <h1>Order List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        orderList.map(odr => <tbody><tr><td>{odr.name}</td><td>{odr.email}</td><td>{odr.service}</td><td>{odr.status}</td><td><Button onClick={()=>updateStatus(odr._id)} className="btn btn-primary">Update Status</Button></td></tr></tbody>)
                    }
                </Table>
            </Container>
        </div>
    );
};

export default OrderList;