"use client";
import React from "react";
import { Box } from "@mui/material";

const InfiniteVideo = ({ src, loop }: any) => {
  return (
    <>
      <Box style={{ width: "100%", height: "100%", position: "relative" }}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            loop={loop}
            muted={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "35px",
            }}
          >
            <source src={src} />
          </video>
        </Box>
      </Box>
    </>
  );
};

export default InfiniteVideo;
