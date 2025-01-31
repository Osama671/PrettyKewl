import {
  Box,
  Button,
  Card,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSnackbarContext } from "./Snackbar";

export default function Login() {
  const { createSnackbar } = useSnackbarContext();
  const navigate = useNavigate();

  const [isRemembermeChecked, setIsRemembermeChecked] =
    useState<boolean>(false);

  const [formFields, setFormFields] = useState({ username: "", password: "" });

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const username = formData.get("username");
      const password = formData.get("password");
      const rememberme = formData.get("rememberme");
      const response = await axios.get(
        `/api/user/login?username=${username}&password=${password}&rememberme=${rememberme}`
      );

      if (response.status === 200) navigate("/");
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        const { message } = e.response.data;
        createSnackbar(message, "error");

        // Decide which errors to handle specifically later.
        // switch (e.response.status) {
        //   case 401:
        //     createSnackbar(message, "error");
        //     break;
        //   case 403:
        //     createSnackbar(message, "error");
        //     break;
        //   case 500:
        //     createSnackbar(message, "error");
        //     break;
        // }
      }
    }
  };

  const getAuthUser = async () => {
    const response = await axios.get("/api/user/authcheck");
    return response.data.username;
  };

  //Remembers username like a boss
  useEffect(() => {
    const setUsernameField = async () => {
      if (document.cookie.includes("rememberme=yes")) {
        console.log("remembered!!");
        const username = await getAuthUser();
        console.log(username);
        setIsRemembermeChecked(true);

        setFormFields((oldFields) => ({ ...oldFields, username: username }));
      }
    };
    setUsernameField();
  }, []);

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
            <Box
              sx={{
                width: "60%",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                type="text"
                placeholder="Username"
                name="username"
                value={formFields.username}
                onChange={(e) => {
                  setFormFields((oldFields) => ({
                    ...oldFields,
                    username: e.target.value,
                  }));
                }}
                sx={{ mt: "2rem", width: "100%" }}
              ></TextField>
              <TextField
                type="password"
                placeholder="Password"
                name="password"
                value={formFields.password}
                onChange={(e) => {
                  setFormFields((oldFields) => ({
                    ...oldFields,
                    password: e.target.value,
                  }));
                }}
                sx={{ mt: "2rem", width: "100%" }}
              ></TextField>
              <Box sx={{ display: "flex", width: "100%", mt: "16px" }}>
                <Checkbox
                  name="rememberme"
                  value="yes"
                  checked={isRemembermeChecked}
                  onClick={() => setIsRemembermeChecked(!isRemembermeChecked)}
                />
                <Typography sx={{ alignSelf: "center" }}>
                  Remember me?
                </Typography>
              </Box>
            </Box>

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
