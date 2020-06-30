import React from 'react';
import Container from 'react-bootstrap/Container';

function BlogPost(props) {

    return (
        <Container fluid={false}>
            <h4>{this.props.title}</h4>
            <h6>{this.props.date}</h6>
            <p>{this.props.content}</p>
        </Container>
    );
}


export default BlogPost;