import React from "react";
import alena from "../img/pexels-alena-koval-886521.jpg";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
            {/* treyvon */}
          </Hide>
        </motion.div>
        <p>Contact us for what you want</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={alena} alt="" />
      </Image>
    </About>
  );
};

export default AboutSection;
