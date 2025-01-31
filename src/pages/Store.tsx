import { Box, Container, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import TimedListImages from "../components/store/TimedListImages";
import Searchbar from "../components/store/Searchbar";

export default function Store() {
  const images = [
    "/images/MainBefore.jpg",
    "/images/tree.jpg",
    "/images/drooling_cat.jpg",
    "/images/MainBefore.jpg",
    "/images/tree.jpg",
    "/images/drooling_cat.jpg",
    "/images/MainBefore.jpg",
    "/images/tree.jpg",
    "/images/drooling_cat.jpg",
  ];

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ bgColor: "blue", width: "100%", height: "100vh" }}
      >
        <Navbar />
        <Box sx={{ mx: "32px", mt: "64px" }}>
          <Stack>
            <Typography variant="h2">Expires in: 69</Typography>
            <TimedListImages images={images} />
            <Box sx={{display: "flex", justifyContent: "center", mt: "32px", width: "100%"}}>
              <Searchbar />
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
