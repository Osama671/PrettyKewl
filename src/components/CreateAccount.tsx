import {
  Button,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent } from "react";
import { Link } from "react-router";

export default function CreateAccount() {
  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    const password2 = formData.get("password2");
    const email = formData.get("email");
    console.log(username, password, password2, email);
  };

  return (
    <>
      <Paper elevation={12} sx={{ height: "100%" }}>
        <Stack flex={"column"} alignContent={"center"}>
          <Typography variant={"h4"} sx={{ textAlign: "center", mt: "4rem" }}>
            Create an Account
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: "1.5rem", alignSelf: "center" }}
          >
            Google Signup Right Here
          </Button>
          <form onSubmit={(e) => onHandleSubmit(e)}>
            <FormControl fullWidth>
              <TextField
                sx={{ mt: "4rem", alignSelf: "center", width: "65%" }}
                placeholder="Username"
                name="username"
                label="Username"
                required
              ></TextField>
              <TextField
                sx={{ mt: "1rem", alignSelf: "center", width: "65%" }}
                placeholder="Password"
                type="password"
                name="password"
                label="Password"
                required
              ></TextField>
              <TextField
                sx={{ mt: "1rem", alignSelf: "center", width: "65%" }}
                type="password"
                placeholder="Re-enter password"
                name="password2"
                label="Re-enter password"
                required
              ></TextField>
              <TextField
                sx={{ mt: "1rem", alignSelf: "center", width: "65%" }}
                type="email"
                placeholder="Email"
                name="email"
                label="Email"
                required
              ></TextField>
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: "1rem", alignSelf: "center" }}
              >
                Create Account
              </Button>
              <Typography sx={{ mt: "2rem", textAlign: "center" }}>
                Already have an account, pussy?{" "}
                <Link to="/signin">Sign in</Link>
              </Typography>
            </FormControl>
          </form>
        </Stack>
      </Paper>
    </>
  );
}
