import React from "react";
import { Typography, Stack, ButtonClassKey } from "@mui/material";
import BadyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  return <div>Detail</div>;
};

export default Detail;
