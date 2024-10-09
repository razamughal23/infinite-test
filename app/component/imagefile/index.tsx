"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

const InfiniteImage = (props: any) => {
  const [error, setError] = useState(false);
  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        fill
        {...props}
        src={error ? "" : props.src}
        style={{
          ...props.style,
        }}
        onError={() => {
          setError(true);
        }}
        priority
      />
    </Box>
  );
};

export default InfiniteImage;
