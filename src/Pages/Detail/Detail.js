//  service details information
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [single, setSingle] = useState({})
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data.service))
    }, [])
    // console.log(id);
    // console.log(serviceDetails);
    useEffect(() => {
        const found = serviceDetails.find(service => service.id === id);
        setSingle(found);
    }, [serviceDetails])


    return (

        <div className="pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-8  offset-md-2 ">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={single?.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body ">
                                        <h5 className="card-title text-start">{single?.name}</h5>
                                        <p className="card-text text-start">Price : {single?.price}</p>
                                        <p className="card-text text-start">{single?.description}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Detail;