import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { ContactContainer } from "./styles";

const GOOGLE_FORM_URL = process.env.REACT_APP_GOOGLE_FORM_URL;

const Contact = ({ title, content, id }: ContactProps) => {
  return (
      <ContactContainer id={id}>
        <Row justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24} xs={24}>
            <Slide direction="left" triggerOnce>
              <Block title={title} content={content} />
            </Slide>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Slide direction="right" triggerOnce>
              <iframe
                  src={GOOGLE_FORM_URL}
                  width="100%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Google Form"
              ></iframe>
            </Slide>
          </Col>
        </Row>
      </ContactContainer>
  );
};

export default withTranslation()(Contact);
