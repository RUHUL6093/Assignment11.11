import React from 'react';
import { Container, Button } from 'react-bootstrap';
import car from '../../../images/car.jpg'

const HandleCar = () => {
    return (
        <Container>
            <section className="row d-flex align-items-center mt-5">
                <div className="col-md-6">
                    <img style={{ height: '417px', width: '626px', borderRadius: '10px' }} src={car} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6">
                    <h1>Let Us Handle Your<br /> Car Professionally</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, laborum <br /> quia voluptas sequi fuga ipsum quidem explicabo porro illum <br />itaque asperiores accusamus quasi iste labore nemo modi totam quam placeat!</p>
                </div>
            </section>
        </Container>
    );
};

export default HandleCar;