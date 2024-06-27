import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';

const options = ['aa', 'aaa', 'abc', 'abcd'];

function MultiSelectAutocomplete() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event, value) => {
    console.log("Selected values:", value); // Debugging statement
    setSelectedOptions(value);
  };

  return (
    <div>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        noOptionsText="No options"
        value={selectedOptions}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Select Options"
            placeholder="Favorites"
          />
        )}
      />
      <div>
        <h4>Selected Options:</h4>
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultiSelectAutocomplete;
