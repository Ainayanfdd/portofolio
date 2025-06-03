import Github from "src/components/Github";
import CustomHelmet from "src/components/CustomHelmet";
import Project from "src/components/Project";
import Section from "src/components/Section";
import Organization from "src/components/Organization"; // ✅ pastikan ini ada

export default function ProjectsPage() {
  return (
    <>
      <CustomHelmet title="Projects" />
      <Section>
        <Github />
      </Section>
      <Section>
        <Project />
      </Section>
      <Section>
        <Organization /> {/* ✅ Tambahkan section Organization */}
      </Section>
    </>
  );
}
