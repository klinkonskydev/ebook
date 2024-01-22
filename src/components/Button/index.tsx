import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export default function Button({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {

  return (
    <Link href="https://pay.hotmart.com/S90002513K" className={"text-[#B2E3FF] border-0 py-2 px-4 bg-[#004C77] rounded-sm flex items-center justify-center " + className} {...props}  />
  )
}