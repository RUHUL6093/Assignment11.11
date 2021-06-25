import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import './Header.css';
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../../../App';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState([]);

    useEffect(() => {
        fetch('https://young-thicket-08812.herokuapp.com/isAdmin')
            .then(response => response.json())
            .then(data => setIsAdmin(data));
    }, [])

    let history = useHistory();

    let x = true;

    const goToAdminPage = () => {
        for(let i = 0; i < isAdmin.length; i++) {
            if(isAdmin[i].email === loggedInUser.email){
                history.push('/admin');
                x = false;
            }
            // console.log(isAdmin[i].email);
        }
        if(x){
            history.push('/notAdmin');
        }
    }

    return (
        <div>
            <Container className="header mt-4">
                <div>
                    <h1>Automobile-Care</h1>
                </div>
                <div>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/service">Services</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {loggedInUser.name || <Nav.Link><Link to="/login">LogIn</Link></Nav.Link>}
                        </Nav.Item>
                        <Nav.Item>
                            <Button onClick={goToAdminPage}>Admin</Button>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </div>
    );
};

export default Header;