import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Book = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#C9B79C' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListBook() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{m:1, pr:2, borderRadius:1, alignItems:"stretch"}}>
        <Grid book md={4} sm={6} xs={12}>
          <Book>
              {/*something to show book cover*/}
          </Book>
        </Grid>
        <Grid book md={3} s={6} xs={12}>
          <Book>
              {/* cartCard.js or something equivalent to show book info nicely...*/}
          </Book>
        </Grid>
        <Grid book md={2} s={6} xs={12}>
          <Book>C</Book>
        </Grid>
        <Grid book md={3} s={6} xs={12}>
          <Book>D</Book>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
