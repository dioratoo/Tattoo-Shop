import { londrinaSolid } from "./_lib/fonts";
import Image from "next/image";
import portrait from "@/app/_assets/retrato.png"
export default function Home() {
  return (
    <>
      <main className="relative flex flex-1 ">
        <h1 className={`absolute text-[250px] -z-20 text-zinc-800 -left-0 -top-0 leading-tight ${londrinaSolid.className}`} >Tattoo</h1>
        <div className="font-black text-zinc-600 text-7xl pt-[160px] uppercase">
          <h2>Inspire-se</h2>
          <h2>Expresse-se</h2>
          <h2 className="text-yellow-600">Tatue-se</h2>
        </div>
        <Image className="absolute grayscale  right-0 -bottom-20" width='300' src={portrait} alt="Retrato do Sandro Salamanca" />
        
      </main>
    </>
  );
}
