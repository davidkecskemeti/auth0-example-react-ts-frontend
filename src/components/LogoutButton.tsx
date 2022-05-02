import { useAuth0 } from "@auth0/auth0-react";

interface LogoutButton {}

const LoginButton: React.FC<LogoutButton> = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="loginButton"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LoginButton;
