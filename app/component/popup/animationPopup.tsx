"use client";
import React from "react";
import { styles } from "../../template/styles";
import { Box, Grow } from "@mui/material";
import LevelUpAnimation from "@/public/assets/sample.gif";
import InfiniteImage from "../imagefile";

const AnimationPopup = ({ showPopup }: any) => {
  return (
    <Grow in={showPopup}>
      <Box sx={styles.popupBox}>
        <Box sx={styles.animationBox}>
          <InfiniteImage
            src={LevelUpAnimation}
            alt="New Badge"
            style={{
              ObjectFit: "contain",
              borderRadius: { xs: "20px", md: "0px" },
            }}
          />
        </Box>
      </Box>
    </Grow>
  );
};

export default AnimationPopup;
