import { Box, ImageList, ImageListItem } from "@mui/material";

export default function TimedListImages({ images }: { images?: string[] }) {
    //If there are no images smfh
  if (!images) {
    images = [
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
      "/images/drooling_cat.jpg",
    ];
  }

  return (
    <Box sx={{ width: "100%" }}>
      <ImageList
        sx={{
          width: "auto",
          display: "flex",
          gap: "16px",
        }}
      >
        {images.map((img, i) => (
          <ImageListItem key={i}>
            <img
              src={img}
              style={{
                objectFit: "cover",
                height: "250px",
                width: "250px",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
