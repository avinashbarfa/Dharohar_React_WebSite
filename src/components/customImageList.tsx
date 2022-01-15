import {ImageList, ImageListItem, useMediaQuery} from "@mui/material";

export interface ItemDataProps {
    img: string;
}

export interface ImageListProps {
    itemData: ItemDataProps[];
}

const CustomImageList = ({itemData}: ImageListProps) => {
    const isMobile = useMediaQuery('(max-width:800px)');
    return (
        <ImageList variant="woven" cols={isMobile ? 1 : 4 } gap={24} >
            {itemData?.map((item: ItemDataProps) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={"khathan-silk-saree"}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
};

export default CustomImageList;
