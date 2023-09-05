import Box from "@mui/material/Box/Box";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Stack from "@mui/material/Stack";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List component={Stack} direction="row" minWidth="500px">
        <ListItem>
          <ListItemButton>
            <ListItemText style={{ textAlign: "center" }} primary="پشتیبانی" />
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
            <ListItemText style={{ textAlign: "center" }} primary="درباره ما" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Footer;
