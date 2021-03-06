import React from 'react';
import Directory from "../../components/directory/directory";
import './homepage.styles.scss';
import {HomePageContainer} from "./homepage.styles";

const Homepage = () => (
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
);

export default Homepage;
