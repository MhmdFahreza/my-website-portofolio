"use client";
import React, { useEffect, useState } from "react";
import { FlipWords } from "@/app/components/ui/flip-words";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import { languageHero } from "@/app/components/lib/languages";

type LanguageCode = keyof typeof languageHero;

export const HeroParallax = ({
    projects,
    selectedLanguage,
}: {
    projects: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
    selectedLanguage: string;
}) => {
    const firstRow = projects.slice(0, 5);
    const secondRow = projects.slice(5, 10);
    const thirdRow = projects.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            setShowTitle(v > 0.02);
        });
    }, [scrollYProgress]);

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    // ✅ Handle indexing dengan aman
    const languageKey = (selectedLanguage in languageHero ? selectedLanguage : "US") as LanguageCode;
    const heroContent = languageHero[languageKey];

    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header heroContent={heroContent} />

            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="flex flex-col items-center"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: showTitle ? 1 : 0, y: showTitle ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-4xl md:text-6xl font-bold dark:text-white mb-20"
                >
                    {heroContent.myProjects}
                </motion.h2>

                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = ({
    heroContent,
}: {
    heroContent: {
        name: string;
        flipWords: string[];
        developer: string;
        description: string;
    };
}) => {
    return (
        <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-2xl md:text-7xl font-bold dark:text-white leading-tight">
                {heroContent.name}
            </h1>
            <h2 className="text-2xl md:text-5xl font-semibold dark:text-white leading-tight mt-2">
                <FlipWords
                    words={heroContent.flipWords}
                    className="mr-1"
                    duration={3000}
                />
                <span>{heroContent.developer}</span>
            </h2>

            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-justify">
                {heroContent.description}
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{ x: translate }}
            whileHover={{ y: -20 }}
            key={product.title}
            className="group/product w-[30rem] h-96 relative shrink-0 bg-black rounded-lg overflow-hidden flex items-center justify-center"
        >
            <a href={product.link} className="block w-full h-full">
                <img
                    src={product.thumbnail}
                    className="object-contain w-full h-full"
                    alt={product.title}
                />
            </a>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover/product:opacity-80 transition-opacity duration-300 pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white transition-opacity duration-300">
                {product.title}
            </h2>
        </motion.div>
    );
};
