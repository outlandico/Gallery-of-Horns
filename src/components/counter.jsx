import { useState } from 'react'; // Import React and useState
import PropTypes from 'prop-types'; // Import PropTypes

function Counter(props) {
  const [count, setCount] = useState(0); // Initialize count state with 0

  // Function to handle count increment
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); // Increment count by 1
    props.handleCount(); // Call the parent handleCount function
  };

  return (
    <>
      <p>
        Current Count: {count}
      </p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

// Define PropTypes for the Counter component
Counter.propTypes = {
  handleCount: PropTypes.func.isRequired, // handleCount should be a function and is required
};

export default Counter;
