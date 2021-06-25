import React, { useContext } from 'react';
import { Container, Nav } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import { UserContext } from '../../../App';
import './UserHeader.css'

const UserHeader = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Container className="headerUser mt-4">
                <div>
                    <h1>Automobile-Care</h1>
                </div>
                <div>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/bookService">Book Service</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/bookingList">Booking List</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/review">Review</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-black">{loggedInUser.name}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </div>
    );
};

export default UserHeader;