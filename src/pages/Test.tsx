import { FormEvent } from "react";
import { Link } from "react-router";
import axios from "axios";

export default function Test() {

  const onLoginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onRegisterHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [username, password] = e.target
    console.log(username.value, password.value)
    const response = await axios.post("/api/aaa", {
      username: username.value,
      password: password.value,
    });
  };
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
        <button>Login!</button>
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
    </>
  );
}
