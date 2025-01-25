import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function JWT() {
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const clearCookie = async () => {
    await axios.get("/api/logout");
    navigate("/test");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/user/fetchuser`);
        setUsername(response.data.user);
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error) navigate("/test");
      }
    };
    fetchUser();
  }, [navigate]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Hello there, {username}</h1>
          <button onClick={clearCookie}>Clear Cookie</button>
        </>
      )}
    </>
  );
}
