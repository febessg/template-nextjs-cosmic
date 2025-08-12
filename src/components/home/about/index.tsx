import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import { getDataHome } from "@/utils/actions/get-data";

export async function About() {
  const { object }: HomeProps = await getDataHome();
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>{object.metadata.about.title}</h2>
      <p className={styles.subtitle}>{object.metadata.about.subtitle}</p>
      <p className={styles.text}>{object.metadata.about.text}</p>
      <div className={styles.aboutItem}>
        <h3>Missão</h3>
        <p>{object.metadata.about.mission}</p>
      </div>
      <div className={styles.aboutItem}>
        <h3>Visão</h3>
        <p>{object.metadata.about.vision}</p>
      </div>
      <div className={styles.aboutItem}>
        <h3>Valores</h3>
        <ul className={styles.valuesList}>
          {object.metadata.about.values.split(";").map((item) => {
            const [title, ...description] = item.split(":");
            if (!title || title.trim() === "") return null;
            return (
              <li key={item} className={styles.valuesItem}>
                <strong className={styles.valuesTitle}>{title}:</strong>
                {description.join(":").trim()}.
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
