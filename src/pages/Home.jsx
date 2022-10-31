import { Box, Stack, styled, Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
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
import Toasty from "../components/Toasty";
import { Description } from "../components/Description";
import VrTours from "../components/VrTours";
import StreetView from "../components/StreetView";
import Beispiele from "../components/Beispiele";
import MapAdvantages from "../components/MapAdvantages";

import { DivederMain, DivederVr } from "../components/DivederComp";

const Home = () => {
  const [toastyMessage, setToastyMessage] = useState({});
  const [locations, setLocations] = useState({});

  const photoSphereRef = useRef();
  const stopperMouseWheel = () => {
    photoSphereRef.current.setOption("mousewheel", false);
  };

  useEffect(() => {
    stopperMouseWheel();
  }, []);

  const getLocation = (e) => {
    const vrTours =
      document.getElementById("vrtours").getBoundingClientRect().y - 40;
    const streetView =
      document.getElementById("streetview").getBoundingClientRect().y - 40;
    const beispiele =
      document.getElementById("beispiele").getBoundingClientRect().y - 40;
   
   

    setLocations({ vrTours, streetView, beispiele});
  };

  const w = window.innerWidth;
  useEffect(() => {
    getLocation();
  }, [w]);


  const HeightBig = "calc(100vh - 130px)";
  const HeightSmall = "calc(100vh - 190px)";
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={"xl"} id="test">
        <Navbar />
        <Title locations={locations} />
        <ReactPhotoSphereViewer
          ref={photoSphereRef}
          // src={Pano1}
          height={w < 600 ? HeightSmall : HeightBig}
          width={"100%"}
          loadingImg={Logo}
          autorotateDelay={1000}
          autorotateIdle={true}
          autorotateSpeed="0.5rpm"
          caption={"tess"}
          description="test"
          navbar={["autorotate", "zoom", "move", "caption"]}
          defaultZoomLvl={1}
        ></ReactPhotoSphereViewer>
        <Description locations={locations} />

        <Stack mt={7} mb={7} id="vrtours" name="vrtours" divider={<DivederVr />}>
          <VrTours left />
          <VrTours right />
          <VrTours left />
          <VrTours right />
        </Stack>
        <DivederMain />
        <StreetView />
        <MapAdvantages />
        <DivederMain />
        <Beispiele />
        <DivederMain />
        <Stack
       
          direction={{ md: "row" }}
          alignItems="center"
          mb={4}
        >
          <ContactForm setToastyMessage={setToastyMessage} />
          <ContactInfoCard />
        </Stack>

        <Footer />
        <BottumMenu />
        <Whatsapp />
        {toastyMessage && <Toasty toastyMessage={toastyMessage} />}
      </Box>
    </Box>
  );
};

export default Home;
