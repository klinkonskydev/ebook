import Blob from "@/src/components/Blob";
import Button from "@/src/components/Button";
import Topbar from "@/src/components/Topbar"
import { inter } from "@/src/styles/fonts";
import Image from "next/image";
import { faker } from '@faker-js/faker'
import User from "@/src/components/User";

export default function Home() {
  return (
    <main className={`min-h-[100vh] ${inter.className} pb-10 md:max-w-[1440px] px-8 md:m-auto`}>
      <Topbar />

      <section className="flex flex-col gap-9 md:flex md:flex-row md:items-center md:w-full md:justify-between md:h-1/2">
        <div className="relative flex items-center justify-center mt-6 md:mt-10 md:order-1 m-auto w-full max-w-[157px] h-[273px] md:max-w-[328px] md:h-[572px]">
          <Image alt="ebook mindset hackeado" src="/ebook.png" className="z-10" fill />
          <div className="absolute md:hidden"><Blob /></div>
        </div>

        <div>
          <h1 className="font-semibold text-xl md:text-[36px] md:line md:leading-tight w-full md:max-w-[30ch]">Mindset Hackeado: Desbloqueando o potencial ilimitado para o sucesso instantâneo</h1>
          <p className="text-[#8A8888] max-w-[81ch] [&>span]:text-[#5FC5FF] text-xs md:text-base mb-7">
            aprenda <span>na prática</span> métodos que <span>97% dos empreendedores</span> utilizam para <span>obter sucesso na vida</span>, vamos falar de métodos para <span>atingir suas metas</span>, algumas das precauções que você deve tomar e como aplicar na prática os <span>métodos dos bilionarios mais bem sucedidos para que você se torne um</span>!
          </p>

          <Button className="hidden shadow-sm shadow-[#004C77] md:flex md:w-fit">COMPRAR AGORA</Button>
        </div>
      </section>


        <section>
          <h3>Ultimos compradores:</h3>

          <div className="w-full overflow-hidden flex gap-4 py-4 h-[143px] hover:overflow-x-auto">
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
          </div>
        </section>

        <footer className="md:hidden fixed bottom-0 left-0 right-0 py-4 px-2 bg-black">
          <Button className="shadow-sm shadow-[#004C77] w-full">COMPRAR AGORA</Button>
        </footer>
    </main>
  );
}
