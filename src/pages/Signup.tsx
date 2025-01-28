import { Container, Grid2, Paper } from "@mui/material";
import Carousel from "../components/Carousel";

export default function Signup() {
  const images = ["../../MainBefore.jpg", "../../MainBefore.jpg"];

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ width: "100%", height: "100vh", bgcolor: "red" }}
      >
        <Grid2 container spacing={3} direction={"row"} columns={16} sx={{ height: "100%" }}>
          <Grid2 size={9} sx={{ my: "16px" }}>
            <Carousel images={images}></Carousel>
          </Grid2>
          <Grid2 size={7}>
            <Paper sx={{ height: "100%", my: "16px" }}>Hey</Paper>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
