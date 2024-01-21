import { openSans } from "@/src/styles/fonts"

export const OFFER_TIME_IN_MINUTES = 10

export default function Topbar() {
  return (
    <div className={`${openSans.className} py-2 flex justify-center gap-1`}>
      OFERTA ACABA EM <b className="text-[#E33131]">00:00</b>
    </div>
  )
}
