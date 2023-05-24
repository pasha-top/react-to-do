import React from 'react';
import { Checkbox } from '@mui/material';

const CheckBox = ({checked, onChange}) => {
   
    return (
        <>
            <Checkbox checked={checked} onChange={onChange}></Checkbox>
        </>
    );
};
export default CheckBox;