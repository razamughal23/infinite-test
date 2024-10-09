"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { styles } from "./styles";
import levelUp from "../../public/assets/levelup.png";
import LevelBadge from "../../public/assets/levelBadge.png";
import InfiniteImage from "../component/imagefile";
import RewardPopup from "../component/popup/rewardPopup";
import AnimationPopup from "../component/popup/animationPopup";

const HomePage = () => {
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showRewardPopup, setShowRewardPopup] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 50);
      return () => clearInterval(interval);
    } else {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const handleRewardPopup = () => {
    setShowRewardPopup(true);
  };
  const handleCloseRewardPopup = () => {
    setShowRewardPopup(false);
  };

  return (
    <Box sx={styles.MainBox}>
      <Container>
        <Box sx={styles.mainImageBox}>
          <Box sx={styles.levelupImage}>
            <InfiniteImage
              src={levelUp}
              alt="Level Up"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box sx={styles.levelbadgeImage}>
            <InfiniteImage
              src={LevelBadge}
              alt="Level Badge"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography fontWeight={700} fontSize={"50px"} sx={styles.levelTitle}>
            Corporal
          </Typography>
        </Box>
        <Box sx={styles.progressBox}>
          <Box sx={styles.progressBar} style={{ width: `${progress}%` }}></Box>
        </Box>
        <Box sx={styles.ButtonBox}>
          <Button
            sx={styles.Button}
            onClick={handleRewardPopup}
            ref={buttonRef}
          >
            <Typography>Claim NFT Badge</Typography>
          </Button>
          <Typography sx={styles.text}>
            You've leveled up and earned a new badge!
          </Typography>
          <Typography sx={{ ...styles.textColor, marginBottom: "20px" }}>
            Claim your{" "}
            <span style={{ fontWeight: 700, color: "#FFC850" }}>NFT badge</span>{" "}
            now, or retrieve it later from your Inventory.
          </Typography>
          <Typography sx={styles.textColor}>
            To claim your new badge, you'll need to transfer your previous badge
            from your wallet for it to be burned in exchange for the new one.
          </Typography>
          <Typography sx={styles.textColor}>
            If there's insufficient gas in your wallet, the transaction will be
            canceled. You can always visit your Inventory and claim your badge
            at any time.
          </Typography>
        </Box>
      </Container>
      <AnimationPopup showPopup={showPopup} />
      <RewardPopup
        showRewardPopup={showRewardPopup}
        handleCloseRewardPopup={handleCloseRewardPopup}
      />
    </Box>
  );
};

export default HomePage;
