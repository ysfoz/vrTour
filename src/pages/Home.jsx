import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Pano1 from "../assets/pano1.jpg";
import Logo from "../assets/vr.png";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import BottumMenu from "../components/BottumMenu";
import ContactForm from "../components/ContactForm";
import ContactInfoCard from "../components/ContactInfoCard";
import Whatsapp from "../components/Whatsapp";

const Home = () => {
  const photoSphereRef = React.useRef();
  const stopperMouseWheel = () => {
    photoSphereRef.current.setOption("mousewheel", false);
  };

  useEffect(() => {
    stopperMouseWheel();
  }, []);
  const long = "calc(100vh - 130px)";
  return (
    <Box display="flex" justifyContent="center">
      <Box
        maxWidth={"xl"}
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        justifyContent="center"
      >
        <Navbar />
        <Title />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <ReactPhotoSphereViewer
            ref={photoSphereRef}
            // src={Pano1}
            height={long}
            width={"100%"}
            loadingImg={Logo}
            autorotateDelay={1000}
            autorotateIdle={true}
            autorotateSpeed="0.5rpm"
            caption={"tess"}
            navbar={["autorotate", "zoom", "move", "caption"]}
            defaultZoomLvl={1}
          ></ReactPhotoSphereViewer>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <ContactForm />
            <Box
              flex={1}
              sx={{
                "& > :not(style)": {
                  m: 3,
                  p:2,
                  width: "80%",
                  height:"85%"
                }
              }}
            >
              <ContactInfoCard />
            </Box>
          </Box>
        </Box>
        <Footer />
        <BottumMenu />
        <Whatsapp/>
      </Box>
    </Box>
  );
};

export default Home;
