import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icon/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{}}
    >
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
    </Stack>
  );
};

export default BodyPart;
