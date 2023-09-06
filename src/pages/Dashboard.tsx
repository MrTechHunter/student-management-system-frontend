import { Navigate } from "react-router-dom";

import { Button } from "@mui/material";

import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { isAuthenticated, userProfile, logout } = useAuth();

  if (!isAuthenticated) {
    // Redirect the user to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    // Call the logout function from the context
    logout();
  };

  console.log("userProfile: ", userProfile);
  return (
    <div>
      <div>
        <div>{userProfile?.username} نام کاربری</div>

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
