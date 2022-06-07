import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [book, setBook] = React.useState('');

  const handleChange = (event) => {
    setBook(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="book-label">Book</InputLabel>
        <Select
          labelId="book-label"
          label="Book"
          id="Book"
          name="book_id"
          placeholder="Book"
          value={book?JSON.stringify(book):'default'}
          onChange={handleChange}
        >
          <MenuItem value={"default"}></MenuItem>
            <MenuItem></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
