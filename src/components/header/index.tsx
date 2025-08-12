"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import logoImage from "../../../public/logo.png";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";

export function Header({ logo }: { logo: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={logoImage}
            alt="Logo da empresa"
            priority
            quality={100}
            width={60}
          />
        </Link>
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/#sobre">Sobre nós</Link>
        <Link href="/#servicos">Serviços</Link>
        <Link href="/#pri">Portfólio</Link>
        <Link href="/#contato">Contato</Link>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <FiAlignJustify size={28} />
      </div>
    </header>
  );
}
