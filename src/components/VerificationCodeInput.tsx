import React, { useEffect, useRef, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const VerificationCodeInput = ({ length, onComplete }: any) => {
  const [code, setCode] = useState(Array(length).fill(""));

  const inputRefs = useRef<React.RefObject<HTMLInputElement>[]>(
    Array.from({ length }, () => React.createRef<HTMLInputElement>())
  );

  useEffect(() => {
    // Focus on the rightmost input field when the component mounts
    inputRefs.current[length - 1].current?.focus();
  }, []);

  const handleCodeChange = (e: any, index: any) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value) && value.length <= 1) {
      const newCode = [...code];

      // Set the current input value
      newCode[index] = value;
      setCode(newCode);

      // Move to the previous input field if not at the beginning of the code
      if (index > 0) {
        // Use the .current property to access the DOM element and call .focus()
        inputRefs.current[index - 1].current?.focus();
      }

      // Check if the code is complete
      if (newCode.every((digit) => digit !== "")) {
        onComplete(newCode.join(""));
      }
    }
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {code.map((digit, index) => (
          <Grid item xs={1} key={index}>
            <TextField
              key={index}
              variant="outlined"
              size="medium"
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                },
              }}
              value={digit}
              onChange={(e) => handleCodeChange(e, index)}
              inputRef={inputRefs.current[index]}
            />
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="subtitle2"
        sx={{
          textAlign: "center",
          color: "#606060",
          marginTop: "12px",
        }}
      >
        برای درخواست کد جدید 1 دقیقه و 60 ثانیه صبر کنید.
      </Typography>
    </>
  );
};

export default VerificationCodeInput;
