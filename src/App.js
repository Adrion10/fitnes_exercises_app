import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box width="400px">
      Navbar
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
