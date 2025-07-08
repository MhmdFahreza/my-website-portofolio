"use client";
import { HeroParallax } from "../app/components/ui/hero-parallax";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  MobileNavToggle,
  LanguageSelector,
} from "./components/ui/resizable-navbar";
import { Boxes } from "./components/ui/background-boxes";
import { useState } from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import { motion } from "motion/react";
import { AuroraBackground } from "../app/components/ui/aurora-background"
import { Timeline } from "@/app/components/ui/timeline";
import { cn } from "@/app/components/lib/utils";
import { Spotlight } from "../app/components/ui/Spotlight";
import {
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconBrandGmail,
  IconBrandGithub,
  IconBrandKotlin,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandFigma,
  IconBrandMysql,
  IconBrandFlutter,
  IconBrandTypescript,
  IconBrandGolang,
  IconBrandPhp,
  IconBrandPython,
} from "@tabler/icons-react";
import { languageNav, languageAbout, languageToolsTitle, languageFooter, languageExperience } from "./components/lib/languages";
import { projects } from "./components/lib/projects";

const getDataExperience = (selectedLanguage: LanguageCode) => {
  const exp = languageExperience[selectedLanguage];

  if (!exp) {
    // Fallback ke "US" jika tidak tersedia
    return getDataExperience("US");
  }

  const dataExperience = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {exp.bangkit}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./asset/Bangkit1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./asset/Bangkit2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./asset/Bangkit3.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./asset/Bangkit4.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            {exp.itiShort}
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200" style={{ textAlign: "justify" }}>
            {exp.itiFull}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="http://biaya-kuliah.com/wp-content/uploads/2023/04/iti.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://biaya.co/wp-content/uploads/2023/02/5.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://perkuliahankaryawan.com/wp-content/uploads/2022/12/Institut-Teknologi-Indonesia-e1670830617394-678x381.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://biaya.co/wp-content/uploads/2023/08/Institut-Teknologi-Indonesia-ITI-678x381.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019-2022",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I {exp.smaIntro}
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              {exp.smaOrg}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.kemdikbud.co.id/data/wp-content/uploads/2022/11/foto-sma-di-kota-tangerang-selatan-1668863589.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="http://dtangsel.sch.id/wp-content/uploads/2023/02/Salah-Satu-SMA-Negeri-di-tangsel.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="./asset/Buktisertifikatorganisasi.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.ytimg.com/vi/7aFkHY2ea44/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXihRMA8=&rs=AOn4CLDQbRadNmQWTMSsebsVxjRMiVFW_A"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return dataExperience;
}
const languageToolsCards = [
  {
    title: "Kotlin",
    icon: <IconBrandKotlin className="h-12 w-12 text-[#7F52FF]" />,
    link: "https://kotlinlang.org",
  },
  {
    title: "JavaScript",
    icon: <IconBrandJavascript className="h-12 w-12 text-[#F7DF1E]" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Nextjs",
    icon: <IconBrandNextjs className="h-12 w-12 text-black dark:text-white" />,
    link: "https://nextjs.org",
  },
  {
    title: "Figma",
    icon: <IconBrandFigma className="h-12 w-12 text-[#F24E1E]" />,
    link: "https://figma.com",
  },
  {
    title: "MySQL",
    icon: <IconBrandMysql className="h-12 w-12 text-[#4479A1]" />,
    link: "https://www.mysql.com",
  },
  {
    title: "Python",
    icon: <IconBrandPython className="h-12 w-12 text-[#3776AB]" />,
    link: "https://www.python.org",
  },
  {
    title: "PHP",
    icon: <IconBrandPhp className="h-12 w-12 text-[#777BB4]" />,
    link: "https://www.php.net",
  },
  {
    title: "Go",
    icon: <IconBrandGolang className="h-12 w-12 text-[#00ADD8]" />,
    link: "https://go.dev",
  },
  {
    title: "Flutter",
    icon: <IconBrandFlutter className="h-12 w-12 text-[#02569B]" />,
    link: "https://flutter.dev",
  },
  {
    title: "TypeScript",
    icon: <IconBrandTypescript className="h-12 w-12 text-[#3178C6]" />,
    link: "https://www.typescriptlang.org",
  },
];

type LanguageCode = keyof typeof languageNav;

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("US");

  const currentNav = languageNav[selectedLanguage] || languageNav["US"];
  const currentAbout = languageAbout[selectedLanguage] || languageAbout["US"];
  const currentToolsTitle = languageToolsTitle[selectedLanguage] || languageToolsTitle["US"];
  const currentFooter = languageFooter[selectedLanguage] || languageFooter["US"];
  const navItems = [
    { name: currentNav.home, link: "#home" },
    { name: currentNav.about, link: "#about" },
    { name: currentNav.experience, link: "#experience" },
    { name: currentNav.tools, link: "#tools" },
    {
      name: currentNav.downloadCV,
      link: "https://drive.google.com/uc?export=download&id=1_mM9mHA-JX31XXbh26uZ06StoFB1MDzV"
    },
  ];

  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-6 w-6 md:h-8 md:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/imfhrz",
    },
    {
      title: "Discord",
      icon: (
        <IconBrandDiscord className="h-6 w-6 md:h-8 md:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://discord.com/users/863204931599073341",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-6 w-6 md:h-8 md:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/muhammad-fahreza-a20975285/",
    },
    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-6 w-6 md:h-8 md:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDhbmbqvwgMQhNXNMMntphzHWSBlTfRJbfHvJmrbRfrKmSzSdphhkjmrRFcCQKnhBFpdF",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-6 w-6 md:h-8 md:w-8 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/MhmdFahreza",
    },
  ];


  return (
    <div className="relative w-full min-h-screen">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo selectedLanguage={selectedLanguage} />
          <NavItems items={navItems} />
          <div className="ml-auto flex items-center">
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onSelectLanguage={(lang) => setSelectedLanguage(lang as LanguageCode)}
            />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav visible>
          <MobileNavHeader>
            <NavbarLogo selectedLanguage={selectedLanguage} />
            <MobileNavToggle
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {/* Tambahkan flag selector juga di mobile */}
            <div className="mt-4 w-full flex justify-center">
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onSelectLanguage={(lang) => setSelectedLanguage(lang as LanguageCode)}
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <Content
        links={links}
        selectedLanguage={selectedLanguage}
        currentAbout={currentAbout}
        currentToolsTitle={currentToolsTitle}
        currentFooter={currentFooter}
      />
    </div>
  );
}

const Content = ({
  links,
  selectedLanguage,
  currentAbout,
  currentToolsTitle,
  currentFooter,
}: {
  links: any[];
  selectedLanguage: string;
  currentAbout: { title: string; description: string };
  currentToolsTitle: string;
  currentFooter: {
    connect: string;
    builtWith: string;
    copyright: string;
  };
}) => (
  <div>
    {/* HOME */}
    <section id="home" className="container mx-auto px-4 pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16">
      <HeroParallax projects={projects} selectedLanguage={selectedLanguage} />
    </section>

    {/* ABOUT */}
    <section
      id="about"
      className="relative flex min-h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-200 text-center">
          {currentAbout.title}
        </h1>

        <p className="mx-auto mt-6 w-full max-w-3xl text-base sm:text-lg text-justify text-neutral-300 whitespace-pre-line leading-relaxed sm:leading-loose px-2 sm:px-0">
          {currentAbout.description}
        </p>
      </div>
    </section>

    {/* EXPERIENCE */}
    <section id="experience" className="relative w-full overflow-clip">
      <Timeline
        data={getDataExperience(selectedLanguage as "US" | "ID" | "JP" | "KR" | "CN")}
        language={selectedLanguage as "US" | "ID" | "JP" | "KR" | "CN"}
      />
    </section>


    {/* TOOLS */}
    <section id="tools" className="relative py-24 w-full">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative flex flex-col gap-8 items-center justify-center px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-200">
            {currentToolsTitle}
          </h2>


          <div className="flex flex-wrap justify-center gap-4 max-w-5xl w-full">
            {languageToolsCards.map((tool, idx) => (
              <a
                key={idx}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 bg-white/80 dark:bg-neutral-900 rounded-lg shadow hover:shadow-lg transition-all duration-300 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40"
              >
                {tool.icon}
                <span className="mt-4 text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                  {tool.title}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </AuroraBackground>
    </section>

    <footer className="relative w-full bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Boxes />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 md:py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{currentFooter.connect}</h2>

        <FloatingDock
          mobileClassName="translate-y-2 md:translate-y-0 my-4"
          desktopClassName="translate-y-0"
          items={links}
        />

        <div className="mt-8 text-sm text-neutral-400 space-y-1">
          <p>
            {currentFooter.builtWith}{" "}
            <span className="font-medium text-white">Next.js</span>,{" "}
            <span className="font-medium text-white">Tailwind CSS</span>,{" "}
            {selectedLanguage === "US" ? "and" :
              selectedLanguage === "ID" ? "dan" :
                selectedLanguage === "JP" ? "および" :
                  selectedLanguage === "KR" ? "및" :
                    selectedLanguage === "CN" ? "和" : "and"}{" "}
            <span className="font-medium text-white">Aceternity UI</span>
          </p>
          <p>{currentFooter.copyright}</p>
        </div>
      </div>
    </footer>
  </div>
)