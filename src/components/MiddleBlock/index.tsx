import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import Slider from "react-slick";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon"; // Import SvgIcon component
import { MiddleBlockSection, Content, ContentWrapper, SliderWrapper, IconTextWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  sliderContent?: { icon: string; text: string }[]; // Array for SVGs & text
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, sliderContent, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Slider settings
// Slider settings
  const sliderSettings = {
    dots: false,            // Show navigation dots
    infinite: true,        // Infinite looping
    speed: 500,           // Transition speed
    slidesToShow: 1,      // Only ONE item at a time
    slidesToScroll: 1,
    autoplay: true,       // Auto-scroll enabled
    autoplaySpeed: 3000,  // Time before sliding to next item
    arrows: false,        // Hide navigation arrows (optional)
  };

  return (
      <MiddleBlockSection>
        <Slide direction="up" triggerOnce>
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <h6>{t(title)}</h6>
                <Content>{t(content)}</Content>

                {/* Slider with SVG Icons */}
                {sliderContent && sliderContent.length > 0 && (
                    <SliderWrapper>
                      <Slider {...sliderSettings}>
                        {sliderContent.map((item, index) => (
                            <IconTextWrapper key={index}>
                              <SvgIcon src={item.icon} width="150px" height="150px" />
                              <br/>
                              <p>{t(item.text)}</p>
                            </IconTextWrapper>
                        ))}
                      </Slider>
                    </SliderWrapper>
                )}

                {/* Button Below Slider */}
                {button && (
                    <Button name="submit" onClick={() => scrollTo("mission")}>
                      {t(button)}
                    </Button>
                )}
              </Col>
            </ContentWrapper>
          </Row>
        </Slide>
      </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
