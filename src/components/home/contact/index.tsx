import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export async function Contact() {
  const { object }: HomeProps = await getDataHome();
  return (
    <section className={styles.contact} id="contato">
      <div className={styles.contactContainer}>
        <h2 className={styles.title}>Contatos</h2>
        <div className={styles.contactItems}>
          <div className={styles.contactItem}>
            <FiPhone size={24} color="#fff" />
            <p>{object.metadata.contact.phone}</p>
          </div>
          <div className={styles.contactItem}>
            <FiMapPin size={24} color="#fff" />
            <p>{object.metadata.contact.address}</p>
          </div>
          <div className={styles.contactItem}>
            <FiMail size={24} color="#fff" />
            <p>{object.metadata.contact.email}</p>
          </div>
          <div className={styles.contactItem}>
            <FiClock size={24} color="#fff" />
            <p>{object.metadata.contact.time}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
