import styled from "styled-components";
import FeaturedCards from "./featuredCards";
import {Grid} from "@mui/material";


const FeaturedSection = () => {
        const cards = [
            {
                id: 1,
                caption: 'Chiffon Gorgette Sarees',
                src: 'https://ik.imagekit.io/dharohar/chiffon-gorgette-saree/99974fc2-d459-4dd3-bbd8-caa15c4a3acf_6gvwYPVo3.JPG?updatedAt=1641716686998',
                routeTo: '/chiffon-gorgette-saree'
            },
            {
                id: 2,
                caption: 'Khathan Silk Saree',
                src: 'https://ik.imagekit.io/dharohar/khathan_silk_saree/PHOTO-2021-06-29-13-42-36_2_bj3h7cqDf_C.jpg?updatedAt=1641700217611',
                routeTo: '/khathan-silk-saree'
            },
            {
                id: 3,
                caption: 'Resham Mushrise Sarees',
                src: 'https://ik.imagekit.io/dharohar/Resham_Mushrise_Sarees_/d8e1e4f3-bdde-4a72-95c2-e6cb47b79121_R3Ftpzs7puY.JPG?updatedAt=1641718703708',
                routeTo: '/resham-mushrise-sarees'
            }
        ];

    return (
        <Layout>
            <HeaderSection>
                <h3>Featured Collections</h3>
            </HeaderSection>
            <CollectionSection>
                <Grid container spacing={2} style={{ alignContent: 'center', justifyContent: 'space-evenly' }}>
                    {cards.map((item) => (
                        <Grid item>
                            <FeaturedCards
                                id={item.id}
                                src={item.src}
                                caption={item.caption}
                                routeTo={item.routeTo}
                            />
                        </Grid>
                    ))}
                </Grid>
            </CollectionSection>
        </Layout>
    );

}

const Layout = styled.div`
    padding-bottom: 64px;
`;

const HeaderSection = styled.div`
    padding: 64px 0px;
`;

const CollectionSection = styled.div`
`;

export default FeaturedSection;
