import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import tattooImage from '@/app/_assets/tattoo.png'
export default function Contato() {
  return (
    <main className="flex gap-1 justify-between">
      <section className="">
        <h1 className="text-2xl font-black mt12">
          Entre em
          <span className="text-yellow-400">Contato</span>
          <p className="mt-10 font-light text-zinc-400">
            Clique no botão abaixo e envie uma mensagem
            <br />
            Vamos conversar!
          </p>
        </h1>
        <Link target="_blank" href="https://wa.me//3138310085">
          <button className="bg-zinc-700 p-4 border-b-4 border-zinc-800 rounded flex items-center gap-4 mt-10">
            <FaWhatsapp className="w-8 h-8" />
            <div>
              <p>Enviar Whatsapp</p>
              <p className="text-zinc-500 text-sm">313 8310085</p>
            </div>
          </button>
        </Link>

      </section>
        <Image width={600} src={tattooImage} alt="Foto do Sandro fazendo um tattoo" />
    </main>
  );
}
