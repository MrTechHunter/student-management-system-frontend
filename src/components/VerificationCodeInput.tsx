import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const VerificationCodeInput = ({ length, onComplete }: any) => {
  const [code, setCode] = useState(Array(length).fill(""));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCodeChange = (e: any, index: number) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      setCurrentIndex(index === length - 1 ? currentIndex : index + 1);
    }
  };

  useEffect(() => {
    if (currentIndex === length) {
      onComplete(code.join(""));
    }
  }, [code, currentIndex, length, onComplete]);

  console.log(code.join(""));
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
