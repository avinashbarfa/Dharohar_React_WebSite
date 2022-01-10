import styled from 'styled-components';
import {Box, Container, Grid, Stack} from "@mui/material";

const Footer = () => {

    return (
        <FooterContainer style={{
            maxWidth: '100vw'
        }}>
            <Grid container spacing={2}>
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
                        <span>List of services</span>
                    </section>
                </Grid>
                <Grid item xs={3}>
                    <section>
                        <h3>Contact Us</h3>
                        <hr />
                        <span>Text</span>
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

const Columns = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export default Footer;
