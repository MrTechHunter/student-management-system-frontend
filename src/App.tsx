import Box from "@mui/material/Box/Box";
import List from "@mui/material/List/List";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListItem from "@mui/material/ListItem/ListItem";

import Container from "@mui/material/Container";
import Login from "./components/Login";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <List component={Stack} direction="row">
          <ListItem>
            <ListItemButton>
              <ListItemText
                style={{ textAlign: "center" }}
                primary="درباره ما"
              />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText
                style={{ textAlign: "center" }}
                primary="قوانین و مقررات"
              />
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemText
                style={{ textAlign: "center" }}
                primary="پشتیبانی"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default App;
