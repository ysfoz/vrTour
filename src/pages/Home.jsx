import { Box, Button, Stack, styled, Typography } from "@mui/material";
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
import {Description }from "../components/Description";
import VrTours from "../components/VrTours"
import StreetView from "../components/StreetView"
import Beispiele from "../components/Beispiele"




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

  const getLocation=(e)=>{
    const vrTours = document.getElementById("vrtours").getBoundingClientRect().y
    const streetView = document.getElementById("streetview").getBoundingClientRect().y
    const beispiele = document.getElementById("beispiele").getBoundingClientRect().y
    const contactForm = document.getElementById("contactform").getBoundingClientRect().y
    const contactInfo = document.getElementById("contactinfo").getBoundingClientRect().y

    setLocations({vrTours,streetView,beispiele,contactForm,contactInfo})
    
}

  useEffect(()=>{
getLocation()
  },[])


  const long = "calc(100vh - 130px)";
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={"xl"} id="test">
        <Navbar />
        <Title locations={locations}/>
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
          description="test"
          navbar={["autorotate", "zoom", "move", "caption"]}
          defaultZoomLvl={1}
        ></ReactPhotoSphereViewer>
        <Description locations={locations}/>
      <VrTours />
      <StreetView/>
      <Beispiele/>
        <Stack   direction={{ md: 'row'}} alignItems="center"  >
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
