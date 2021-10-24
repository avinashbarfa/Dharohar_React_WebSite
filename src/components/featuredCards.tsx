import { Figure } from "react-bootstrap";

const FeaturedCards = ({id, src, caption}: any) => {

    return (
        <Figure>
            <Figure.Image
                id={id}
                width={300}
                height={300}
                src={src}
                className={"featured-img"}
            />
            <Figure.Caption>
                {caption}
            </Figure.Caption>
        </Figure>
    )
}

export default FeaturedCards;


