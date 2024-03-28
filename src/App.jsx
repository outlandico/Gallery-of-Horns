import { useState } from 'react'; // Removed React import since it's not used

import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import SelectedBeast from './components/SelectedBeast.jsx';
import jsonData from './data.json';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Function to handle selecting a beast
  const handleSelectBeast = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true); // Show the modal when a beast is selected
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedBeast(null);
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <Content />
      <Footer />
      <Gallery data={jsonData} onSelectBeast={handleSelectBeast} />
      {/* Render SelectedBeast component with Modal */}
      <SelectedBeast beast={selectedBeast} showModal={showModal} onCloseModal={handleCloseModal} />
    </>
  );
}

export default App;
