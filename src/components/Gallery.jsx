import { useState, useEffect } from 'react'; // Removed React import since it's not used

import { Card, ListGroup, Button } from 'react-bootstrap';
import jsonData from '../data.json';

function Gallery() {
    const [galleryData, setGalleryData] = useState([]);
    const [favorites, setFavorites] = useState({});

    useEffect(() => {
        setGalleryData(jsonData);
        const initialFavorites = {};
        jsonData.forEach(item => {
            initialFavorites[item.title.toLowerCase()] = 0;
        });
        setFavorites(initialFavorites);
    }, []);

    const handleFavoriteClick = (title) => {
        setFavorites(prevFavorites => ({
            ...prevFavorites,
            [title.toLowerCase()]: prevFavorites[title.toLowerCase()] + 1
        }));
    };

    return (
        <main>
            <section className="deck">
                {galleryData.map((item, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image_url} alt={item.title} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Button onClick={() => handleFavoriteClick(item.title)} variant="primary">Favorite ({favorites[item.title.toLowerCase()]})</Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Horns: {item.horns}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                ))}
            </section>
        </main>
    );
}

export default Gallery;
