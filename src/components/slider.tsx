import Carousel from 'react-material-ui-carousel'
import {Paper} from "@mui/material";
import styled from "styled-components";

const Slider = () => {

    const sliderData = [
        {
            id: 1,
            title: 'First slide label',
            src: 'https://ik.imagekit.io/dharohar/khathan_silk_saree/PHOTO-2021-06-29-13-42-36_2_bj3h7cqDf_C.jpg?updatedAt=1641700217611'
        },
        {
            id: 2,
            title: 'Second slide label',
            src: 'https://ik.imagekit.io/dharohar/chiffon-gorgette-saree/99974fc2-d459-4dd3-bbd8-caa15c4a3acf_6gvwYPVo3.JPG?updatedAt=1641716686998'
        }

    ];

    return (
        <StyledCarousel animation={'slide'} interval={4000}>
            {sliderData.map((item:any) =>
                <Paper>
                    <img src={item.src} />
                </Paper>
            )}
        </StyledCarousel>
    )
}

export default Slider;

const StyledCarousel = styled(Carousel)`
  height: 500px;
`;
