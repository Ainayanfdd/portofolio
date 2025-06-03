import { useState } from "react";
// Mantine
import { ActionIcon, createStyles } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
// Components
import Hero from "src/components/Hero";
import Education from "src/components/Education";
import About from "src/components/About";
import Skills from "src/components/Skills";
import Github from "src/components/Github";
import Project from "src/components/Project";
import Organization from "src/components/Organization";
import Section from "src/components/Section";

// Icons
import { ArrowUp } from "tabler-icons-react";

// Styles
const useStyles = createStyles((theme) => ({
  sticky: {
    position: "sticky",
    zIndex: 9999,
    bottom: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.fn.largerThan("md")]: {
      paddingBottom: 75,
      marginRight: 75,
    },
    [theme.fn.smallerThan("md")]: {
      paddingBottom: 25,
      marginRight: 25,
    },
  },
}));

// Component
export default function LandingPage() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { classes } = useStyles();

  const handleParallaxNavigationUp = () => {
    scrollIntoView({ alignment: "center" });
  };

  return (
    <>
      <div ref={targetRef} />

      {/* Hero Section */}
      <Section withBackground={false} isFirst={true}>
        <Hero />
      </Section>

      {/* Education Section */}
      <Section withBackground={false}>
        <Education />
      </Section>

      {/* About Section */}
      <Section withBackground={false}>
        <About />
      </Section>

      {/* Skills Section */}
      <Section withBackground={false}>
        <Skills />
      </Section>

      {/* Github Section */}
      <Section withBackground={false} height={"200hv"}>
        <Github />
      </Section>

      {/* Project Section */}
      <Section withBackground={false} height={"200hv"}>
        <Project />
      </Section>

      {/* Organization Section */}
      <Section withBackground={false}>
        <Organization />
      </Section>


      {/* Scroll to Top Button */}
      <div className={classes.sticky}>
        <ActionIcon
          variant="filled"
          color="gray"
          radius={50}
          aria-label="Scroll to top"
          onClick={handleParallaxNavigationUp}
          size={45}
          mr={25}
        >
          <ArrowUp />
        </ActionIcon>
      </div>
    </>
  );
}
