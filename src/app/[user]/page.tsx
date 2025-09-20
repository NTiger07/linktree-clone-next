"use client"

import LinkItem from "@/components/LinkItem"
import SocialIcon from "@/components/SocialIcon"
import Dialog from "../../components/Dialog"
import { useState } from "react"

const User = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    return (
        <>
            <Dialog
                open={dialogOpen}
                onOpenChange={() => setDialogOpen(!dialogOpen)}
                title="Share Linktree"
                size="lg"
                className="bg-white"
            >
                <div>Dialog</div>
            </Dialog>
            <div className="bg-[#BCB8AF] min-h-screen flex justify-center w-full text-blue-500 no-scrollbar">

                <div className="mt-[3%] text-base rounded-[2rem] bg-[#DDDBDC] min-h-[85vh] w-screen md:w-[60%] lg:w-[45%] p-7">

                    <div className="AUTHSHARE flex justify-between w-full h-[2rem] mb-[4%]">
                        <div className="bg-white/70 rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center cursor-pointer hover:bg-white active:bg-white" onClick={() => setDialogOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 256 256"><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"></path></svg>
                        </div>
                    </div>

                    <div className="HEADER flex flex-col items-center">
                        <div className="bg-black rounded-full w-[100px] h-[100px]">
                            {/* <img src="" alt="" /> */}

                        </div>
                        <span className="font-semibold text-[1.5rem]">Honey Pastry</span>
                        <span className="text-[14px] md:text-base">Good pastry for a good day</span>
                    </div>

                    <div className="LINKS flex flex-col items-center mt-[7%] gap-4 mb-[7%]">
                        <LinkItem />
                        <LinkItem />
                        <LinkItem />
                        <LinkItem />
                        <LinkItem />
                    </div>

                    <div className="SOCIALS flex flex-wrap items-center justify-center gap-2">
                        <SocialIcon />
                        <SocialIcon />
                        <SocialIcon />
                        <SocialIcon />
                        <SocialIcon />
                    </div>
                </div>
            </div>
        </>

    )
}

export default User