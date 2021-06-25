import React from 'react';
import { Button, Container } from 'react-bootstrap';
import carWashing from '../../../images/carWashing.jpg'
import { useHistory } from "react-router-dom";

const HomeContent = () => {

    let history = useHistory();

    const gotoUser = () => {
        history.push('/user');
    }

    return (
        <Container>
            <section className="row d-flex align-items-center mt-5">
                <div className="col-md-6">
                    <h1>Professional Washing <br/> and Cleaning of Your Car</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laborum <br/> quia voluptas sequi fuga ipsum quidem explicabo porro illum <br/>itaque asperiores accusamus quasi iste labore nemo modi totam quam placeat!</p>
                    <Button onClick={gotoUser}>Get Your Services</Button>
                </div>
                <div className="col-md-6">
                    <img style={{height: '417px', width:'626px', borderRadius: '10px'}} src={carWashing} className="img-fluid" alt="" />
                </div>
            </section>
        </Container>
    );
};

export default HomeContent;