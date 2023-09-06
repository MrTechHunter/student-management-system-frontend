import { Box, Container, Paper } from "@mui/material";

import logo from "../../assets/images/logo.png";
import Footer from "./Footer";

function LogoContainerWrapper(props: any) {
  return (
    <>
      <Container
        className="sm:flex flex-wrap"
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

        <Paper
          variant="outlined"
          sx={{
            borderRadius: "15px",
          }}
        >
          {props.children}
        </Paper>
      </Container>
      <Footer />
    </>
  );
}

export default LogoContainerWrapper;
