import { Container } from "@mui/material";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

export default function Signin() {
  return (
    <>
      <Navbar />

      <Container maxWidth={false} sx={{ width: "100%", height: "100vh" }}>
        <Login />
      </Container>
    </>
  );
}
