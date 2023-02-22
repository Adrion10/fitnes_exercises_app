import React, { useEffect, useState } from "react";
import { Stack, Box, Buttom, TextField, Typography } from "@mui/material";
const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br /> Should now
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
