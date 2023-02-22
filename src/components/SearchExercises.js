import React, { useEffect, useState } from "react";
import { Stack, Box, Buttom, TextField, Typography } from "@mui/material";
const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px" },
        }}
      >
        Awesome Exercise You <br /> Should now
      </Typography>
    </Stack>
  );
};

export default SearchExercises;
