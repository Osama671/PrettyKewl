import {
  Button,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router";
import { ValidateCreateAccount } from "../utils/formValidations";

export default function CreateAccount() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
  });

  const handleFormValidation = () => {
    setErrors(
      ValidateCreateAccount(
        formFields.username,
        formFields.password,
        formFields.password2,
        formFields.email
      )
    );
    console.log("Errors: ", errors);
  };

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    const password2 = formData.get("password2");
    const email = formData.get("email");
    // console.log(username, password, password2, email);
  };

  useEffect(() => {
    handleFormValidation();
  }, [formFields]);
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
                error={errors.username !== ""}
                helperText={`${errors.username || ""}`}
                placeholder="Username"
                name="username"
                label="Username"
                required
                onChange={(e) => {
                  setFormFields((oldValues) => ({
                    ...oldValues,
                    username: e.target.value,
                  }));
                }}
              ></TextField>
              <TextField
                sx={{ mt: "1rem", alignSelf: "center", width: "65%" }}
                placeholder="Password"
                error={errors.password !== ""}
                helperText={`${errors.password || ""}`}
                type="password"
                name="password"
                label="Password"
                required
                onChange={(e) => {
                  setFormFields((oldValues) => ({
                    ...oldValues,
                    password: e.target.value,
                  }));
                }}
              ></TextField>
              <TextField
                sx={{ mt: "1rem", alignSelf: "center", width: "65%" }}
                type="password"
                placeholder="Re-enter password"
                error={errors.password2 !== ""}
                helperText={`${errors.password2 || ""}`}
                name="password2"
                label="Re-enter password"
                required
                onChange={(e) => {
                  setFormFields((oldValues) => ({
                    ...oldValues,
                    password2: e.target.value,
                  }));
                }}
              ></TextField>
              <TextField
                sx={{ mt: "1rem", alignSelf: "center", width: "65%" }}
                type="email"
                placeholder="Email"
                error={errors.email !== ""}
                helperText={`${errors.email || ""}`}
                name="email"
                label="Email"
                required
                onChange={(e) => {
                  setFormFields((oldValues) => ({
                    ...oldValues,
                    email: e.target.value,
                  }));
                }}
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
