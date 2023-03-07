import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  return <div>ExerciseDetail</div>;
};

export default ExerciseDetail;
