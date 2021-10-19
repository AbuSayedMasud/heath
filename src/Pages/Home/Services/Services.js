// sercies are import here
import React, { useEffect, useState } from 'react';
import './services.css'
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="py-3 pb-5 background">

            <div className="container" id="services" >
                <h3 className="fs-2 fw-bolder text-info py-2">Our Services</h3>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
                    {

                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;