// mantine
import {
  Box,
  Button,
  Center,
  createStyles,
  Grid,
  Group,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { m } from "framer-motion";
// hooks
import useAnalyticsEventTracker from "src/hooks/useAnalyticsEventTracker";
// components
import MotionContainer from "./animations/MotionContainer";
import Type from "./animations/Type";
import { varFade } from "./animations/variants";
import getVariant from "./animations/variants/getVariant";
import HeroCanvas from "./HeroCanvas";
// utils
import { backgroundGradient, textGradient } from "src/utils/cssStyles";
// icons
import { Star } from "tabler-icons-react";
// data
import { metaData } from "src/_mock/seo";
import CV from "src/assets/languages/CV.pdf";

// --------------------------------------------------

const STRING: string[] = ["Welcome,", "_", "I'm"];

const useStyles: any = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 800,
    marginBottom: -50,

    [theme.fn.smallerThan("md")]: {
      fontSize: 34,
    },
  },

  box: {
    [theme.fn.smallerThan("md")]: {
      marginTop: 100,
      marginRight: 0,
    },
    [theme.fn.largerThan("md")]: {
      maxWidth: 600,
      minWidth: 450,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
    background:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : "#BAD6EB",  // ganti warna jadi #BAD6EB
    "&:hover": {
      background:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : "#BAD6EB",  // ganti warna jadi #BAD6EB
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.yellow[6], 0.55)
        : "#BAD6EB",  // ganti warna jadi #BAD6EB
    borderRadius: theme.radius.lg,
    padding: "4px 12px",
  },

  gradientText: {
    ...textGradient(
      `300deg, 
      #BAD6EB 0%,
      #BAD6EB 25%,
      #BAD6EB 50%,
      #BAD6EB 75%,
      #BAD6EB 100%`
    ),
    backgroundSize: "400%",
    fontSize: 64 / 14 + "rem",
    marginBottom: 24,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 44 / 14 + "rem",
    },
  },

  gradientBg: {
    ...backgroundGradient(
      `0deg,
        #BAD6EB 0%,
        #BAD6EB 25%,
        #BAD6EB 50%,
        #BAD6EB 75%,
        #BAD6EB 100%`
    ),
    backgroundSize: "400%",
    [theme.fn.smallerThan("sm")]: {
      marginTop: 125,
      width: 225,
      height: 225,
    },
    [theme.fn.largerThan("sm")]: {
      marginTop: 125,
      minWidth: 400,
      minHeight: 400,
    },
    boxShadow: `0 0 10px ${
      theme.colorScheme === "dark"
        ? theme.colors.white[3]
        : theme.colors.white[4]
    } !important`,
    borderRadius: 10,
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const gaEventTracker = useAnalyticsEventTracker({
    category: "Hero",
    action: "Click",
  });

  return (
    <Group pr={10}>
      <Grid justify="space-between" align="center">
        <Grid.Col lg={6} md={7} sm={12} mt={95}>
          <Center>
            <Box className={classes.box}>
              <MotionContainer
                component={m.h3}
                sx={{ typography: "h1", display: "flex", overflow: "hidden" }}
                className={classes.title}
              >
                {STRING.map((text) =>
                  text.split("").map((letter, index) =>
                    letter === "_" ? (
                      <span key={index}>&nbsp;</span>
                    ) : (
                      <m.span key={index} variants={getVariant("slideInUp")}>
                        {letter}
                      </m.span>
                    )
                  )
                )}
              </MotionContainer>
              <m.div variants={varFade().in}>
                <m.h2
                  animate={{
                    backgroundPosition: "200%",
                  }}
                  transition={{
                    repeatType: "reverse",
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                  }}
                  className={classes.gradientText}
                >
                  {metaData.fullName}
                </m.h2>
              </m.div>

              <m.div variants={varFade().in}>
                <Title
                  sx={(theme) => ({
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors.yellow[4]
                        : "#BAD6EB",  // ganti warna jadi #BAD6EB
                    [theme.fn.smallerThan("md")]: {
                      fontSize: 34,
                    },
                  })}
                >
                  <Type />
                </Title>
              </m.div>
              <Group mt={30}>
                <Button
                  variant="default"
                  radius="lg"
                  size="md"
                  className={classes.control}
                  component={"a"}
                  href={CV}
                  target={"_blank"}
                  onClick={() =>
                    gaEventTracker({
                      label: "Preview CV",
                    })
                  }
                >
                  Preview CV &nbsp;
                  <ThemeIcon color="yellow" radius="xl" size="lg">
                    <Star />
                  </ThemeIcon>
                </Button>
              </Group>
            </Box>
          </Center>
        </Grid.Col>
        <Grid.Col lg={6} md={5} sm={12}>
          <Center>
            <m.div
              animate={{
                backgroundPosition: "400%",
              }}
              transition={{
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 20,
                repeat: Infinity,
              }}
              className={classes.gradientBg}
            >
              <HeroCanvas />
            </m.div>
          </Center>
        </Grid.Col>
      </Grid>
    </Group>
  );
}
