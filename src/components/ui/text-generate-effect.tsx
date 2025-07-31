"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  bio,
  bio2,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  bio: string;
  bio2: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [nameScope, animateName] = useAnimate();
  const [bioScope, animateBio] = useAnimate();
  const [bio2Scope, animateBio2] = useAnimate();

  const nameArray = words.split(" ");
  const bioArray = bio.split(" ");
  const bio2Array = bio2.split(" ");

  useEffect(() => {
    animateName(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.15),
      }
    );

    animateBio(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.1, { startDelay: nameArray.length * 0.15 + 0.3 }),
      }
    );

    animateBio2(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.1, {
          startDelay:
            nameArray.length * 0.15 +
            bioArray.length * 0.1 +
            0.6, // small gap after bio1
        }),
      }
    );
  }, []);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">
          {/* Name line */}
          <motion.div ref={nameScope}>
            {nameArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="opacity-0"
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>

          {/* Bio line 1 */}
          <motion.div ref={bioScope} className="mt-2 text-muted-foreground font-normal">
            {bioArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="opacity-0"
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>

          {/* Bio line 2 */}
          <motion.div ref={bio2Scope} className="mt-2 text-muted-foreground font-normal">
            {bio2Array.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="opacity-0"
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
