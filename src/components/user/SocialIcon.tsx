import { SocialsType } from "@/interfaces/userData"
import { FC } from "react"

const SocialIcon:FC<SocialsType> = ({platform, url}) => {
    // switch statement
    return (
            <a href={url} target="_blank" rel="noopener noreferrer">
            <span className="bg-black rounded-full w-[2rem] h-[2rem]">
                {/* <img src="" alt="" /> */}
            </span>

            </a>

    )
}

export default SocialIcon