import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Gallery from './Gallery.jsx';
import SelectedBeast from './SelectedBeast.jsx';
import jsonData from '../data.json';
// import Counter from './counter.jsx';

function App() {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const handleSelectBeast = (beast) => {
    setSelectedBeast(beast);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBeast(null);
    setShowModal(false);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Header />
      <Footer />
      <Gallery data={jsonData} currentCount={count}handleIncrement={handleIncrement} onSelectBeast={handleSelectBeast} />
      <SelectedBeast beast={selectedBeast} showModal={showModal} onCloseModal={handleCloseModal} />
      {/* <Counter currentCount={count} handleCount={handleIncrement} /> */}
    </>
  );
}

export default App;
