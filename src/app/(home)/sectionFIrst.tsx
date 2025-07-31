import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import { LampDemo } from "./comps/hero";
import { TextGenerateEffectDemo } from "./comps/hero-text";

import * as motion from "motion/react-client"
import { Settings } from "lucide-react";

const FirstSection = () => {
  return (
    <div className="">
      <div className="w-full h-full mt-10 md:mt-0">
        <LampDemo>
          <div className="maw-w-[60vw] max-h-[60vh]">
            <AboutMe />
          </div>
        </LampDemo>
      </div>
    </div>
  );
}

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-18 items-center justify-center border-2 p-4">
      {/* left */}
      <div className="w-full md:w-1/3 text-center md:text-left ">
        <p className="text-sm font-semibold tracking-widest text-gray-400 underline">ABOUT ME</p>
        <p className="text-6xl md:text-2xl font-medium mb-4 tracking-normal">
          hi im yash <span className="inline-block animate-wave text-white">👋</span>
        </p>
        <p className="mt-2 text-lg text-muted-foreground tracking-tight">
  Crafting seamless web experiences. Full-stack developer with a passion for performance and design.
</p>
      </div>


      {/* right */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        jhbckjsebcjk
      </div>
    </div>

  )
}

export default FirstSection;