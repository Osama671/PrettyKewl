import {
  Button,
  Card,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { useSnackbarContext } from "./Snackbar";

export default function Login() {
  const { createSnackbar } = useSnackbarContext();
  const navigate = useNavigate();

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const username = formData.get("username");
      const password = formData.get("password");
      const response = await axios.get(
        `/api/user/login?username=${username}&password=${password}`
      );
      switch (response.status) {
        //Login succesfull
        case 200:
          navigate("/");
          break;
      }
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        const { message } = e.response.data;

        switch (e.response.status) {
          case 401:
            createSnackbar(message, "error")
            break;
          case 403:
            createSnackbar(message, "error")
            break;
          case 500:
            createSnackbar(message, "error")
            break;
        }
      }
    }
  };

  return (
    <>
      <form onSubmit={(e) => onHandleSubmit(e)}>
        <Paper elevation={12} sx={{ height: "100%" }}>
          <Stack
            alignItems={"center"}
            direction={"column"}
            sx={{ height: "100%", width: "100%" }}
          >
            <Card
              component={"img"}
              src="images/drooling_cat.jpg"
              sx={{ width: "200px", height: "auto", mt: "4rem" }}
            ></Card>
            <Typography variant="h3" sx={{ mt: "2rem" }}>
              I love Shrek
            </Typography>
            <TextField
              type="text"
              placeholder="Username"
              name="username"
              sx={{ mt: "2rem", width: "60%" }}
            ></TextField>
            <TextField
              type="text"
              placeholder="Password"
              name="password"
              sx={{ mt: "2rem", width: "60%" }}
            ></TextField>
            <Button type="submit" variant="contained" sx={{ mt: "2rem" }}>
              Sign in
            </Button>
            <Button variant="contained" sx={{ mt: "3rem" }}>
              Sign in with google innit bruv
            </Button>
            <Typography variant="subtitle1" sx={{ my: "2rem" }}>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </Typography>
          </Stack>
        </Paper>
      </form>
    </>
  );
}
