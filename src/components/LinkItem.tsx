"use client"

import Image from "next/image"
import Dialog from "./Dialog"
import { FC, useState } from "react"
import { LinksType } from "@/interfaces/userData"

const LinkItem: FC<LinksType> = ({ imageUrl, title, url }) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <>
            <Dialog
                open={dialogOpen}
                onOpenChange={() => setDialogOpen(!dialogOpen)}
                title="Share link"
                size="lg"
                className="bg-white"
            >
                <div>Dialog</div>
            </Dialog>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="bg-white w-full flex items-center justify-between p-3 h-[4.5rem] rounded hover:bg-[#f3f3f1] active:bg-[#f3f3f1]">
                    <Image src={imageUrl} width={48} height={48} alt="" className="rounded" />
                    <span className="w-[70%] text-black text-center font-medium leading-[1.2] overflow-ellipsis text-[14px] md:text-base">{title}</span>
                    <div className="cursor-pointer flex rounded-full items-center justify-center w-[1.5rem] h-[1.5rem] hover:bg-[#d1d1cd] active:bg-[#d1d1cd]" onClick={(e) => { setDialogOpen(true); e.preventDefault(); e.stopPropagation() }}>
                        <Image src="/icons/3dots.svg" width={3} height={3} alt="" className="" />
                    </div>
                </div>
            </a>

        </>

    )
}

export default LinkItem