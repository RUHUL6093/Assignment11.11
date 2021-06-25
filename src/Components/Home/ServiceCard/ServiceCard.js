import React from 'react';
import './ServiceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4 mt-5 zoom">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <img style={{height: '170px', width: "167px"}} src={service.imgURL} alt=""/>
                        <h5 class="card-title">{service.name}</h5>
                        <h6 class="card-subtitle mb-2"><FontAwesomeIcon icon={faDollarSign} /> {service.price}</h6>
                        <p class="card-text">{service.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;