import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

function Footer() {

    return (
        <footer className="mt-5 footer">
            <Container fluid={true} className="jw-blue">
                <Row className="text-light">
                    <Col className="p-0" lg={3} md={6} sm={12}>
                        Joseph Wolff
                    </Col>
                    <Col>
                        <a href="https://www.stackoverflow.com/users/13723727/joseph-wolff">
                            <FontAwesomeIcon icon={faStackOverflow} className="text-light" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.github.com/WolffJosephN">
                            <FontAwesomeIcon icon={faGithub} className="text-light" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/wolffjosephn/">
                            <FontAwesomeIcon icon={faLinkedin} className="text-light" />
                        </a>
                    </Col>

                </Row>
            </Container>
        </footer>
    );

}

export default Footer;