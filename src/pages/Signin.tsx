import { Container } from "@mui/material";
import Login from "../components/Login";

export default function Signin() {
  return (
    <>
      <Container maxWidth={false} sx={{ width: "100%", height: "100vh" }}>
        <Login></Login>
      </Container>
    </>
  );
}
