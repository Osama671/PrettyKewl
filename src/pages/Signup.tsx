import { Container, Grid2, Paper } from "@mui/material";
import Carousel from "../components/Carousel";

export default function Signup() {
  // const images = ["../../MainBefore.jpg", "../../tree.jpg"];

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ width: "100%", height: "100vh", bgcolor: "red" }}
      >
        <Grid2 container spacing={3} columns={16} sx={{ height: "100%" }}>
          <Grid2 size={9} sx={{ p: "64px", height: "100%" }}><Carousel></Carousel></Grid2>
          <Grid2 size={7} sx={{ p: "16px", height: "100%" }}>
            <Paper sx={{ height: "100%" }}>Hey</Paper>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
