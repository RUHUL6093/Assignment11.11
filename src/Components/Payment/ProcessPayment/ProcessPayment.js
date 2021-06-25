import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie2NsBLx6AtoZTQNHIhxGylq1l0ZsT44qSVhFAbCDyptm6LlyvVW9eMyH7TjzgmsjjooTb1VwkmFjcXW7OAzYGY00b9V8ZKnA');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;