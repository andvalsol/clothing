import React from "react";
import './withSpinner.styles';
import {SpinnerContainer, SpinnerOverlay} from "./withSpinner.styles";

const Spinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
);

export default Spinner;
