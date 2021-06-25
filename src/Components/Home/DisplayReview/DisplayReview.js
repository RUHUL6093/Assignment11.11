import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const DisplayReview = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://young-thicket-08812.herokuapp.com/getReview')
        .then(response => response.json())
        .then(data => setReview(data))
    }, [])

    return (
        <div className="App mt-5">
            <h1>Customers Review</h1>
            <div className="row">
                {
                    review.map(rvw => <ReviewCard rvw={rvw}></ReviewCard>)
                }
            </div>
        </div >
    );
};

export default DisplayReview;