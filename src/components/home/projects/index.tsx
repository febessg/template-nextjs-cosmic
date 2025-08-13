import styles from "./styles.module.scss";
import { HomeProps } from "@/utils/home.type";
import { getDataHome } from "@/utils/actions/get-data";
import Image from "next/image";

export async function Projects() {
  const { object }: HomeProps = await getDataHome();
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>{object.metadata.about.title}</h2>
      <p className={styles.subtitle}>{object.metadata.about.subtitle}</p>
      <p className={styles.text}>{object.metadata.about.text}</p>
      <div className={styles.projectsList}>
        {object.metadata.projects.project.map((item) => (
          <div key={item.name} className={styles.projectItem}>
            <h3 className={styles.projectName}>{item.name}</h3>
            <div className={styles.projectImageContainer}>
              <Image
                className={styles.projectImage}
                src={item.image.url}
                alt={item.name}
                priority
                quality={100}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.projectOverlay}>
                <p className={styles.projectDescription}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
