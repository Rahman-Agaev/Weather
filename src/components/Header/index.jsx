import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from "@mui/system";

import { inputSx, wrapperSx } from "./styles";




export default function Header({ onChange }) {


    return (
        <Box sx={wrapperSx}>
            <Box>
                <h1>Weather forecast</h1>
            </Box>
            <Box>
                <TextField 
                    sx={inputSx}
                    onChange={onChange}
                    defaultValue={'London'}
                    label="City"
                    variant="filled"
                />
                
            </Box>
        </Box>
    );
}

