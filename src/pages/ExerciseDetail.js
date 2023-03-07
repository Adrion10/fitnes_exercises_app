import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail />
      <ExerciseDetail />
      <SimilarExercise />
    </Box>
  );
};

export default ExerciseDetail;
