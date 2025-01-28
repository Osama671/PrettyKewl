import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Test from "./pages/Test.tsx";
import JWT from "./pages/JWT.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material";
import Landingpage from "./pages/Landingpage.tsx";
import Signin from "./pages/Signin.tsx";
import Store from "./pages/Store.tsx";
import Signup from "./pages/Signup.tsx";

const theme = createTheme({ typography: {} });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="test" element={<Test />} />
          <Route path="test/:id" element={<Test />} />
          <Route path="/JWT" element={<JWT />}></Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup/>}></Route>
          <Route path="store" element={<Store />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
