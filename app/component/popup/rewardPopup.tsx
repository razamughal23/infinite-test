"use client";
import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import InfiniteImage from "../imagefile";
import { styles } from "../../template/styles";
import CloseIcon from "@mui/icons-material/Close";
import Image1 from "@/public/assets/image1.png";
import Image2 from "@/public/assets/image2.png";
import LeftIcon from "@/public/assets/leftIcon.png";
import RightIcon from "@/public/assets/rightIcon.png";

const RewardPopup = ({ showRewardPopup, handleCloseRewardPopup }: any) => {
  return (
    <Modal open={showRewardPopup} onClose={handleCloseRewardPopup}>
      <Box sx={styles.rewardPopUp}>
        <Box sx={styles.closeIcon}>
          <CloseIcon
            onClick={handleCloseRewardPopup}
            sx={styles.rewardCloseIcon}
          />
        </Box>
        <Typography sx={styles.rewardHeading}>Congratulations!</Typography>
        <Typography sx={styles.rewardTitle}>
          Command completed Successfully!
        </Typography>
        <Typography sx={styles.rewardText}>
          You have successfully completed a command! Here are your well-earned
          rewards. Keep exploring the Command Center for even more exciting
          missions and bigger rewards!
        </Typography>
        <Typography sx={{ color: "#C8AA7A" }}>You have gained:</Typography>
        <Box sx={styles.rewardIconBox}>
          <Box sx={styles.rewardIcons}>
            <InfiniteImage
              src={LeftIcon}
              alt="reward1"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={styles.rewardIconsText}>Rewards</Typography>
          <Box sx={styles.rewardIcons}>
            <InfiniteImage
              src={RightIcon}
              alt="reward2"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Box sx={styles.rewardImageBox}>
          <Box sx={styles.rewardImages}>
            <InfiniteImage
              src={Image1}
              alt="reward1"
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box sx={styles.rewardImages}>
            <InfiniteImage
              src={Image2}
              alt="reward2"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default RewardPopup;
