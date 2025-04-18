import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
         max-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className="text-[#915eff]">Bibek</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-grey-100 `}>
            I am a Frontend Developer <br className="sm:block hidden" /> and I
            am passionate about <br className="sm:block hidden" /> building new
            Projects and <br className="sm:block hidden" /> learning new
            technologies.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
