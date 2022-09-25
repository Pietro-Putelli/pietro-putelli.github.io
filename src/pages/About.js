import React, { memo } from "react";
import { AnimatedImage, AnimatedText } from "../components/animations";

const About = () => {
  return (
    <div className="screen-section center flex bg-black md:p-8 p-4">
      <div className="items-center h-full flex flex-col">
        <AnimatedText
          background
          isFromBottom
          className="text uppercase text-6xl md:text-left text-center"
        >
          About me
        </AnimatedText>

        <AnimatedImage
          whileHover={{
            rotate: "0.5deg",
            scale: 1.05,
            borderRadius: 16,
          }}
          className="md:w-[20vw] w-[50vw] my-12"
          src={process.env.PUBLIC_URL + "/images/me.png"}
        />

        <div className="md:mx-[8%] mx-0 pb-16">
          <AnimatedText className="text text-2xl mt-8 text-center normal-case">
            Hi, my name is Pietro Putelli, I am 20 years old and I live in
            Italy. I attended scientific high school and then I enrolled in the
            first year of the University of computer science. Since I’m a
            creative and ambitious person, passionate about the design and
            functionality of products, I decided to develop a project and create
            a business model with the purpose of founding a startup. Therefore a
            means for expressing my creativity, for the past four years, I
            studied various programming languages, design psychology and
            marketing strategies.
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
