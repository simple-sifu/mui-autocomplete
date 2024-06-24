import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

const options = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' }
];

function CustomAutocomplete() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (event, newValue) => {
    if (newValue && selectedOptions.find(option => option.id === newValue.id)) {
      setError('Already selected');
    } else {
      setError('');
      setSelectedOptions([...selectedOptions, newValue]);
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      onChange={handleChange}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <Box sx={{ position: 'relative' }}>
          <input
            {...params.inputProps}
            style={{
              width: '100%',
              padding: '10px',
              borderColor: error ? 'red' : 'initial',
              borderWidth: '1px',
              borderRadius: '4px',
              outline: 'none'
            }}
            placeholder="Custom Autocomplete"
          />
          {error && (
            <Box
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                color: 'red',
                fontSize: '12px',
                marginTop: '5px'
              }}
            >
              {error}
            </Box>
          )}
        </Box>
      )}
    />
  );
}

export default CustomAutocomplete;

