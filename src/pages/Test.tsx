import { FormEvent } from "react";
import axios from "axios";

export default function Test() {

  const onLoginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [username2, password2] = e.target;
    await axios.get(
      `/api/user/login?username=${username2.value}&password=${password2.value}`
    );
  };

  const onRegisterHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [username, password] = e.target;
    await axios.post("/api/user/register", {
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
      
    </>
  );
}
