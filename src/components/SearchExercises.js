import React, { useEffect, useState } from "react";
import { Stack, Box, Button, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      const searchExercises = exerciseData.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)||
        exercise.target.toLowerCase().includes(search)||exercise.equipment.toLowerCase().includes(search)||exercise.baddyPart.toLowerCase().includes(search)||
      )
    }
  };
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
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2525",
            color: "#fff",
            textTransform: "none",
            width: { lg: "130px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
