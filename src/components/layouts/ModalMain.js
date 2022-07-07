import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import Grow from "@mui/material/Grow";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const style = {};

const ModalMain = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {/* <Grow in={open}> */}
      <Box
        component={motion.div}
        // className='animate-bounce'
        sx={{
          position: "absolute",
          // top: "50%",
          // left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#ffe9e3",
          p: { lg: 10, sm: 8, xs: 7 },
          borderRadius: "20px",
        }}
        animate={{ scale: 1.17 }}
        transition={{
          type: "spring",
          stiffness: "500",
          duration: 3,
          ease: "easeOut",
        }}
      >
        <Typography
          sx={{
            color: "#FD562A",
            fontSize: { lg: 55, sm: 40, xs: 30 },
            fontWeight: 800,
            fontStyle: "italic",
            textShadow: "3px 3px rgb(197 45 5)",
          }}
        >
          Coming Soon
        </Typography>
      </Box>
      {/* </Grow> */}
    </Modal>
  );
};

export default ModalMain;
