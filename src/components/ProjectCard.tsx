import { motion } from "framer-motion";
import {
  Badge,
  Box,
  Group,
  Text,
  TypographyStylesProvider,
  Image,
  MantineTheme,
} from "@mantine/core";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Box
        sx={(theme: MantineTheme) => ({
          padding: theme.spacing.md,
          borderRadius: 20,
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
          boxShadow: theme.shadows.md,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.white,
        })}
      >
        <Group align="flex-start" spacing="md">
          <Image
            src={project.image}
            alt={project.title}
            radius="md"
            width={80}
            height={80}
            fit="cover"
          />
          <Box sx={{ flex: 1 }}>
            <Group position="apart">
              <Text weight={600} size="md">
                {project.title}
              </Text>
              <Badge size="sm" color="yellow">
                {project.date}
              </Badge>
            </Group>
            <TypographyStylesProvider>
              <Text size="sm" mt={6} color="dimmed" lineClamp={3}>
                {project.description}
              </Text>
            </TypographyStylesProvider>
          </Box>
        </Group>
      </Box>
    </motion.div>
  );
};
