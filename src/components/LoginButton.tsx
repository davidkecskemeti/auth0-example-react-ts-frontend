import { useAuth0 } from "@auth0/auth0-react";

interface LoginButtonProps {}

const LoginButton: React.FC<LoginButtonProps> = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="loginButton"
      onClick={() =>
        loginWithRedirect({
          redirectUri: "http://localhost:3000/todos",
        })
      }
    >
      Log In
    </button>
  );
};

export default LoginButton;
