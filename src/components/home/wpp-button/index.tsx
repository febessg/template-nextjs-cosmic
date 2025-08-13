import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import { getDataHome } from "@/utils/actions/get-data";
import { FaWhatsapp } from "react-icons/fa";

export async function WppButton() {
  const { object }: HomeProps = await getDataHome();

  return (
    <div className={styles.wppButton}>
      <a
        href={object.metadata.cta_button.button_url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
      >
        <FaWhatsapp size={24} color="#fff" />
      </a>
      <p>{object.metadata.cta_button.button_title}</p>
    </div>
  );
}
