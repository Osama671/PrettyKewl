import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";

export default function Carousell({ images }) {
  return (
    <Carousel
      sx={{
        width: "100%",
        height: "auto",

      }}
    >
      {images.map((image, i) => (
        <Item key={i} item={image} />
      ))}
    </Carousel>
  );
}

function Item(image) {
  console.log(image);
  return (
    <Box
      component={"img"}
      sx={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
        aspectRatio: "auto"
      }}
      src={`${image.item}`}
    ></Box>
  );
}
