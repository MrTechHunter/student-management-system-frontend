import Container from "@mui/material/Container";
import { Box, Paper } from "@mui/material";
import logo from "../images/logo.png";

function LogoContanerWrapper(props: any) {
  return (
    <Container
      maxWidth="md"
      sx={{
        width: "855px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="logo" width={"364px"} height={"142px"} />
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
        {props.children}
      </Paper>
    </Container>
  );
}

export default LogoContanerWrapper;
