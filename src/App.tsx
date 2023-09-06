import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./contexts/AuthContext";
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
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
