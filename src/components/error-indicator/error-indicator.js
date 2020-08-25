import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator d-flex text-center">
            <span className="boom">BOOM!</span>
            <span>something has gone wrong</span>
            <span>(but we as soon as possible to fix it)</span>
        </div>
    )
}

export default ErrorIndicator;