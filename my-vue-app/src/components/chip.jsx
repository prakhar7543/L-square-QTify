import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./chip.css";
import {styled} from '@mui/material/styles';

const CustomChip = styled(Chip)({
  '& .MuiChip-label': {
    fontFamily: "Poppins, sans-serif",
          padding: '0',
          width: 55,
          height: 15,
          fontWeight: 'lighter',
          fontSize: 'x-small',
          objectFit: 'cover'
  },
});

export default function Chips({ followers }) {
  return (
    <Stack direction="row" spacing={1} sx={{paddingLeft: '4px'}}>
      <CustomChip
        
        label={`${followers} Follows`}
        variant="outlined"
        sx={{
          height: 23,
          width: 71,
          backgroundColor: "black",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          // padding: '6px'
        }}
      />
    </Stack>
  );
}
