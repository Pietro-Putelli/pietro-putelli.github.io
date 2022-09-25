import React, { memo } from "react";
import {
  AnimatedImage,
  AnimatedSeparator,
  AnimatedText,
} from "../components/animations";
import { Button } from "../components/buttons";

const Projects = () => {
  return (
    <div className="screen-section flex flex-col center p-4">
      <div className="flex flex-col items-center">
        <AnimatedImage
          className="md:w-[15vw] w-[30vw]"
          source={"/images/real.icon.png"}
        />

        <div className="flex items-center flex-col">
          <AnimatedText
            className={"text-center text-2xl mt-16 whitespace-pre-line"}
          >
            “Real” is a mobile app that allows users{"\n"}to interact and meet
            new people, find{"\n"}venues and events in the city or nearby.
          </AnimatedText>

          <AnimatedSeparator className="my-12" />
        </div>

        <Button background to="https://realmoments.it">
          DISCOVER MORE
        </Button>
      </div>
    </div>
  );
};

export default memo(Projects);
