import React from 'react';

const Alert = ({msg, type}) => {
    return (
        <div className={`alert alert-${type}`}>
            <i className="fas fa-info-circle">{msg}</i>
        </div>
    );
};

export default Alert;