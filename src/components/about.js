import React from 'react'
import styled from "styled-components"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AboutContainer = styled.div`
    display: flex;

    @media (max-width: 600px) {
        flex-direction: column;  
        flex-direction: column-reverse;
    }   
`

const AboutText = styled.div`
    margin-inline: 50px;
    font-size: 18px;
    // font-family: 'Courier New', Courier, monospace;
`

const ImgSlider = styled.div`
    width: 360px;
    height: 360px;
    border-radius: 5px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
    margin: 0 auto 1.5rem auto;

    img {
        width: 360px;
        height: 360px;
        border-radius: 5px;
    }

    div {
        border-radius: 5px; 
    }
`

const About = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true
    };
    return (
        <AboutContainer>
            <AboutText>
                <p>
                    Founded in the year 2019, VIT Linux Users Group is small student community started
                    with the goal to promote the use of Linux and Open Source Software, we strive to educate
                    the student community on open source software alternatives, and to support and provide
                    a social network for local Linux users.
                </p>
                <p>
                    VIT-LUG conducts events on the use of Open Source Software which are
                    open to non-club members as well. We publish blogs on medium
                    and actively undertake building projects related to Linux, notable
                    mentions of which include Arcadia Linux, an Arch based Linux distro.
                </p>
            </AboutText>
            <ImgSlider>
                <Slider {...settings}>
                    <div>
                        <img
                            alt="About 1"
                            src="about/land_a.jpg"
                        />
                    </div>
                    <div>
                        <img
                            alt="About 2"
                            src="about/land_b.jpg"
                        />
                    </div>
                    <div>
                        <img
                            alt="About 3"
                            src="about/land_c.jpg"
                        />
                    </div>
                    <div>
                        <img
                            alt="About 4"
                            src="about/land_d.jpg"
                        />
                    </div>
                </Slider>
            </ImgSlider>
        </AboutContainer>
    )
}

export default About
