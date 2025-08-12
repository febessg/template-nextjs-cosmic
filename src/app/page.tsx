import { Banner } from "@/components/home/banner";
import styles from "./page.module.css";
import { HomeProps } from "@/utils/home.type";
import { getDataHome } from "@/utils/actions/get-data";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  return (
    <div>
      <Banner banner={object.metadata.banner} />
    </div>
  );
}
