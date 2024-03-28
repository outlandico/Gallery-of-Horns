import { useState } from 'react';
import { Card, Row, Col, Modal } from 'react-bootstrap';
import jsonData from '../data.json';

function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    // Function to handle clicking on the image to open the modal
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl); // Set the selected image URL
        setShowModal(true); // Show the modal
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setShowModal(false); // Hide the modal
        setSelectedImage(''); // Clear the selected image URL
    };

    return (
        <main>
            <Row xs={1} md={2} lg={3} className="g-4">
                {jsonData.map((beast, index) => (
                    <Col key={index}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={beast.image_url}
                                alt={beast.title}
                                onClick={() => handleImageClick(beast.image_url)}
                                style={{ cursor: 'pointer' }}
                            />
                            <Card.Body>
                                <Card.Title>{beast.title}</Card.Title>
                                <Card.Text>{beast.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
            {/* Modal to display the clicked image */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Body>
                    <img src={selectedImage} alt="Selected Beast" style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
        </main>
    );
}

export default Gallery;
