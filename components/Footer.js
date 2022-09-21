import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <>
      <footer className={Style.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>{" "}
          Explored by <span className={Style.name}>Gaetan</span>
        </a>
        
        <Link href="about"> about </Link>
      </footer>
    </>
  );
}
