import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import interior from '../../../images/interior.jpg';
import exterior from '../../../images/exterior.jpg';
import engineService from '../../../images/engineService.jpg';

const ImageSlider = () => {
    return (
        <div>
            <Container className="mt-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={interior}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Interior Washing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={exterior}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Exterior Washing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={engineService}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Engine Service</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default ImageSlider;