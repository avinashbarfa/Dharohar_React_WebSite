import styled from "styled-components";

const AboutCompany = () => {

    return (
    <Layout>
        <HeaderSection>
            <h3>About Us</h3>
        </HeaderSection>
        <DescriptionSection>
            <p>Dharohar was established in 1990 as a provider of integrated print solutions to print buyers across all domains & corporations.With the strong hold to our company philosophy, highest satisfaction.</p>
        </DescriptionSection>
    </Layout>);

};


const Layout = styled.div``;


const HeaderSection = styled.div`
    padding: 24px 0px;
`;

const DescriptionSection = styled.div``;

export default AboutCompany;
