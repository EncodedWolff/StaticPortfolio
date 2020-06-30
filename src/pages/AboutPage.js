import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div className="text-light">
            <Hero title={props.title} />

            <Content>
                <h3>Who am I?</h3>
                <p>
                    My name is Joseph Wolff. I am a Full Stack Web Developer based out of the Nashville, TN area.
                    I started my education studying Software Development at Full Sail University and finished
                    my formal education with a Full Stack Software Devlopment certification from Woz-U.
                </p>

                <hr />

                <h3>What do I do?</h3>
                <p>
                    Currently, I am focused on freelance work. I work with my clients
                    to build solutions that best fit their needs. This may range from
                    something as simple as a landing page to just make their ideas and
                    businesses more easily accessible to the general public, to more complex
                    solutions that require a fully scalable back end and months of work.
                </p>

                <hr />

                <h3>How do I do it?</h3>
                <p>
                    For development, most of the projects that I work on use the MERN (MongoDB, Express, React, Node) stack.
                    There are a few exceptions to this. All of the projects that I have for display on this site
                    list their technologies.

                </p>
                <br />
                <p>

                    For styling, I use a mix of my own CSS as well as pre-built Bootstrap components.
                    With the Bootstrap Components, I generally try to modify them in some way so that
                    they do not look like cookie-cutter websites for my clients. I want them to have websites
                    that are unique and molded to their own personal brand.
                </p>

                <hr />

                <h3>What am I passionate about?</h3>
                <p>
                    Since I was young, I have had a passion for technology. I try to learn new skills as often as possible.
                    I do not implement them into a production project until I am very comfortable with them to avoid
                    potential hangups in the development process, unless they are necessary to the success of the project.
                </p>
                <br />
                <p>
                    I would like to eventually learn more about machine learning and AI, as I find them very interesting and
                    they could be valuable to my own skillset in the future. I feel like most applications will
                    eventually use some form of AI to advance their businesses and improve efficiency.
                </p>
            </Content>
        </div>
    );
}

export default AboutPage;