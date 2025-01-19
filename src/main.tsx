import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Test from "./pages/Test.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="test" element={<Test />} />
        <Route path="test/:id" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
