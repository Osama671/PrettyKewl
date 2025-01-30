import { Container } from "@mui/material";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signin() {
  return (
    <>
      <Navbar />

      <Container maxWidth={false} sx={{ width: "100%", height: "100vh" }}>
        <Login />
      </Container>
      <Footer />
    </>
  );
}
