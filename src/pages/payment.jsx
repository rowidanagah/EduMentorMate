import React from 'react';
import ReactDOM from 'react-dom';
import PayPalButton from 'react-paypal-button-v2';

const PayPalComponent = () => {
    const paypalOptions = {
        clientId: 'YOUR_PAYPAL_CLIENT_ID_HERE',
        currency: 'USD',
        intent: 'capture',
    };

    const paypalButtonStyles = {
        layout: 'vertical',
        color: 'gold',
        shape: 'rect',
        label: 'paypal',
    };

    const onSuccess = (details, data) => {
        console.log('Payment successful', details, data);
    };

    const onError = (error) => {
        console.log('Payment error', error);
    };

    const onCancel = (data) => {
        console.log('Payment cancelled', data);
    };

    return (
        <PayPalButton
            amount={10}
            options={paypalOptions}
            style={paypalButtonStyles}
            onSuccess={onSuccess}
            onError={onError}
            onCancel={onCancel}
        />
    );
};

ReactDOM.render(<PayPalComponent />, document.getElementById('root'));
