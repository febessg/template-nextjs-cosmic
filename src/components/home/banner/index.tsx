import Image from "next/image";
import styles from "./styles.module.scss";

interface BannerProps {
  image: {
    url: string;
  };
  title: string;
  subtitle: string;
}

export function Banner({ banner }: { banner: BannerProps }) {
  return (
    <main className={styles.main}>
      <div className={styles.bannerContainer}>
        <h1>{banner.title}</h1>
        <p>{banner.subtitle}</p>
      </div>
      <div className={styles.bannerContent}>
        <Image
          className={styles.bannerImage}
          src={banner.image.url}
          alt={banner.title}
          priority
          quality={100}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 50vw"
        />
      </div>
    </main>
  );
}
