import { Swiper, SwiperSlide } from "swiper/react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import Pano1 from "../assets/pano1.jpg";
import Pano2 from "../assets/pano2.jpg";
import Pano3 from "../assets/pano3.jpg";
import Logo from "../assets/vr.png";

// Import Swiper styles
import "swiper/css";
import React, { useEffect } from "react";
import { Box } from "@mui/material";

const SwiperPano = () => {
    const photoSphereRef = React.useRef();
    const stopperMouseWheel = () => {
      photoSphereRef.current.setOption("mousewheel", false);
    };
  
    useEffect(() => {
      stopperMouseWheel();
    }, []);
  return (
    <Box
          sx={{
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >

    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide>
      <ReactPhotoSphereViewer
            ref={photoSphereRef}
            src={Pano1}
            height={"100vh"}
            width={"100%"}
            loadingImg={Logo}
            autorotateDelay={1000}
            autorotateIdle={true}
            autorotateSpeed="0.5rpm"
            caption={"tess"}
            navbar={["autorotate", "zoom", "move", "caption"]}
            defaultZoomLvl={1}
            ></ReactPhotoSphereViewer>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
            </Box>
  );
};

export default SwiperPano;
