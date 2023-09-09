import { Navigate } from "react-router-dom";

import CollapsibleDrawer from "../components/CollapsibleDrawer";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { isAuthenticated, userProfile } = useAuth();

  if (!isAuthenticated) {
    // Redirect the user to the login page if not authenticated
    return <Navigate to="/login" />;
  }

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
      <CollapsibleDrawer />

      <div>
        <div>{userProfile?.mobile} همراه</div>
      </div>
    </div>
  );
}

export default Dashboard;
