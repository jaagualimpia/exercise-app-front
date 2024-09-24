"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export const IconComponent = ({ redirect, iconName}: { redirect: string, iconName: string}) => {
    const pathname = usePathname()

    const result = pathname === redirect ? (
        <Link href={redirect} className="h-fit">
            <span className="material-symbols-outlined text-[#278EA5] underline text-center w-[100%] mb-5 !text-[3em] cursor-pointer">
                {iconName}
            </span>
        </Link>
    ) : (
        <Link href={redirect} className="h-fit">
            <span className="material-symbols-outlined text-center w-[100%] mb-5 !text-[3em] cursor-pointer hover:text-[#21E6C1]">
                {iconName}
            </span>
        </Link>
    )

    return (result)
}