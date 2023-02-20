import React, { useState } from "react";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <HeroBaner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
