import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import LogoContanerWrapper from "./LogoContanerWrapper";

function Login() {
  return (
    <LogoContanerWrapper>
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
          id="outlined-basic"
          fullWidth
          label="شماره موبایل"
          variant="outlined"
          sx={{
            width: "631px",
            marginX: "20px",
          }}
        />

        <Button
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
    </LogoContanerWrapper>
  );
}

export default Login;
