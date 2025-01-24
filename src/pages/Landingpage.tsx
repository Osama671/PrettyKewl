import { Button, Container, Grid2, Typography } from "@mui/material";

export default function Landingpage() {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        height: "100vh",
        width: "100%",
        background: `url(../../doge.gif)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <Grid2
        container
        direction={"column"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid2
          sx={{
            // backgroundColor: "Red",
            height: "50vh",
            alignContent: "center",
            fontSize: "24px",
            maxWidth: "20%",
          }}
        >
          <Typography
            sx={{ fontSize: "24px", fontWeight: "bold", color: "white", textAlign: "center" }}
          >
            Auction and win great memes in a virtual economy.
          </Typography>
          <Typography sx={{textAlign: "center", mt: "16px", color: "white"}}>wtf am i doing</Typography>
        </Grid2>
        <Grid2 sx={{mt: "16px"}}>
          <Button variant="contained" sx={{width: "150px"}}>Sign in</Button>
        </Grid2>
        <Grid2 sx={{mt: "16px"}}>
          <Button variant="contained" sx={{width: "150px"}}>Sign up</Button>
        </Grid2>
      </Grid2>
    </Container>
  );
}
