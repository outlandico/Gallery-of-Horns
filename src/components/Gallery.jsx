import { useState } from 'react'; // Import useState from 'react'
import PropTypes from 'prop-types'; // Import PropTypes
import { Card, Row, Col, Modal } from 'react-bootstrap';
import Counter from './counter'; // Assuming Counter component is in the same directory
import HornFilter from './HornFilter'; // Import the HornFilter component

function Gallery(props) {
    const [showModal, setShowModal] = useState(false); // Use useState hook
    const [selectedImage, setSelectedImage] = useState('');
    const [filteredData, setFilteredData] = useState(props.data); // State to hold filtered data, initially set to all data

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

   // Function to handle filtering data based on horn filter
const handleFilterChange = (filteredData) => {
    // Check if filteredData is null or undefined (indicating "All" option)
    if (!filteredData) {
        setFilteredData(props.data); // Set filteredData to the entire data array
    } else {
        setFilteredData(filteredData); // Otherwise, set filteredData to the filtered array
    }
};


    return (
        <main>
            <HornFilter beasts={props.data} setFilteredBeasts={handleFilterChange} /> {/* Render the HornFilter component */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {filteredData.map((beast, index) => ( /* Use filteredData instead of jsonData */
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
                                <Counter currentCount={props.currentCount} handleCount={props.handleIncrement} />
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

// Define PropTypes for the Gallery component
Gallery.propTypes = {
  data: PropTypes.array.isRequired, // data should be an array and is required
  currentCount: PropTypes.number.isRequired, // currentCount should be a number and is required
  handleIncrement: PropTypes.func.isRequired, // handleIncrement should be a function and is required
};

export default Gallery;
