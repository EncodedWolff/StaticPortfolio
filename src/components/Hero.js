import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStackOverflow,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faStackOverflow
);

function Hero(props) {
    return (
        <Jumbotron className="nashville header-content jumbotron-fluid">
            <Container>
                <Row>
                    <Col className="justify-content-center" lg={4} md={8} xs={12}>
                        {props.title && <h1 className="bigger-text font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h4 className="font-weight-light">{props.subTitle}</h4>}
                        {props.selfDescription && <p>{props.selfDescription}</p>}
                    </Col>
                    <Col>
                        <a href="https://www.stackoverflow.com/users/13723727/joseph-wolff">
                            <FontAwesomeIcon icon={faStackOverflow} size="3x" className="header-content" />
                        </a>
                        <a href="https://www.github.com/WolffJosephN">
                            <FontAwesomeIcon icon={faGithub} size="3x" className="header-content" />
                        </a>
                        <a href="https://www.linkedin.com/in/wolffjosephn/">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" className="header-content" />
                        </a>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>
    );
}

export default Hero;