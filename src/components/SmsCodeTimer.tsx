import React, { useEffect, useState } from "react";

import { Button, Typography } from "@mui/material";

import { useAuth } from "../contexts/AuthContext";

const SmsCodeTimer = ({ phoneNumber }: any) => {
  const { loginWithPhoneNumber } = useAuth();

  const [timer, setTimer] = useState<number>(120);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  useEffect(() => {
    if (isTimerRunning && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }
  }, [isTimerRunning, timer]);

  const handleResendCode = async () => {
    await loginWithPhoneNumber(phoneNumber);
    setTimer(120); // Reset the timer to 2 minutes
    setIsTimerRunning(true); // Start the timer
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} دقیقه و ${remainingSeconds} ثانیه`;
  };

  return (
    <Typography
      variant="subtitle2"
      sx={{
        textAlign: "center",
        color: "#606060",
        marginTop: "12px",
      }}
    >
      {isTimerRunning ? (
        `برای درخواست کد جدید ${formatTime(timer)} صبر کنید.`
      ) : (
        <Button
          onClick={handleResendCode}
          variant="contained"
          fullWidth
          color="info"
          disabled={timer !== 0}
          sx={{
            width: "631px",
            marginTop: "20px",
            paddingY: "15px",
          }}
        >
          ارسال مجدد کد
        </Button>
      )}
    </Typography>
  );
};

export default SmsCodeTimer;
