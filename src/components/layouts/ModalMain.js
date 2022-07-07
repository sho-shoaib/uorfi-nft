import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import Fade from "@mui/material/Fade";

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
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            p: 7,
            borderRadius: "20px",
          }}
          // animate={{ scale: 1.15 }}
          // transition={{
          //   type: "spring",
          //   stiffness: "300",
          //   duration: 150,
          //   ease: "easeIn",
          // }}
        >
          <p
            style={{
              color: "#FD562A",
              fontSize: "70px",
              fontWeight: "700",
              fontStyle: "italic",
            }}
          >
            Coming Soon
          </p>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalMain;
