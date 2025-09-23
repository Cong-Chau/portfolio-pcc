"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Landing() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)]">
      <DotLottieReact
        src="/gifs/Technology.lottie"
        className="w-[567px] h-auto]"
        loop
        autoplay
      />
    </div>
  );
}

export default Landing;
