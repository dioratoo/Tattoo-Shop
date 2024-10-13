import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-8 text-xs text-zinc-500 -z-30 ">
      <div className="container flex gap-2 items-center">
        <p>Sandro Salamanca Tattoo Shop</p>
        <span className="text-yellow-400 text-base leading-3">&#8226;</span>
        <p>Calle #21, n152 - Portales - Popayan</p>
        <span className="text-yellow-400 text-base leading-3">&#8226;</span>
        <p className="flex items-center gap-1">
          <FaWhatsapp /> ( 313 8310085 ) 
        </p>
      </div>
    </footer>
  );
}
