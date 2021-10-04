import React from 'react';
import Spinner from "./spinner.component";

const WithSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
    return (isLoading === true) ? (
        <Spinner/>
    ) : <WrappedComponent {...otherProps}/>
}

export default WithSpinner;
