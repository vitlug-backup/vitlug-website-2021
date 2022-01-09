import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from "styled-components"

const ContactList = styled.div`
    display: flex;
    justify-content: space-between;
    margin-inline: 150px;

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
                <a title="Discord" target="_blank" rel="noopener noreferrer" href="https://discord.gg/gF8fV84Zg6"><StaticImage
                    alt="Discord"
                    src="../images/discord.png"
                /></a>
            </div>
            <div>

                <a title="Email" target="_blank" rel="noopener noreferrer" href="mailto:linux@vit.ac.in">
                    <StaticImage
                        alt="Email"
                        src="../images/email.png"

                    />
                </a>
            </div>
            <div>
                <a title="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/vit_lug/">
                    <StaticImage
                        alt="Instagram"
                        src="../images/instagram.png"
                    />
                </a>
            </div>
            <div>
                <a title="Twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/vitlug">
                    <StaticImage
                        alt="Twitter"
                        src="../images/twitter.png"
                    />
                </a>
            </div>
            <div>
                <a title="Linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/vit-linux-user-group/">
                    <StaticImage
                        alt="LinkedIn"
                        src="../images/linkedin.png"
                    />
                </a>
            </div>
            <div>
                <a title="GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/vitlug">
                    <StaticImage
                        alt="GitHub"
                        src="../images/github.png"
                    />
                </a>
            </div>
        </ContactList>
    )
}

export default Contacts
