import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import basicImage from '../assets/images/basicImage.jpg';
import HoloTagWorld from '../assets/images/HoloTagWorld.png';
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
                    selected: true
                },
                {
                    id: 1,
                    title: 'HoloTag World',
                    subTitle: 'Static webpage about a new adventure platfrom that is in development.',
                    imgSrc: HoloTagWorld,
                    link: 'https://sharp-morse-f2b7ab.netlify.app/',
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