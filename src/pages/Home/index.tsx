import { lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";

import CorporateContent from "../../content/corporate";
import IndividualContent from "../../content/individual";


import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
    // Carousel settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true
    };

    return (
        <Container>
            <ScrollToTop />
            <ContentBlock
                direction="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="../imgs/lavin2.png"
                id="intro"
            />
            <MiddleBlock
                title={MiddleBlockContent.title}
                content={MiddleBlockContent.text}
                button={MiddleBlockContent.button}
                sliderContent={MiddleBlockContent.sliderContent} // Pass slider data here
            />
            <ContentBlock
                direction="left"
                title={AboutContent.title}
                content={AboutContent.text}
                section={AboutContent.section}
                icon="../imgs/reliable.jpg"
                id="mission"
            />
            <ContentBlock
                direction="right"
                title={MissionContent.title}
                content={MissionContent.text}
                icon="../imgs/team2.jpg"
                id="team"
            />

            {/* Section Title for the Carousel */}
            <div style={{ textAlign: "center", margin: "10px 0" }} >
                <h2 id={"corporate"} style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
                    Corporate Services
                </h2>

            </div>

            {/* Carousel for Corporate */}
            <div style={{ marginBottom: "60px" }}>
                <Slider {...sliderSettings}>
                    {Object.entries(CorporateContent).map(([key, content], index) => (
                        <div key={key}>
                            <ContentBlock
                                direction="left"
                                title={content.title}
                                content={content.text}
                                icon={`../imgs/${key.toLowerCase()}.jpg`} // Adjust icon logic if needed
                                id={`corporate${index + 1}`}
                            />
                        </div>
                    ))}
                </Slider>
            </div>


            {/* Section Title for the Carousel */}
            <div style={{ textAlign: "center", margin: "5px 2px 10px 2px" }}>
                <h2 id="customer" style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
                    Individual Services
                </h2>
            </div>


            {/* Carousel for Individual */}
            <div style={{ marginBottom: "60px" }}>
                <Slider {...sliderSettings}>
                    {Object.entries(IndividualContent).map(([key, content], index) => (
                        <div key={key}>
                            <ContentBlock
                                direction="left"
                                title={content.title}
                                content={content.text}
                                icon={`../imgs/${key.toLowerCase()}.jpg`} // Adjust icon logic if needed
                                id={`corporate${index + 1}`}
                            />
                        </div>
                    ))}
                </Slider>
            </div>


            <Contact
                title={ContactContent.title}
                content={ContactContent.text}
                id="contact"
            />
        </Container>
    );
};

export default Home;
