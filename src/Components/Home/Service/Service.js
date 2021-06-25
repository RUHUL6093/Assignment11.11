import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://young-thicket-08812.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="App mt-5">
            <h1>Premium Washing Services</h1>
            <div className="row">
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div >
    );
};

export default Service;