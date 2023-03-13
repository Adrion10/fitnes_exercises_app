import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() =>{
    const fetchExercisesData= async()=>{
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com'
      const yotubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'
  
    }
    fetchExercisesData()

  },[id] )

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={}/>
      <ExerciseVideo />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
