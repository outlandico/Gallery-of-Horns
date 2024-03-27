import React from 'react'; // Import React
import { Card, ListGroup, Button } from 'react-bootstrap'; // Import Bootstrap components

function Gallery() {
    let deer = {
       imageUrl: "https://example.com/deer-image.jpg",
       title: "Deer",
       description: "This is bambi",
       horns: 1
    };

    let antelope = {
        imageUrl: "https://example.com/antelope-image.jpg",
        title: "Antelope",
        description: "This is an antelope.",
        horns: 3
    };
    
    let bighornSheep = {
        imageUrl: "https://example.com/bighorn-sheep-image.jpg",
        title: "Bighorn Sheep",
        description: "This is a bighorn sheep.",
        horns: 2
    };

    // State to keep track of favorites for each beast
    const [favorites, setFavorites] = React.useState({
        deer: 0,
        antelope: 0,
        bighornSheep: 0
    });

    // Function to handle favorite click
    const handleFavoriteClick = (beast) => {
        setFavorites(prevFavorites => ({
            ...prevFavorites,
            [beast]: prevFavorites[beast] + 1
        }));
    };

    return (
        <main>
            <section className="deck">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={deer.imageUrl} alt={deer.title} />
                    <Card.Body>
                        <Card.Title>{deer.title}</Card.Title>
                        <Card.Text>{deer.description}</Card.Text>
                        <Button onClick={() => handleFavoriteClick("deer")} variant="primary">Favorite ({favorites.deer})</Button>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Horns: {deer.horns}</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={antelope.imageUrl} alt={antelope.title} />
                    <Card.Body>
                        <Card.Title>{antelope.title}</Card.Title>
                        <Card.Text>{antelope.description}</Card.Text>
                        <Button onClick={() => handleFavoriteClick("antelope")} variant="primary">Favorite ({favorites.antelope})</Button>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Horns: {antelope.horns}</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={bighornSheep.imageUrl} alt={bighornSheep.title} />
                    <Card.Body>
                        <Card.Title>{bighornSheep.title}</Card.Title>
                        <Card.Text>{bighornSheep.description}</Card.Text>
                        <Button onClick={() => handleFavoriteClick("bighornSheep")} variant="primary">Favorite ({favorites.bighornSheep})</Button>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Horns: {bighornSheep.horns}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </section>
        </main>
    );
}

export default Gallery;
