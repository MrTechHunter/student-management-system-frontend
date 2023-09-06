import React, { useEffect, useRef, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const VerificationCodeInput = ({ length, onComplete }: any) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<React.RefObject<HTMLInputElement>[]>(
    Array.from({ length }, () => React.createRef<HTMLInputElement>())
  );

  useEffect(() => {
    // Focus on the leftmost input field when the component mounts
    inputRefs.current[0].current?.focus();
  }, []);

  const handleCodeChange = (e: any, index: number) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value) && value.length <= 1) {
      // Update the code state correctly
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < length - 1) {
        // Move to the next input field on the right
        inputRefs.current[index + 1].current?.focus();
      }

      // Check if the code is complete
      if (newCode.every((digit) => digit !== "")) {
        onComplete(newCode.join(""));
      }
    }
  };

  console.log("code: ", code);
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          direction: "rtl",
        }}
      >
        {Array.from({ length }, (_, index) => (
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
              value={code[index]}
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
