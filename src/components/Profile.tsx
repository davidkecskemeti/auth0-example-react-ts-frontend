import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const Profile: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState<any>();

  const getAccessToken = async () =>
    setAccessToken(await getAccessTokenSilently());

  useEffect(() => {
    if (isAuthenticated) getAccessToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;

  return (
    isAuthenticated && (
      <div className="profile">
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>

        <code className="token">{accessToken}</code>
      </div>
    )
  );
};

export default Profile;
