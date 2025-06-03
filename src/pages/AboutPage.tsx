// components
import About from "src/components/About";
import Page from "src/components/Page";
import EducationSection from "src/components/Education";
import Section from "src/components/Section";
import CustomHelmet from "src/components/CustomHelmet";

export default function AboutPage() {
  return (
    <>
      <CustomHelmet title="About" />

      <Section>
        <EducationSection />
      </Section>

      <Page title="About me" isFirst={true} withBackground={false}>
        <About />
      </Page>
    </>
  );
}
