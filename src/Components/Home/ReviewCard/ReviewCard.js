import React from 'react';
import review from '../../../images/review.png'

const ReviewCard = ({rvw}) => {
    return (
        <div className="col-md-4 mt-5">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <img style={{height: '117px', width: "115px"}} src={review} alt=""/>
                        <h5 class="card-title">{rvw.name}</h5>
                        <h6 class="card-subtitle mb-2">{rvw.companyName}</h6>
                        <p class="card-text">{rvw.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;