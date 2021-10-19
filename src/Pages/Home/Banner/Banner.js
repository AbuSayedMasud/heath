import React from 'react';
// banner function calling here
import { Carousel } from 'react-bootstrap';
import ban1 from '../../../images/banner/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg';
import ban2 from '../../../images/banner/rudi-fargo-Fx7Q750EphA-unsplash (1).jpg';
import ban3 from '../../../images/banner/the-anam-X1s5YSBw8lU-unsplash.jpg';
const Banner = () => {
    return (
        <div>
            <>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25 "
                            src={ban1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-info fw-bold fs-2">Helping  You</h2>
                            <p className="text-primary fs-5">Check Out Services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25"
                            src={ban2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2 className="text-info fw-bold fs-2">Helping Your Teeth</h2>
                            <p className="text-primary fs-5">Check Out Services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ban3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2 className="text-info fw-bold fs-2">Helping  You</h2>
                            <p className="text-primary fs-5">Check Out Services</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;