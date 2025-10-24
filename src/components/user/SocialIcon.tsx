"use client"

import Image from "next/image"
import { SocialsType } from "@/interfaces/userData"
import { FC } from "react"

// const SocialIcon: FC<SocialsType> = ({ platform, url }) => {
const SocialIcon = () => {
    // switch statement
    return (
        <a href="" target="_blank" rel="noopener noreferrer">
            <div className="bg-black rounded-full w-[24px] h-[24px]">
                <Image
                    src=""
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full"
                />
            </div>
        </a>

    )
}

export default SocialIcon