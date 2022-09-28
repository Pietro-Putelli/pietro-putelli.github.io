import React, { memo } from "react";
import {
  AnimatedImage,
  AnimatedSeparator,
  AnimatedText,
  FadeAnimatedView,
  HoverAnimatedView,
} from "../components/animations";
import data from "../constants/data";
import { Button } from "../components/buttons";

const COMPTENCES = [
  {
    title: "Develop projects and\ndesign products",
    icon: "💡",
  },
  {
    title: "Javascript\nPython\nSwift",
    icon: "💻",
  },
  {
    title: "Craft Cocktails",
    icon: "🍸",
  },
  {
    title: "Travel and\nMeet new People",
    icon: "🗺️",
  },
  {
    title: "Read about\neverything",
    icon: "📚",
  },
  {
    title: "Learning NodeJS and Java",
    icon: "⚙️",
  },
];

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

        <div className="md:mx-[16%] flex items-center flex-col mx-0 pb-16">
          <AnimatedText className="whitespace-pre-line text text-2xl mt-8 text-center uppercase">
            {data.about.description}
          </AnimatedText>

          <AnimatedSeparator />

          <div className="flex flex-row flex-wrap justify-center">
            {COMPTENCES.map(({ title, icon }) => {
              return (
                <HoverAnimatedView className="bg-second w-[10rem] h-[10rem] mx-2 mb-4 px-4 flex center flex-col">
                  <p className={"text-5xl text-center mb-4"}>{icon}</p>
                  <p className="text-white tracking-wider text-center whitespace-pre-line uppercase text-sm">
                    {title}
                  </p>
                </HoverAnimatedView>
              );
            })}
          </div>

          <Button to="contacts" className={"mt-12 self-center"} background>
            Let's get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
