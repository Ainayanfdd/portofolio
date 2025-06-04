import {
  Avatar,
  Box,
  Flex,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import BoxWrapper from "./BoxWrapper";
import photo from "src/assets/me.png";

export default function EducationSection() {
  const theme = useMantineTheme();

  return (
    <Box px="" py="" sx={{ width: "77%" }}>
      <BoxWrapper withBackground={false}>
        <Title
          order={1}
          sx={{
            marginBottom: 25,
            color: "#7096D1",
          }}
        >
          Education
        </Title>

        <Box
          sx={{
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[6] : "#E3EDF7",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : "#BAD6EB"
            }`,
            boxShadow: `0 0 10px ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : "#D0E2F1"
            }`,
          }}
        >
          <Flex
            align="flex-start"
            gap="xl"
            direction={{ base: "column", sm: "row" }}
          >
            {/* FOTO */}
            <Avatar
              src={photo}
              size={250} // Ukuran diperbesar
              radius="md"
              alt="Profile Photo"
              sx={{ flexShrink: 0 }}
            />

            {/* TEKS */}
            <Box>
              <Text fw={700} size="lg" mb={5} color="#1C2D5A">
                Batam State Polytechnic
              </Text>
              <Text>Diploma III | Informatics Engineering</Text>
              <Text size="sm" color="dimmed">
                2023 - Expected 2026 | GPA: 3.70 / 4.00
              </Text>

              <Box mt={20}>
                <Text fw={700} size="lg" mb={5} color="#1C2D5A">
                  SMAN 1 Batam
                </Text>
                <Text>Senior High School | Science Major</Text>
                <Text size="sm" color="dimmed">
                  2020 - 2023 | Final Grade: 83.81
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </BoxWrapper>
    </Box>
  );
}
