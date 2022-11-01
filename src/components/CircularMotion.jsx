import { motion } from "framer-motion";

const CircularMotion = ({ icon }) => (
  <motion.div
    className="box"
    animate={{
      scale: [1, 2, 1],
      rotate: [360, 0],
    }}
    transition={{
      duration: 4,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 3,
    }}
  >
    {icon}
  </motion.div>
);

export default CircularMotion;
