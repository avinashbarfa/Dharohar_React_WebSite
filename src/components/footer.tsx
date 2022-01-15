import styled from 'styled-components';
import {Box, Container, Grid, useMediaQuery} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    const isMobile = useMediaQuery('(max-width:800px)');
    return (
        <FooterContainer style={{
            maxWidth: '100vw'
        }}>
            <Grid container spacing={2} direction={isMobile ? 'column' : 'row' }>
                <Grid item xs={6}>
                    <section>
                        <h3>About Company</h3>
                        <hr />
                        <span>
                         Dharohar was established in 1990 as a provider of integrated print solutions to print buyers across all domains & corporations.With the strong hold to our company philosophy, highest satisfaction.
                     </span>
                    </section>
                </Grid>
                <Grid item xs={3}>
                    <section>
                        <h3>Services</h3>
                        <hr />
                        <List>
                            <StyledLink to="/chiffon-gorgette-saree">Chiffon Gorgette Sarees</StyledLink>
                            <StyledLink
                                to="/khathan-silk-saree"
                            >
                                Khathan Silk Saree
                            </StyledLink>
                            <StyledLink
                                to="/resham-mushrise-sarees"
                            >
                                Resham Mushrise Sarees
                            </StyledLink>
                        </List>
                    </section>
                </Grid>
                <Grid item xs={3}>
                    <section>
                        <h3>Contact Us</h3>
                        <hr />
                        <List>
                            <p>Address: <br />SH 11/18 A-D-1 Gayatridham Colony, Chatripur, Varanasi, Uttar Pradesh, India </p>
                            <p>Contact: +91-8005249997</p>
                        </List>
                    </section>
                </Grid>
            </Grid>
        </FooterContainer>
    );
}


const FooterContainer = styled(Container)`
  background: #313d53;
  border-top: 5px solid #f67878;
  color: #aebcd8;
  padding: 40px 40px 40px 18px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #aebcd8;
  margin: 0 12px;
  :hover {
    color: #ffffff;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
`;

export default Footer;
