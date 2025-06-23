"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/app/components/lib/utils";

export const FlipWords = ({
    words,
    duration = 3000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isFirstRender = useRef(true);

    useEffect(() => {
        isFirstRender.current = false;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [duration, words.length]);

    const currentWord = words[currentIndex];

    return (
        <div className="relative inline-block">
            <AnimatePresence>
                <motion.div
                    key={currentWord}
                    initial={
                        isFirstRender.current
                            ? false
                            : { opacity: 0, y: 10 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                        opacity: 0,
                        y: -40,
                        x: 40,
                        filter: "blur(8px)",
                        scale: 2,
                        position: "absolute",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                    }}
                    className={cn(
                        "z-10 inline relative text-left text-neutral-900 dark:text-neutral-100",
                        className
                    )}
                >
                    {currentWord.split(" ").map((word, wordIndex) => (
                        <motion.span
                            key={word + wordIndex}
                            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                delay: wordIndex * 0.3,
                                duration: 0.3,
                            }}
                            className="inline-block whitespace-nowrap"
                        >
                            {word.split("").map((letter, letterIndex) => (
                                <motion.span
                                    key={word + letterIndex}
                                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{
                                        delay: wordIndex * 0.3 + letterIndex * 0.05,
                                        duration: 0.2,
                                    }}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
