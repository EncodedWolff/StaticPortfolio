import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import basicImage from '../assets/images/basicImage.jpg';
import image2 from '../assets/images/image2.jpg';
//import ImageName from '../assets/images/ImageName'; ...
//remove

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Blank_Blog',
                    subTitle: 'Very short description',
                    imgSrc: basicImage,
                    link: 'This will be a link to the project',
                    selected: false
                },
                {
                    id: 1,
                    title: 'HoloTag World',
                    subTitle: 'Very short description',
                    imgSrc: image2,
                    link: 'This will eventually be a link to the website',
                    selected: false
                },
                {
                    id: 2,
                    title: 'NashFlow',
                    subTitle: 'Very short description',
                    imgSrc: basicImage,
                    link: 'This will be a link to the project',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>

        );
    }
}

export default Carousel;