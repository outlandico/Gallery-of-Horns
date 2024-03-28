
import PropTypes from 'prop-types'; // Import PropTypes
import { Modal, Button } from 'react-bootstrap';

function SelectedBeast({ beast, showModal, onCloseModal }) {
  return (
    <Modal show={showModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{beast && beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {beast && (
          <>
            <img src={beast.image_url} alt={beast.title} />
            <p>{beast.description}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// Define PropTypes for the SelectedBeast component
SelectedBeast.propTypes = {
  beast: PropTypes.object, // beast should be an object
  showModal: PropTypes.bool.isRequired, // showModal should be a boolean and is required
  onCloseModal: PropTypes.func.isRequired, // onCloseModal should be a function and is required
};

export default SelectedBeast;
