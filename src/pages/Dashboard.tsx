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
        {/* <h1>Welcome, {userProfile?.username}!</h1> */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
