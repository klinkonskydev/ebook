'use client'
import { openSans } from "@/src/styles/fonts"
import { useEffect, useState } from "react"

export const TOTAL_DURATION_IN_SECONDS = 600
export const TOTAL_DURATION_IN_MILISECONDS = TOTAL_DURATION_IN_SECONDS * 1000

export default function Topbar() {
  const [remainingSeconds, setRemainingSeconds] = useState<number>(TOTAL_DURATION_IN_MILISECONDS)

  const minutes = Math.floor((remainingSeconds / 1000 / 60) % 60)
  const seconds = Math.floor((remainingSeconds / 1000) % 60);

  useEffect(() => {
    let interval: NodeJS.Timeout

    if(remainingSeconds < 1000) return

    interval = setTimeout(() => {
      setRemainingSeconds(prev => prev - 1000)
    }, 1000)

    return () => {
      clearTimeout(interval)
    }
  }, [remainingSeconds])

  return (
    <div className={`${openSans.className} py-2 flex justify-center gap-1`}>
      OFERTA ACABA EM <b className="text-[#E33131]">{minutes}:{seconds}s</b>
    </div>
  )
}
