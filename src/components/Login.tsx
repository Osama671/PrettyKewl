import {
  Button,
  Card,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <Paper elevation={12}  sx={{ height: "100%", }}>
        <Stack
          alignItems={"center"}
          direction={"column"}
          sx={{ height: "100%", width: "100%" }}
        >
          <Card
            component={"img"}
            src="../../drooling_cat.jpg"
            sx={{ width: "200px", height: "auto", mt: "4rem" }}
          ></Card>
          <Typography variant="h3" sx={{ mt: "2rem" }}>
            I love Shrek
          </Typography>
          <TextField
            type="text"
            placeholder="Username"
            sx={{ mt: "2rem", width: "60%" }}
          ></TextField>
          <TextField
            type="text"
            placeholder="Username"
            sx={{ mt: "2rem", width: "60%" }}
          ></TextField>
          <Button variant="contained" sx={{ mt: "2rem" }}>
            Sign in
          </Button>
          <Button variant="contained" sx={{mt: "3rem"}}>Sign in with google innit bruv</Button>
          <Typography variant="subtitle1" sx={{ mt: "2rem" }}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Typography>
        </Stack>
      </Paper>
    </>
  );
}
