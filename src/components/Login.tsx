import Container from "@mui/material/Container";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import logo from "../images/logo.png";

function Login() {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: "1512px",
        height: "982px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="logo" />
      </Box>

      <Paper
        variant="outlined"
        sx={{
          display: "flex",
          padding: 5,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
              paddingTop: "40px",
              fontWeight: "bold",
              textShadow: "#000 0px 4px 6px",
              marginBottom: "15px",
            }}
          >
            ورود / ثبت نام متخصصین
          </Typography>

          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              textAlign: "center",
              textShadow: "#000 0px 4px 4px",
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
              marginX: "20px",
            }}
          />

          <Button
            variant="contained"
            fullWidth
            color="success"
            sx={{
              marginTop: "20px",
              paddingY: "15px",
            }}
          >
            ارسال کد
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
