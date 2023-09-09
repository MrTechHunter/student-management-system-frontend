import { useState } from "react";

import { Navigate } from "react-router-dom";

import { Button } from "@mui/material";

import logo from "../assets/images/logo.png";
import CollapsibleDrawer from "../components/CollapsibleDrawer";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { isAuthenticated, userProfile, logout } = useAuth();

  const [drawerOpen, setDrawerOpen] = useState(false);

  if (!isAuthenticated) {
    // Redirect the user to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    // Call the logout function from the context
    logout();
  };

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  console.log("userProfile: ", userProfile);

  const menuItems = (
    <>
      <button>Menu Item 1</button>
      <button>Menu Item 2</button>
      <button>Menu Item 3</button>
    </>
  );

  const logoutButton = <button>Logout</button>;

  return (
    <div>
      <CollapsibleDrawer
        isOpen={drawerOpen}
        onToggle={handleToggleDrawer}
        logo={logo}
        logoutButton={logoutButton}
      />

      <div>
        <div>{userProfile?.mobile} همراه</div>

        <Button
          onClick={handleLogout}
          variant="contained"
          fullWidth
          color="error"
          sx={{
            width: "631px",
            marginTop: "20px",
            paddingY: "15px",
          }}
        >
          خروج از حساب کاربری
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
