import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

export default function Carousell({ images }: { images: string[] }) {
  return (
    <Carousel
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      {images.map((image, i) => (
        <Item key={i} image={image} />
      ))}
    </Carousel>
  );
}

function Item({ image }: { image: string }) {
  return (
    <Box
      component={"img"}
      sx={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
        aspectRatio: "auto",
      }}
      src={`${image}`}
    ></Box>
  );
}
