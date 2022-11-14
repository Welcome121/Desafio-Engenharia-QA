import React from 'react';

import { TextField } from '@mui/material';


export default function Input(props) {

    const { name, label, value, onChange, error=null, type, ...other } = props;

    return (
        <TextField 
            variant='outlined'
            autoComplete='off'
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type || 'text'}
            { ...other }
            { ...(error && { error: true, helperText: error }) }
            fullWidth
        />
    );
}
