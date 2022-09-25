import React, { memo } from "react";
import { AnimatedSeparator, AnimatedText } from "../components/animations";
import { Button } from "../components/buttons";

const CenterTitlePagePattern = ({ title, subtitle, buttons }) => {
  return (
    <div className="screen-section flex center p-4">
      <div className="items-center justify-center flex flex-col">
        <div className="items-center justify-center flex flex-col">
          <AnimatedText background className="text-6xl text-center">
            {title}
          </AnimatedText>

          {subtitle && (
            <AnimatedText
              delay={0.5}
              className="whitespace-pre-line text-small text-center mt-8"
            >
              {subtitle}
            </AnimatedText>
          )}
        </div>

        <div className="items-center flex flex-col w-[110%]">
          <AnimatedSeparator />

          <div className="flex md:flex-row flex-col md:w-[95%] justify-between">
            {buttons.map(({ to, title }) => {
              return (
                <Button key={title} className={"md:my-0 my-1"} to={to}>
                  {title}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CenterTitlePagePattern);
