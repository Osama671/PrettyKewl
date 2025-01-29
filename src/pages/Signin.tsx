import { Container, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Signin() {
  return (
    <>
      <Container sx={{ width: "100%" }}>
        <Link to="/signup">
          <Typography>Sign up page</Typography>
        </Link>
      </Container>
    </>
  );
}
