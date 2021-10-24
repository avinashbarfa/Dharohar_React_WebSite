import {Carousel} from "react-bootstrap";
import first  from "../assest/third.jpg";
import second from "../assest/second.jpg";

const Slider = () => {

    const sliderData = [
        {
            id: 1,
            title: 'First slide label',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            src: first
        },
        {
            id: 2,
            title: 'Second slide label',
            subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
            src: second
        }

    ];

    return (
        <Carousel>
            {sliderData.map((item: any) =>
                <Carousel.Item id={item.id} interval={2000} >
                    <img
                        id={item.id}
                        className="d-block w-100"
                        style={{height: "400px"}}
                        src={item.src}
                        alt={item.src}
                    />
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    )
}

export default Slider;
