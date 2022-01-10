import {ImageList, ImageListItem} from "@mui/material";

export interface ItemDataProps {
    img: string;
}

export interface ImageListProps {
    itemData: ItemDataProps[];
}

const CustomImageList = ({itemData}: ImageListProps) => {
    return (
        <ImageList variant="woven" cols={4} gap={24} >
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
