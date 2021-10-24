import styled from "styled-components";
import FeaturedCards from "./featuredCards";
import {chiffonGorgetteSarees1, khathanSilkSaree2, ReshamMushriseSarees1} from '../assest'
import {Col, Row} from "react-bootstrap";


const FeaturedSection = () => {
        const cards = [
            {
                id: 1,
                caption: 'Chiffon Gorgette Sarees',
                src: chiffonGorgetteSarees1
            },
            {
                id: 2,
                caption: 'Khathan Silk Saree',
                src: khathanSilkSaree2
            },
            {
                id: 3,
                caption: 'Resham Mushrise Sarees',
                src: ReshamMushriseSarees1
            }
        ];

    return (
        <Layout>
            <HeaderSection>
                <h3>Featured Collections</h3>
            </HeaderSection>
            <CollectionSection>
                <Row>
                    {cards.map((item) => (
                        <Col md>
                            <FeaturedCards
                                id={item.id}
                                src={item.src}
                                caption={item.caption}/>
                        </Col>
                    ))}
                </Row>
            </CollectionSection>
        </Layout>
    );

}

const Layout = styled.div`
    
    .featured-img {
      width: 300px;
      height: 300px;
    }
`;

const HeaderSection = styled.div`
    padding: 64px 0px;
`;

const CollectionSection = styled.div`
`;

export default FeaturedSection;
