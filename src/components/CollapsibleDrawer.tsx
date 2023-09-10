import React, { useState } from "react";

import { Link } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useAuth } from "../contexts/AuthContext";

function MyDrawer() {
  const [open, setOpen] = useState(false);

  const { logout } = useAuth();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    // Call the logout function from the context
    logout();
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          backgroundColor: "#71AE87",
          overflowX: "hidden",
        },
      }}
    >
      <div
        className={`${open ? "w-[283px]" : "w-[70px]"}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        style={{
          transition: "width 0.3s ease",
          backgroundColor: "#71AE87",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List>
          {[
            { title: "داشبورد", link: "/" },
            { title: "مشاهده همه کاربران", link: "/members" },
            { title: "تراکنش‌ها", link: "/transactions" },
            { title: "اطلاعات متخصص", link: "/coach-information" },
            { title: "پشتیبانی", link: "/support" },
          ].map((item, index) => (
            <>
              <ListItem
                key={item.title}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  key={item.title}
                  component={Link}
                  to={item.link}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index === 0 && (
                      <GridViewOutlinedIcon
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    )}

                    {index === 1 && (
                      <PeopleOutlinedIcon
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    )}

                    {index === 2 && (
                      <PeopleOutlinedIcon
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    )}

                    {index === 3 && (
                      <AccountCircleOutlinedIcon
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    )}

                    {index === 4 && (
                      <SupportAgentOutlinedIcon
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ color: "#FFFFFF", opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        <div style={{ flex: 1 }}></div>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={handleLogout}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LogoutOutlinedIcon
                sx={{
                  color: "#FFFFFF",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="خروج از حساب کاربری"
              sx={{ color: "#FFFFFF", opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </div>
    </Drawer>
  );
}

export default MyDrawer;
