import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icon/gym.png";

const BodyPart = () => {
  return (
    <Stack>
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
    </Stack>
  );
};

export default BodyPart;
