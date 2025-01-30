import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ bgcolor: "black", width: "100%", height: "10vh", display: "flex", alignItems: "center" }}
      >
        <Typography ml="16px" color="white">
          A fun ecommerce side project. Thank you for checking it out!
        </Typography>
      </Container>
    </>
  );
}
