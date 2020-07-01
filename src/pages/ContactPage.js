import React from 'react';

import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';

function ContactPage(props) {
    return (
        <div className="vh-100">
            <Hero title={props.title} />

            <ContactForm />
        </div>
    );
}

export default ContactPage;