import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "./Card";

import BlankBlog from "../assets/images/BlankBlog.png";
import ExpenseCalculator from "../assets/images/ExpenseCalculator.png";
import NashFlowScreenshot from "../assets/images/NashFlowScreenshot.png";
import HoloTagWorld from "../assets/images/HoloTagWorld.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Expense Calculator",
          subTitle: "Simple Expense calculator built in React.",
          imgSrc: ExpenseCalculator,
          link:
            "https://5f0c91c8409cbc00087b8039--boring-bhabha-6e9a6d.netlify.app/",
          selected: true,
        },
        {
          id: 1,
          title: "Blank_Blog",
          subTitle:
            "Participated in a group project in which we built a full stack blogging application. The application was designed to be reminiscent of the earlier days of the internet. Focusing on simplicity in both design and overall functionality. ",
          imgSrc: BlankBlog,
          link: "https://github.com/Woz-U-Group-Projects/team-commandline",
          selected: false,
        },
        {
          id: 2,
          title: "HoloTag World",
          subTitle:
            "Static webpage about a new adventure platfrom that is in development.",
          imgSrc: HoloTagWorld,
          link: "https://sharp-morse-f2b7ab.netlify.app/",
          selected: false,
        },
        {
          id: 3,
          title: "NashFlow",
          subTitle:
            "Currently in development, this application is designed to improve workflow within a sales environment. It is used to visualize customer location on a map, allowing for mapping sales routes for in-home/in-store sales. This application also allows for searching for different types of data, specific customers, etc., and generates information about the given selection.",
          imgSrc: NashFlowScreenshot,
          link: "https://github.com/WolffJosephN/nash-flow",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

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
