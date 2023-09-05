import { Box, Container, Paper } from "@mui/material";

import logo from "../../assets/images/logo.png";

function LogoContainerWrapper(props: any) {
  return (
    <Container
      sx={{
        display: "flex",
        maxWidth: "855px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          width: "364px",
          height: "142px",
        }}
      />

      <Paper variant="outlined">{props.children}</Paper>
    </Container>
  );
}

export default LogoContainerWrapper;
