import React from 'react';
// import Container from 'react-bootstrap/Container';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} selfDescription={props.selfDescription} />
            <Carousel />
        </div>
    );

}

export default HomePage;