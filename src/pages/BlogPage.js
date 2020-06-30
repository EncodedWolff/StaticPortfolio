import React from 'react';
// import Container from 'react-bootstrap/Container';
import Axios from 'axios';

import BlogPost from '../components/BlogPost';
import Hero from '../components/Hero';

class BlogPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            disabled: false
        }
    }

    // componentDidMount() {
    //     do {
    //         this.buildPosts();
    //         i++;
    //     } while (i < 1);
    // }

    getPosts = () => {
        //Get Request to '/posts/'
        Axios.post('http://localhost:5000/blog/posts', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        posts: res.data,
                        disabled: true
                    });
                } else {
                    this.setState({
                        disabled: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false
                });
            })
    }

    //res.json() => setState(posts)
    //foreach(post in posts) => new BlogPost

    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <p>This is where the posts go</p>
            </div>
        );
    }
}



export default BlogPage;