import { useState } from "react";
import {
  Container,
  Grid,
  Image,
  Modal,
  Text,
  Title,
  Button,
  Card,
  Group,
} from "@mantine/core";
import BoxWrapper from "./BoxWrapper";
import { projects } from "../_mock/projects";

// Tipe data Project
interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  logo: string;
  figmaUrl?: string;
}

export default function Projects() {
  const [opened, setOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setOpened(true);
  };

  const themeColor = "#7096D1";

  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={false}>
        <Title order={1} mb={25} style={{ color: themeColor }}>
          Project
        </Title>
        <Grid>
          {projects.map((project: Project) => (
            <Grid.Col sm={12} md={6} lg={4} key={project.id}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image src={project.image} alt={project.title} height={160} />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Group spacing="sm">
                    <Image src={project.logo} alt="Logo" width={30} height={30} />
                    <Text weight={500} style={{ color: themeColor }}>
                      {project.title}
                    </Text>
                  </Group>
                </Group>

                <Text size="sm" color="dimmed" lineClamp={2}>
                  {project.description}
                </Text>

                <Button
                  style={{
                    backgroundColor: themeColor,
                    color: "#000",
                  }}
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => handleOpenModal(project)}
                >
                  Lihat Detail
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {selectedProject && (
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title={selectedProject.title}
            size="lg"
            centered
          >
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              mb="md"
              radius="md"
            />
            <Text mb="sm" style={{ whiteSpace: "pre-line" }}>
              {selectedProject.description}
            </Text>
            {selectedProject.figmaUrl && (
              <Button
                component="a"
                href={selectedProject.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: themeColor,
                  color: "#000",
                }}
                fullWidth
              >
                Lihat Figma
              </Button>
            )}
          </Modal>
        )}
      </BoxWrapper>
    </Container>
  );
}
