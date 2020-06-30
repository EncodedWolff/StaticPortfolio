import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

function Hero(props) {
    return (
        <Jumbotron className="nashville text-light jumbotron-fluid">
            <Container>
                <Row>
                    <Col className="justify-content-center" lg={4} md={8} xs={12}>
                        {props.title && <h1 className="font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h4 className="font-weight-light">{props.subTitle}</h4>}
                        {props.selfDescription && <p className="font-weight-light">{props.selfDescription}</p>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;