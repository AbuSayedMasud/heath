// footer area
import React from 'react';

import ft1 from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className='bg-dark mt-5 py-5'>
            <div className="container">
                <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 ">
                    <div className="col">
                        <div className="text-start">
                            <img src={ft1} alt="" />

                        </div>
                        <h3 className='my-2 text-info text-start'>Services </h3>
                        <div className="text-white text-start list-group  ">

                            <li className="p-1 d-flex justify-content-between align-items-center">Dental care</li>

                            <li className="p-1 d-flex justify-content-between align-items-center">Face Surgery</li>
                            <li className="p-1 d-flex justify-content-between align-items-center">Body Surgery</li>
                            <li className="p-1 d-flex justify-content-between align-items-center">Beast Surgery</li>
                            <li className="p-1 d-flex justify-content-between align-items-center">Massages</li>
                        </div>

                    </div>
                    <div className="col text-start mt-2">
                        <div className="text-white mt-5">
                            <h3 className='mt-4 text-info'>Contact Us</h3>
                            <div>
                                <small> 4321A,Mirpur,Dhaka</small> <br />
                                <small>Monday - Sunday 08:00-19:00</small> <br />
                                <small>+035727543632</small>
                            </div>


                        </div>
                    </div>
                    <div className="col text-start mt-2">
                        <div>
                            <h3 className='mt-5 text-info '>Links</h3>
                            <div className=" list-group ">
                                <li className="p-1 d-flex justify-content-between align-items-center "><a className="text-decoration-none text-white" href="_blank">Home</a></li>
                                <li className="p-1 d-flex justify-content-between align-items-center "><a className="text-decoration-none text-white" href="_blank">About</a></li>
                                <li className="p-1 d-flex justify-content-between align-items-center "><a className="text-decoration-none text-white" href="_blank">Services</a></li>
                                <li className="p-1 d-flex justify-content-between align-items-center "><a className="text-decoration-none text-white" href="_blank">Contact Us</a></li>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;