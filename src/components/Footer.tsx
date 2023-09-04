import Box from "@mui/material/Box/Box";
import List from "@mui/material/List/List";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import ListItem from "@mui/material/ListItem/ListItem";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <List component={Stack} direction="row">
        <ListItem>
          <ListItemButton>
            <ListItemText style={{ textAlign: "center" }} primary="درباره ما" />
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
            <ListItemText style={{ textAlign: "center" }} primary="پشتیبانی" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Footer;
