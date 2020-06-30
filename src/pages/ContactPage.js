import React from 'react';

import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';

function ContactPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <ContactForm />
        </div>
    );
}

export default ContactPage;