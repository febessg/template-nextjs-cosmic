import { Banner } from "@/components/home/banner";
import styles from "./page.module.css";
import { HomeProps } from "@/utils/home.type";
import { getDataHome } from "@/utils/actions/get-data";
import { Container } from "@/components/container";
import { About } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { Projects } from "@/components/home/projects";
import { Contact } from "@/components/home/contact";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  return (
    <div>
      <Banner banner={object.metadata.banner} />
      <Container>
        <About />
        <Services />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}
