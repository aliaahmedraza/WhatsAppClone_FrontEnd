import React from 'react'
import {IMaskInput} from 'react-imask'
const PhoneInputMask = React.forwardRef((props, ref) => {
  return (
    <IMaskInput
      {...props}
      mask="923000000000"
      inputRef={ref}
    />
  );
});

export default PhoneInputMask;
