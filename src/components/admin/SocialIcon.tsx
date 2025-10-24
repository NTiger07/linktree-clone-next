"use client"

import Image from "next/image"
import { SocialsType } from "@/interfaces/userData"
import { FC, useState } from "react"
import Dialog from "../Dialog"
import EditSocial from "./EditSocial"

// const SocialIcon: FC<SocialsType> = ({ platform, url }) => {
const SocialIcon = () => {
    // switch statement

    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <>
            <Dialog
                open={dialogOpen}
                onOpenChange={() => setDialogOpen(false)}
                title="Edit Social Icon"
                size="lg"
                className="bg-white"
            >
                <EditSocial />
            </Dialog>

            <div className="cursor-pointer bg-black rounded-full w-[24px] h-[24px]" onClick={() => setDialogOpen(true)}>
                <Image
                    src=""
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full"
                />
            </div>
        </>
    )
}

export default SocialIcon