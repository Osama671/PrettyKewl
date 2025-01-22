import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import Button from "@mui/material/Button";

export default function Test() {
  const [count, setCount] = useState<number>(0);

  const onLoginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onRegisterHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [username, password] = e.target;
    console.log(username.value, password.value);
    const response = await axios.post("/api/aaa", {
      username: username.value,
      password: password.value,
    });
  };

  const fetchCookie = async () => {
    const response = await axios.get("/api/cookie");
    setCount(response.data.count);
  };

  useEffect(() => {
    fetchCookie();
  }, []);
  return (
    <>
      <form onSubmit={onRegisterHandler}>
        <h2> Register </h2>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" />
        <br />
        <button>Register!</button>
      </form>
      <form onSubmit={onLoginHandler}>
        <h2> Login </h2>
        <label htmlFor="username2">Username: </label>
        <input type="text" id="username2" />
        <br />
        <br />
        <label htmlFor="password2">Password: </label>
        <input type="text" id="password2" />
        <br />
        <button>Login!</button>
      </form>
      <Link to="/">
        <button style={{ marginTop: "50px" }}>Return</button>
      </Link>
      <button
        onClick={() => {
          fetchCookie();
        }}
      >
        Get Cookie!
      </button>
      <br />
      <Button onClick={() => {axios.get(`/api/login?username=Heya`)}} variant="outlined">Heya</Button>
      <br />
      <h1>You viewed this {count} times</h1>
    </>
  );
}
