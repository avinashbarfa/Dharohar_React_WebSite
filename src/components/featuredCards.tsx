// import { Figure } from "react-bootstrap";

import {ImageListItem, ImageListItemBar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const FeaturedCards = ({id, src, caption, routeTo}: any) => {

    let navigate = useNavigate();
    return (
            <StyledImageListItem key={id} onClick={() => navigate(routeTo)}>
                <img
                    src={src}
                    alt={caption}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={caption}
                    position="below"
                />
            </StyledImageListItem>
    )
}

export default FeaturedCards;

const StyledImageListItem = styled(ImageListItem)`
  :hover {
    cursor: pointer;
  }
  .MuiImageListItem-img {
    width: 300px !important;
    height: 300px !important;
  }

`


