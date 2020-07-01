import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';


import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Joseph Wolff',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Blog', path: '/blog/posts' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Joseph Wolff',
        subTitle: 'Full Stack Web Developer',
        selfDescription: 'Forward Thinking, Always Learning'
      },
      about: {
        title: 'About me'
      },
      blog: {
        title: 'Welcome to my blog!'
      },
      contact: {
        title: "Let's connect:",
        userFullName: '',
        userEmailAddress: '',
        userMessage: ''
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0 jw-style" fluid={true}>

          <Navbar bg="transparent" expand="lg">

            <Navbar.Brand className="jw-style-right">
              <Link to="/">JW</Link>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" >

              <Nav className="ml-auto">
                <Link className="nav-link text-light" to="/">Home</Link>
                <Link className="nav-link text-light" to="/about">About</Link>
                {/* <Link className="nav-link" to="/blog/posts">Blog</Link> */}
                <Link className="nav-link text-light" to="/contact">Contact</Link>

              </Nav>

            </Navbar.Collapse>

          </Navbar>

          <Route path="/" exact render={() =>
            <HomePage
              title={this.state.home.title}
              subTitle={this.state.home.subTitle}
              selfDescription={this.state.home.selfDescription}
            />}
          />

          <Route path="/about" render={() =>
            <AboutPage
              title={this.state.about.title}
              subTitles={this.state.about.subTitles}
              descriptions={this.state.about.descriptions}
            />}
          />

          <Route path="/blog" render={() =>
            <BlogPage
              title={this.state.blog.title}
            />}
          />

          <Route path="/contact" render={() =>
            <ContactPage
              title={this.state.contact.title}
              userFullName={this.state.contact.userFullName}
              userEmailAddress={this.state.contact.userEmailAddress}
              userMessage={this.state.contact.userMessage}
            />}
          />
          <div>

          </div>
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
