import { Box, Button, IconButton } from "@mui/material";
import { useState } from "react";
import image from "../assets/chicago.jpg";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const w = window.innerWidth;

const VrIframe = () => {
  const [source, setSource] = useState({ vrTour: null, visible: true });
  return (
    <Box
      style={{
        position: "relative",
        flex: 1,
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() =>
            setSource({
              vrTour: "https://friedhoffvrtour.azurewebsites.net/",
              visible: false,
            })
          }
          sx={{ position: "absolute", display: !source.visible && "none" }}
        >
          <PlayCircleOutlineIcon
            sx={{ fontSize: 70, color: "white", zIndex: 2 }}
          />
        </IconButton>
        <img
          src={image}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            position: "absolute",
            display: !source.visible && "none",
          }}
        />
        <iframe
          loading="lazy"
          width="100%"
          height= { 500}
          src={source.vrTour}
          allowFullScreen=""
          frameBorder={0}
        ></iframe>
      </Box>
    </Box>
  );
};

export default VrIframe;
