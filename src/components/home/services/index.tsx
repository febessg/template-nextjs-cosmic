import styles from "./styles.module.scss";
import { HomeProps } from "@/utils/home.type";
import { getDataHome } from "@/utils/actions/get-data";

export async function Services() {
  const { object }: HomeProps = await getDataHome();
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>{object.metadata.services.title}</h2>
      <p className={styles.subtitle}>{object.metadata.services.subtitle}</p>
      <p className={styles.text}>{object.metadata.services.text}</p>
      <div className={styles.servicesList}>
        {object.metadata.services.types.map((service) => (
          <div className={styles.serviceItem} key={service.type_title}>
            <h3>{service.type_title}</h3>
            <div className={styles.itemText}>
              <p>{service.type_text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
