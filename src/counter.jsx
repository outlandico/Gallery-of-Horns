
import PropTypes from 'prop-types'; // Import PropTypes

function Counter(props) {
  return (
    <>
      <p>
        Current Count: {props.currentCount}
      </p>
      <button onClick={props.handleCount}>Increment</button>
    </>
  );
}

// Define PropTypes for the Counter component
Counter.propTypes = {
  currentCount: PropTypes.number.isRequired, // currentCount should be a number and is required
  handleCount: PropTypes.func.isRequired, // handleCount should be a function and is required
};

export default Counter;
