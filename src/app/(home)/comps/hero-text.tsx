"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `hi im yash.`;
const bio = `Crafting seamless web experiences.`
const bio2 = `Full-stack developer with a passion for performance and design.`

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} bio={bio} bio2={bio2} className="text-white"/>;
}
