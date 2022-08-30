import React from 'react';
import InputMask from 'react-input-mask';
import TextField from '@mui/material/TextField';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ name,value, onChange }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: onlyNumbers(event.target.value)
      }
    });
    console.log(event.target.value, " VALUE " + value);
  }

  return (
    <InputMask
    name={name}
    mask="999.999.999-99"
    value={value}
    onChange={handleChange}
  >
    {() => <TextField />}
  </InputMask>
  );
};

export default MaskedInput;
