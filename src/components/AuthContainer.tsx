import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

interface AuthContainerProps {}

const AuthContainer: React.FC<AuthContainerProps> = () => {
  const { isAuthenticated } = useAuth0();
  return <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>;
};

export default AuthContainer;
