import { Navigate } from "react-router-dom";

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
        <div>{userProfile?.mobile} همراه</div>

        <button onClick={handleLogout}>خروج از حساب کاربری</button>
      </div>
    </div>
  );
}

export default Dashboard;
