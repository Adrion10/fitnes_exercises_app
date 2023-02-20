import React from "react";
import { Box, Stack, Typegraphy } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typegraphy color="#FF2625" fontWeight="600" fontSize="26px"></Typegraphy>
    </Box>
  );
};

export default HeroBanner;
