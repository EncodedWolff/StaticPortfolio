import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Content from '../components/Content';
import Axios from 'axios';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        Axios.post('https://52.90.99.56:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }

    handleFieldChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Content >
                    <Form className="text-light" onSubmit={this.handleSubmit} onChange={this.handleFieldChange}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email-address">Email Address</Form.Label>
                            <Form.Control id="email-address" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="jw-blue d-inline-block" variant="dark" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Contact submission sent</p>}
                        {this.state.emailSent === false && <p className="d-inline failed-msg">Contact submission failed</p>}
                    </Form>
                </Content>
            </div>
        );
    }
}

export default ContactForm;