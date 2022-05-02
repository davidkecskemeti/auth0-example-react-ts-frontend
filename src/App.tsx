import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Todos from "./components/Todos";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function RequireAuth({ children, redirectTo = "/" }: any) {
  let { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return null;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

const App = () => {
  return (
    <div className="App">
      <header>
        <Dashboard />
      </header>
      <div className="appBody">
        <Profile />
        <Routes>
          <Route
            path="/todos"
            element={
              <RequireAuth>
                <Todos />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
