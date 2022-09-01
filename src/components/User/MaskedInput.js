import React from 'react';
import InputMask from 'react-input-mask';
import TextField from '@mui/material/TextField';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ value, onChange, name, mask, label }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value)
      }
    });
  }


  return (
    <InputMask
    name={name}
    mask={mask}
    value={value}
    onChange={handleChange}
    label={label}
  >
    {() => <TextField label={label} />}
  </InputMask>
  );
};

export default MaskedInput;
