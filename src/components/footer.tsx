import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {

    return (
        <FooterContainer fluid>
            <Row>
                <Col md>
                    <h3>About Company</h3>
                    <hr />
                     <span>
                         Dharohar was established in 1990 as a provider of integrated print solutions to print buyers across all domains & corporations.With the strong hold to our company philosophy, highest satisfaction.
                     </span>
                </Col>
                <Col md>
                    <h3>Services</h3>
                    <hr />
                    <span>List of services</span>
                </Col>
                <Col md>
                    <h3>Contact Us</h3>
                    <span>Text</span>
                </Col>
            </Row>
        </FooterContainer>
    );
}


const FooterContainer = styled(Container)`
  background: #313d53;
  border-top: 5px solid #f67878;
  color: #aebcd8;
  padding: 40px 40px 40px 18px;
`;



export default Footer;
