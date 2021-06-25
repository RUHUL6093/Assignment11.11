import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import './AdminHeader.css';

const AdminHeader = () => {
    return (
        <div>
            <Container className="headerAdmin mt-4">
                <div>
                    <h1>Automobile-Care</h1>
                </div>
                <div>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/addService">Add Service</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/makeAdmin">Make Admin</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/orderList">Order List</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/manageService">Manage Service</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </div>
    );
};

export default AdminHeader;