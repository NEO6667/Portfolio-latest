"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `hi im neo`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="text-white"/>;
}
