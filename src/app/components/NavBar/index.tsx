"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const pathname = usePathname();

  const paths = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#aboutme" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.logo}>Your Logo</div> */}
      <ul className={styles.menu}>
        {paths.map((path, index) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            key={index}
          >
            <li
              className={pathname === path.path ? styles.active : ""}
              key={index}
            >
              <Link href={path.path}>{path.name}</Link>
            </li>
          </motion.div>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
