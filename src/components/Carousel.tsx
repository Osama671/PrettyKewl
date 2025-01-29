import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MobileStepper from "@mui/material/MobileStepper";
import { useState } from "react";

export default function Carousel({
  images: imageUrl,
}: {
  images: string | string[] | undefined;
}) {
  //Fallback image if no images are passed in
  if (imageUrl === undefined) {
    imageUrl = ["../../tree.jpg"];
    console.warn("Carousel has no images, using fallback image.");
  }
  //If one image url is passed in as a string, wrap it in an array to not break the code
  if (typeof imageUrl === "string") {
    imageUrl = [imageUrl];
  }
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrl.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + imageUrl.length) % imageUrl.length
    );
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Slides Container */}
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${activeIndex * 100}%)`,
          height: "100%",
          width: "100%",
        }}
      >
        {imageUrl.map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 100%",
              height: "100%",
              width: "100%",
            }}
          >
            <img
              src={`${image}`}
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
            ></img>
          </Box>
        ))}
      </Box>

      {/* Left & Right Panels */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        {/* Left Panel */}
        <Box
          sx={{
            height: "100%",
            width: "8%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto",
          }}
        >
          <Box
            sx={{
              p: "4px",
              cursor: "pointer",
            }}
          >
            <ArrowBackIcon onClick={handlePrev} />
          </Box>
        </Box>

        {/* Right Panel */}
        <Box
          sx={{
            height: "100%",
            width: "8%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "auto",
          }}
        >
          <Box
            sx={{
              p: "4px",
              cursor: "pointer",
            }}
          >
            <ArrowForwardIcon onClick={handleNext} />
          </Box>
        </Box>
      </Box>

      {/* Bottom Panel */}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          bottom: 0,
          left: 0,
          right: 0,
          height: "5%",
          justifyContent: "center",
        }}
      >
        <MobileStepper
          variant="dots"
          backButton={false}
          nextButton={false}
          steps={imageUrl.length}
          position="static"
          activeStep={activeIndex}
          sx={{
            bgcolor: "rgba(0,0,0,0)",
            ".MuiMobileStepper-dot": {
              backgroundColor: "yellow",
            },
            ".MuiMobileStepper-dotActive": {
              backgroundColor: "blue",
            },
          }}
        />
      </Box>
    </Box>
  );
}
