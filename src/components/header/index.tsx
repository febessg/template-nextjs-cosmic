"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";

export function Header({ logo }: { logo: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src={logo}
              alt="Logo da empresa"
              priority
              quality={100}
              fill
              sizes="(max-width: 640px) 50vw, 100vw"
            />
          </Link>
        </div>
        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/#sobre">Sobre nós</Link>
          <Link href="/#servicos">Serviços</Link>
          <Link href="/#projetos">Projetos</Link>
          <Link href="/#contato">Contato</Link>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <FiAlignJustify size={28} />
        </div>
      </div>
    </header>
  );
}
