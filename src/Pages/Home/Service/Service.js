// service are import here
import React from 'react';

import { Link } from 'react-router-dom';
import './service.css'


const Service = ({ service }) => {
    const { id, name, price, img } = service;
    return (
        <div className="service">
            <div className="col shadow-lg ">
                <div className="card h-100">
                    <img src={img} className="card-img-top image" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title text-info ">{name}</h5>
                        <p className="card-text text-primary">Price: <small className="text-warning">{price} TK</small></p>
                        <Link to={`/detail/${id}`}><button className="btn btn-outline-warning text-secondary">Description</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;