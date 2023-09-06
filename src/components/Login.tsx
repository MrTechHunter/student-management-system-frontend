import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import { useAuth } from "../contexts/AuthContext";
import VerificationCodeInput from "./VerificationCodeInput";
import LogoContainerWrapper from "./Wrappers/LogoContainerWrapper";

function Login() {
  const { loginWithPhoneNumber, confirmSmsCode, isAuthenticated } = useAuth();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeComplete, setIsCodeComplete] = useState(false);
  const [showSmsCodeVerification, setShowSmsCodeVerification] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginSubmit = async () => {
    if (!isCodeComplete) {
      setErrorMessage("Verification code is not complete.");
      return;
    }

    try {
      await confirmSmsCode(phoneNumber, verificationCode);
      console.log("Verification Code Submitted:", verificationCode);
    } catch (error) {
      setErrorMessage("Verification code is not correct. Please try again.");
      return;
    }
  };

  const handleSendSMSCode = async () => {
    await loginWithPhoneNumber(phoneNumber);
    setShowSmsCodeVerification(true);
  };

  const handleVerificationCodeComplete = (code: any) => {
    console.log("handleVerificationCodeComplete is called with code:", code); // Add this line for debugging
    setVerificationCode(code);
    setIsCodeComplete(true);
  };

  return (
    <LogoContainerWrapper>
      {showSmsCodeVerification ? (
        <>
          <Box>
            <Typography
              variant="h5"
              // className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              gutterBottom
              sx={{
                textAlign: "center",
                marginTop: "60px",
                fontWeight: "bold",
              }}
            >
              یک پیام برای شما ارسال شد
            </Typography>

            <Typography
              variant="subtitle1"
              // className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              sx={{
                textAlign: "center",
                color: "#ADADAE",
              }}
            >
              لطفا کد ارسال شده به شماره {phoneNumber} را در بخش زیر وارد کنید
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              paddingX: "112px",
              paddingTop: "42px",
              paddingBottom: "79px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <VerificationCodeInput
              length={4}
              onComplete={handleVerificationCodeComplete}
            />

            <Button
              onClick={handleLoginSubmit}
              variant="contained"
              fullWidth
              color="success"
              // disabled={!isCodeComplete}
              sx={{
                width: "631px",
                marginTop: "20px",
                paddingY: "15px",
              }}
            >
              ورود / ثبت‌نام
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <Typography
              variant="h5"
              // className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              gutterBottom
              sx={{
                textAlign: "center",
                marginTop: "60px",
                fontWeight: "bold",
              }}
            >
              ورود / ثبت نام متخصصین
            </Typography>

            <Typography
              variant="subtitle2"
              // className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              sx={{
                textAlign: "center",
                color: "#ADADAE",
              }}
            >
              برای ورود و یا ثبت‌نام در بروکلی لطفا شماره موبایل خود را وارد
              کنید.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              paddingX: "112px",
              paddingTop: "60px",
              paddingBottom: "79px",
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
                height: "75px",
                direction: "rtl",
              }}
            />

            <Button
              onClick={handleSendSMSCode}
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
        </>
      )}
    </LogoContainerWrapper>
  );
}

export default Login;
