import { Container, Grid2, Typography } from "@mui/material";

export default function MUI() {
  return (
    <Container sx={{ bgcolor: "red", height: "100vh" }}>
      <Grid2 container>
        <Grid2 size={6} sx={{ textAlign: "center" }}>
          Heya
        </Grid2>
        <Grid2 size={6}>Heaaaa</Grid2>
      </Grid2>
      <Typography
        variant="h1"
        sx={{ ":hover": { color: "green" }, display: "inline-block" }}
      >
        Heya
      </Typography>
    </Container>
  );
}
