import React from 'react';
import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ value, onChange }) => {
    console.log("aaaaaa");
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: onlyNumbers(event.target.value)
      }
    });
  }

  return (
    <InputMask
      name="cpf"
      mask="999.999.999-99"
      value={value}
      onChange={handleChange}
    />
  );
};

export default MaskedInput;
