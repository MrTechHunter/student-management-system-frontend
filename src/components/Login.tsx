import { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import { useAuth } from "../contexts/AuthContext";
import LogoContainerWrapper from "./Wrappers/LogoContainerWrapper";

function Login() {
  const { loginWithPhoneNumber } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = async () => {
    await loginWithPhoneNumber(phoneNumber);
  };

  return (
    <LogoContainerWrapper>
      <Box>
        <Typography
          variant="h5"
          // className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          gutterBottom
          sx={{
            textAlign: "center",
            paddingTop: "40px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          ورود / ثبت نام متخصصین
        </Typography>

        <Typography
          variant="subtitle2"
          // className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#ADADAE",
          }}
        >
          .برای ورود و یا ثبت‌نام در بروکلی لطفا شماره موبایل خود را وارد کنید
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          padding: 5,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="tel"
          fullWidth
          label="شماره موبایل"
          variant="outlined"
          sx={{
            width: "631px",
            marginX: "20px",
            direction: "rtl",
          }}
        />

        <Button
          onClick={handleLogin}
          variant="contained"
          fullWidth
          color="success"
          sx={{
            width: "631px",
            marginTop: "20px",
            paddingY: "15px",
          }}
        >
          ارسال کد
        </Button>
      </Box>
    </LogoContainerWrapper>
  );
}

export default Login;
