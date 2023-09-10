import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./contexts/AuthContext";
import UsersListProvider from "./contexts/UsersListContext";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <UsersListProvider>
            <Routes />
          </UsersListProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
