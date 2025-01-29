import { Container, Grid2 } from "@mui/material";
import Carousel from "../components/Carousel";
import CreateAccount from "../components/CreateAccount";

export default function Signup() {
  const images = ["../../tree.jpg", "../../MainBefore.jpg", "../../tree.jpg"];

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ width: "100%", height: "100vh", bgcolor: "red" }}
      >
        <Grid2 container spacing={0} columns={16} sx={{ height: "100%" }}>
          <Grid2 size={9} sx={{ p: "32px", height: "100%" }}>
            <Carousel images={images}></Carousel>
          </Grid2>
          <Grid2 size={7} sx={{ p: "32px", height: "100%" }}>
            <CreateAccount />
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
