import { lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import PayrollProduct from "../../content/PayrollProduct.json";
import SocialMedia from "../../content/SocialMedia.json";
import SchoolApplication from "../../content/SchoolApplication.json";
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
        autoplaySpeed: 3000,
        arrows: true,
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
            />
            <ContentBlock
                direction="left"
                title={AboutContent.title}
                content={AboutContent.text}
                section={AboutContent.section}
                icon="../imgs/reliable.jpg"
                id="about"
            />
            <ContentBlock
                direction="right"
                title={MissionContent.title}
                content={MissionContent.text}
                icon="../imgs/money3.jpg"
                id="mission"
            />

            {/* Section Title for the Carousel */}
            <div style={{ textAlign: "center", margin: "10px 0" }} >
                <h2 id={"product"} style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>
                    🚀 Explore What We Do
                </h2>

            </div>

            {/* Carousel for Product and Product2 */}
            <Slider {...sliderSettings}>
                <div>
                    <ContentBlock
                        direction="left"
                        title={ProductContent.title}
                        content={ProductContent.text}
                        icon="../imgs/tax3.jpg"
                        id="product1"
                    />
                </div>
                <div>
                    <ContentBlock
                        direction="left"
                        title={PayrollProduct.title}
                        content={PayrollProduct.text}
                        icon="../imgs/payroll1.jpg"
                        id="product2"
                    />
                </div>
                <div>
                    <ContentBlock
                        direction="left"
                        title={SocialMedia.title}
                        content={SocialMedia.text}
                        icon="../imgs/socialMedia1.jpg"
                        id="product3"
                    />
                </div>

                <div>
                    <ContentBlock
                        direction="left"
                        title={SchoolApplication.title}
                        content={SchoolApplication.text}
                        icon="../imgs/schoolApp1.jpg"
                        id="product4"
                    />
                </div>
            </Slider>

            <Contact
                title={ContactContent.title}
                content={ContactContent.text}
                id="contact"
            />
        </Container>
    );
};

export default Home;
