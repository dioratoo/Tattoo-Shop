"use client";

import Image from "next/image";
import logo from "@/app/_assets/logo.svg";
import { londrinaSolid } from "../_lib/fonts";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();

  const isActive = (currentPath: string, pathname: string) => {
    if (currentPath.includes(pathname)) {
      return "underline";
    }
  };

  return (
    <nav
      className={`container py-8 flex justify-between ${londrinaSolid.className}`}
    >
      <Link href="/">
        <Image
          src={logo}
          alt="Logotipo de empresa de Sandro Salamanca Tattoo Shop"
        />
      </Link>
      <ul className="flex gap-6 text-2xl">
        <li className={`${isActive(pathname, "servicos")}`}>
          <Link href="/servicos">Serviços</Link>
        </li>
        <li className={`${isActive(pathname, "sobre")}`}>
          <Link href="/sobre">Sobre Mim</Link>
        </li>
        <li>
          <Link href="/contato" className="flex flex-col">
            <span className={`text-right ${isActive(pathname, "contato")}`}>
              Contato
              <br />
            </span>
            <span className="text-sm text-zinc-400 font-extralight flex gap-1 items-center">
              <FaWhatsapp />
              313 8310085
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
