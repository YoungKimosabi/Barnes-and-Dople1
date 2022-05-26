import Stack from '@mui/material/Stack';
import React from 'react'
import MUIButton from '@mui/material/Button';

export default function Button({children, variant, ...props}) {
  return (
    <MUIButton variant={variant ?? "outlined"} {...props}>{children}</MUIButton>
  )
}