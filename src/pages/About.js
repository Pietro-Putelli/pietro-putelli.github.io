import React, { memo } from "react";
import { AnimatedImage, AnimatedText } from "../components/animations";
import data from "../constants/data";
import { Button } from "../components/buttons";

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

        <div className="md:mx-[16%] flex flex-col mx-0 pb-16">
          <AnimatedText className="whitespace-pre-line text text-2xl mt-8 text-center uppercase">
            {data.about.description}
          </AnimatedText>

          <Button to="contacts" className={"mt-8 self-center"} background>
            Let's get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
