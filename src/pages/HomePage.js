import React from 'react';
// import Container from 'react-bootstrap/Container';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {

    return (
        <div className="vh-100">
            <Hero title={props.title} subTitle={props.subTitle} selfDescription={props.selfDescription} />
            <Carousel />
            <br />
            <br />
        </div>
    );

}

export default HomePage;