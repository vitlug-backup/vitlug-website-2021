import React from 'react'
import styled from "styled-components"

const ContactList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 5rem;

    img {
        width: 64px;
        height: 64px;
        margin-top: 2rem;
    }

    img:hover {
        transform: translateY(-10px);
        transition: 0.3s ease;
    }
    
`

const Contacts = () => {
    return (
        <ContactList>
            <div>
                <a title="Discord" target="_blank" rel="noopener noreferrer" href="https://discord.gg/gF8fV84Zg6">
                    <img
                        alt="Discord"
                        src="contact/discord.png"
                    />
                </a>
            </div>
            <div>

                <a title="Email" target="_blank" rel="noopener noreferrer" href="mailto:linux@vit.ac.in">
                    <img
                        alt="Email"
                        src="contact/email.png"
                    />
                </a>
            </div>
            <div>
                <a title="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vit_lug/">
                    <img
                        alt="Instagram"
                        src="contact/instagram.png"
                    />
                </a>
            </div>
            <div>
                <a title="Twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/vitlug">
                    <img
                        alt="Twitter"
                        src="contact/twitter.png"
                    />
                </a>
            </div>
            <div>
                <a title="Linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/vit-linux-user-group/">
                    <img
                        alt="LinkedIn"
                        src="contact/linkedin.png"
                    />
                </a>
            </div>
            <div>
                <a title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/vitlug">
                    <img
                        alt="GitHub"
                        src="contact/github.png"
                    />
                </a>
            </div>
        </ContactList>
    )
}

export default Contacts
