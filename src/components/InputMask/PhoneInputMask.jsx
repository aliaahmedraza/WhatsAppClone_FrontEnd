import React from "react";
import { IMaskInput } from "react-imask";

const PhoneInputMask = React.forwardRef(
  ({ onChange, placeholder, ...props }, ref) => {
    const handleAccept = (value) => {
      let digits = value.replace(/\D/g, "");

      if (digits.startsWith("0")) {
        digits = "92" + digits.slice(1);
      } else if (digits.startsWith("3") && !digits.startsWith("923")) {
        digits = "92" + digits;
      } else if (
        digits &&
        !digits.startsWith("92") &&
        digits[0] !== "0" &&
        digits[0] !== "3"
      ) {
        digits = "92";
      }

      if (digits.startsWith("92") && digits.length >= 3) {
        if (digits[2] !== "3") {
          digits = digits.slice(0, 2) + "3" + digits.slice(3);
        }
      }

      if (digits.length > 12) {
        digits = digits.slice(0, 12);
      }

      onChange?.({
        target: {
          name: props.name,
          value: digits,
        },
      });
    };

    return (
      <IMaskInput
        {...props}
        inputRef={ref}
        mask="000000000000"
        lazy={true}
        overwrite
        onAccept={handleAccept}
        placeholder={placeholder}
      />
    );
  }
);

export default PhoneInputMask;
