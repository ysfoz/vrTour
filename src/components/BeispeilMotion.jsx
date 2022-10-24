import { motion } from "framer-motion";
import { Box, Button, Container, styled, Typography } from "@mui/material";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 40,

    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
    },
  },
};

const style = {
  flex: 1,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: 20,
};

const StyledBox = styled(Container)(({ theme }) => ({}));
const Card = ({ image }) => {
  return (
    <StyledBox>
      <motion.div
        style={style}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.9 }}
      >
        <motion.div variants={cardVariants}>{image}</motion.div>
      </motion.div>
    </StyledBox>
  );
};

const BeispielMotion = ({ image }) => {
  return <Card image={image} />;
};

export default BeispielMotion;
