
import PropTypes from 'prop-types'; // Import PropTypes

function HornFilter({ beasts, setFilteredBeasts }) {
    // Function to handle filter change
    const handleChange = (event) => {
        const selectedValue = event.target.value; // Get the selected value from the event
        if (selectedValue === 'all') {
            setFilteredBeasts(null); // Pass null when "All" is selected
        } else {
            const filteredBeasts = beasts.filter(beast => beast.horns === parseInt(selectedValue)); // Filter beasts based on selected value
            setFilteredBeasts(filteredBeasts); // Pass filtered data
        }
    };

    return (
        <select onChange={handleChange}>
            <option value="all">All</option> {/* Option for displaying all images */}
            <option value="1">One Horn</option> {/* Option for one horn */}
            <option value="2">Two Horns</option> {/* Option for two horns */}
            {/* Add more options for other horn counts if needed */}
        </select>
    );
}

// Define PropTypes for the HornFilter component
HornFilter.propTypes = {
    beasts: PropTypes.array.isRequired, // Validate 'beasts' prop as an array and is required
    setFilteredBeasts: PropTypes.func.isRequired, // Validate 'setFilteredBeasts' prop as a function and is required
};

export default HornFilter;
