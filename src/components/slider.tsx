import Carousel from 'react-material-ui-carousel'
import {Paper} from "@mui/material";

const Slider = () => {

    const sliderData = [
        {
            id: 1,
            title: 'First slide label',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            src: 'https://ik.imagekit.io/dharohar/Resham_Mushrise_Sarees_/d8e1e4f3-bdde-4a72-95c2-e6cb47b79121_R3Ftpzs7puY.JPG?updatedAt=1641718703708'
        },
        {
            id: 2,
            title: 'Second slide label',
            subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
            src: 'https://ik.imagekit.io/dharohar/Resham_Mushrise_Sarees_/d8e1e4f3-bdde-4a72-95c2-e6cb47b79121_R3Ftpzs7puY.JPG?updatedAt=1641718703708'
        }

    ];

    const Slides = ({items} :any) => {
        return (
            items.map((item:any) => <Paper>
                <img src={item.src} />
            </Paper>)
        )
    }

    return (
        <Carousel>
            <Slides items={sliderData} />
        </Carousel>
    )
}

export default Slider;
