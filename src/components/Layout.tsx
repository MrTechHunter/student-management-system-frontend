import { ReactNode } from "react";

import { Navigate } from "react-router-dom";

import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { useAuth } from "../contexts/AuthContext";
import CollapsibleDrawer from "./CollapsibleDrawer";

type Props = {
  title?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
};

function Layout(props: Props) {
  const { isAuthenticated, userProfile } = useAuth();

  if (!isAuthenticated) {
    // Redirect the user to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  console.log("userProfile: ", userProfile);

  return (
    <>
      <CollapsibleDrawer />

      <Box
        component="main"
        sx={{
          backgroundColor: "#FFFFFF",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4, mr: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Typography
                component="h4"
                variant="h4"
                color="inherit"
                noWrap
                sx={{
                  mb: "20px",
                }}
              >
                {props.title}
              </Typography>
              <Paper
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  width: `${props.width ? props.width : {}}`,
                  height: `${props.height ? props.height : "80vh"}`,
                }}
              >
                {props.children}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Layout;
