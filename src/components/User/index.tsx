import Image from "next/image";

import { faker } from '@faker-js/faker'

export default function User() {
  const net = faker.internet

  return (
    <div className="py-3 px-4 flex gap-3 bg-[#1E1E1E] h-fit min-w-[323px] rounded-lg">
      <div className="w-[44px] h-[44px] overflow-hidden">
      <Image src={net.avatar()} alt="photo" width={44} height={44} className="rounded-[4px] overflow-hidden" />
      </div>

      <div>
        <p className="text-base block">{net.userName()}</p>
        <span className="text-[#8A8888] text-[10px] font-bold block">{net.email()}</span>
      </div>
    </div>
  )
}