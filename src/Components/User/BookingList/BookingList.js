import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import UserHeader from '../UserHeader/UserHeader';

const BookingList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        fetch('https://young-thicket-08812.herokuapp.com/bookingList?email='+loggedInUser.email)
            .then(response => response.json())
            .then(data => setBookingList(data));
    }, [])

    return (
        <div>
            {
                bookingList.length === 0 && <Spinner className="spinner" animation="border" role="status">
                <span className="sr-only"></span>
              </Spinner>
            }
            <UserHeader></UserHeader>
            <Container className="mt-5">
                <h1>Booking List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Booking Date and Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        bookingList.map(odr => <tbody><tr><td>{odr.service}</td><td>{odr.date}  {odr.time}</td><td>{odr.status}</td></tr></tbody>)
                    }
                </Table>
            </Container>
        </div>
    );
};

export default BookingList;