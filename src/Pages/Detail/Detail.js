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
    console.log(serviceDetails);
    useEffect(() => {
        const found = serviceDetails.find(service => service.id === id)
        console.log(found);
    },[serviceDetails,id])


    return (

        <div>
            <h2>this is Details{id}</h2>

        </div>
    );
};

export default Detail;