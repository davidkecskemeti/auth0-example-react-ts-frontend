import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const Todos: React.FC = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [accessToken, setAccessToken] = useState<string>();
  const [todos, setTodos] = useState([]);

  const getAccessToken = async () => {
    const accessToken = await getAccessTokenSilently();
    setAccessToken(accessToken);
  };

  useEffect(() => {
    if (isAuthenticated) getAccessToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  useEffect(() => {
    if (accessToken) {
      fetch(`http://localhost:8080/todos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTodos(data);
        });
    }

    return () => {
      setTodos([]);
    };
  }, [accessToken]);

  return (
    <div className="todosContainer">
      <h3>TODOS</h3>
      <div>{JSON.stringify(todos)}</div>
    </div>
  );
};

export default Todos;
