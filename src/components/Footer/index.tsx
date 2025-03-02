import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon, SvgIconMe } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
    SocialSwitch,
    SocialSwitchContainer,
} from "./styles";


interface SocialLinkMeProps {
  href: string;
  src: string;
  alt: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language).then(() => {});
  };



  const SocialLinkMe = ({ href, src,alt}: SocialLinkMeProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            key={src}
            aria-label={src}
            title={alt}
        >

          <SvgIconMe src={src} width="30px" height="30px" alt={alt} />
        </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact Us")}</Language>
              <SocialSwitchContainer>


                <SocialSwitch onClick={() => window.open("https://twitter.com/YourProfile", "_blank")}>
                  <SvgIcon
                      src="twitter.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                  />
                </SocialSwitch>


                <SocialSwitch onClick={() => window.open("https://www.linkedin.com/in/lavin-consulting-services-a131992b4/", "_blank")}>
                  <SvgIcon
                      src="linkedin.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                  />
                </SocialSwitch>
              </SocialSwitchContainer>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Kitengela</Para>
              <Para>Kitengela</Para>
              <Para>Nairobi</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                      src="united-states.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                      src="spain.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>

        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>

              <SocialLinkMe
                  href="https://www.linkedin.com/in/martin-ochieng-a829b67b/"
                  src="martin.svg"
                  alt="From Martin With ❤️"
              />

            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
