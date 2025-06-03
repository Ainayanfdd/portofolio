import { useState } from "react";
import {
  Container,
  Grid,
  Image,
  Text,
  Title,
  Button,
  Modal,
  Stack,
  Group,
} from "@mantine/core";
import BoxWrapper from "./BoxWrapper";
import { organizations } from "../_mock/organizations";

// Tipe data Organization
interface Organization {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export default function OrganizationPage() {
  const [opened, setOpened] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

  const handleOpenModal = (org: Organization) => {
    setSelectedOrg(org);
    setOpened(true);
  };

  const themeColor = "#7096D1";

  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={false}>
        <Title order={1} mb={25} style={{ color: themeColor }}>
          Organization & Committees
        </Title>
        {organizations.map((org: Organization) => (
          <Grid key={org.id} gutter="md" mb="xl">
            <Grid.Col xs={12} md={4}>
              <Stack spacing="sm">
                <Image src={org.image} alt={org.title} radius="md" />
                <Button
                  style={{
                    backgroundColor: themeColor,
                    color: "#000",
                  }}
                  onClick={() => handleOpenModal(org)}
                >
                  Lihat Detail
                </Button>
              </Stack>
            </Grid.Col>

            <Grid.Col xs={12} md={8}>
              <Group position="apart" mb={5}>
                <Text fw={700} fz="lg">
                  {org.title}
                </Text>
                <Text fz="sm" c="dimmed">
                  {org.date}
                </Text>
              </Group>
              <Text fz="sm">{org.description}</Text>
            </Grid.Col>
          </Grid>
        ))}

        {selectedOrg && (
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title={selectedOrg.title}
            size="lg"
            centered
          >
            <Image
              src={selectedOrg.image}
              alt={selectedOrg.title}
              mb="md"
              radius="md"
            />
            <Text mb="sm">{selectedOrg.description}</Text>
          </Modal>
        )}
      </BoxWrapper>
    </Container>
  );
}
