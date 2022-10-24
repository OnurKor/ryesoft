import { Box } from "@mui/material";
import React, { useState } from "react";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "22%",
  right: "-6%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",

  border: "none",
  borderRadius: "10px",
  p: 4,
};

const SideHome = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        backgroundColor: "#f2f2fc",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <DateRangeOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <TextsmsOutlinedIcon />
        <Box
          sx={{
            width: "45px",
            height: "45px",
            overflow: "hidden",
            borderRadius: "50%",
            display: "inline",
          }}
          onClick={handleOpen}
        >
          <img
            src="https://picsum.photos/200"
            alt=""
            width="100%"
            height="100%"
          />
        </Box>
        <Box
          sx={{
            marginLeft: "-15px",
          }}
          onClick={handleOpen}
        >
          <KeyboardArrowDownOutlinedIcon />
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={
          {
            // backgroundColor: "red",
          }
        }
      >
        <Box sx={style}>
          <Typography
            sx={{ fontWeight: "800" }}
            id="modal-modal-title"
            variant="h5"
            component="h2"
          >
            Formation Status
          </Typography>
          <Typography id="modal-modal-description">In progress</Typography>
          <Typography
            sx={{
              backgroundColor: "#f2f2fa",
              height: "20px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                backgroundColor: "#6e64fb",
                height: "20px",
                borderRadius: "10px",
                width: "80%",
                marginTop: "10px",
              }}
            ></Typography>
          </Typography>
          <Typography
            sx={{ textAlign: "center", marginTop: "10px", fontWeight: "700" }}
          >
            Estimated processing
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            4-5 buisness days
          </Typography>
          <Button
            sx={{
              marginTop: "10px",
              backgroundColor: "#6e64fb",
              width: "100%",
              borderRadius: "20px",
            }}
            variant="contained"
          >
            View Status{" "}
          </Button>
        </Box>
      </Modal>
      { open ? <Box sx={{ height:"280px"}} > </Box> : null}
      <Box sx={{ fontSize: "20px", fontWeight: "800", marginLeft: "10px" }}>
        
        Your to-Do list
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "10px",
          gap: "20px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "#e6e5f5",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReceiptOutlinedIcon />
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "700" }}>
          Run Payroll
          <Box sx={{ fontSize: "14px", fontWeight: "300", color: "gray" }}>
            Mar 4 at 6:00 PM
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "10px",
          gap: "20px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "#e6e5f5",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AccessTimeOutlinedIcon />
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "700" }}>
          Review time off request
          <Box sx={{ fontSize: "14px", fontWeight: "300", color: "gray" }}>
            Mar 7 at 6:00 pm
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "10px",
          gap: "20px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "#e6e5f5",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AssignmentOutlinedIcon />
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "700" }}>
          Sign board resolution
          <Box sx={{ fontSize: "14px", fontWeight: "300", color: "gray" }}>
            Mar 12 at 6:00 PM
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "10px",
          gap: "20px",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "#e6e5f5",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AssignmentTurnedInOutlinedIcon />
        </Box>
        <Box sx={{ fontSize: "18px", fontWeight: "700" }}>
          Finish onboarding Tony
          <Box sx={{ fontSize: "14px", fontWeight: "300", color: "gray" }}>
            Mar 12 at 6:00 PM
          </Box>
        </Box>
      </Box>
      <Box sx={{display:"flex", gap:"10px", backgroundColor:"white", marginLeft: "30px", marginTop:"20px", width:"90%",borderRadius:"15px" }}>
        <Box 
        sx={{
            width: "15px",
            height: "15px",
            backgroundColor: "#6e6bfa",
            borderRadius: "50%",
            marginLeft: "10px",
            marginTop:"30px"
        }}
        >
       

        </Box>
        <div style={{}}>
        <p style={{fontSize:"18px",fontWeight:"700", marginTop:"5px"}} >Board meeting </p>
       <p style={{fontSize: "14px", fontWeight: "300", color: "gray", marginTop:"5px" }}> Feb 22 at 6:00 PM </p>
      <p style={{fontSize: "14px", fontWeight: "300", color: "gray", marginTop:"10px" }}>You have been invited to attend a
        meeting of the Board Directors</p></div>
      </Box>
    </Box>
  );
};

export default SideHome;
