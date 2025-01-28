import { Box } from "@mui/material";

export default function Carousel() {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundImage: `url("../../tree.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "95%",
            width: "100%",
          }}
        >
          <Box sx={{ height: "100%", width: "8%", bgcolor: "blue" }}></Box>
          <Box
            sx={{
              height: "100%",
              width: "8%",
              bgcolor: "blue",
              marginLeft: "auto",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "5%",
          }}
        >
          <Box sx={{ width: "100%", height: "100%", bgcolor: "green" }}></Box>
        </Box>
      </Box>
    </>
  );
}
