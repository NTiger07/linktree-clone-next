import Image from "next/image"

const LinkItem = () => {
    return (
        <div className="bg-white w-full flex items-center justify-between p-3 h-[4.5rem] rounded">
            <Image src="/images/selena.png" width={48} height={48} alt="" className="rounded" />
            <span className="w-[70%] text-black text-center font-medium leading-[1.2] overflow-ellipsis text-[14px] md:text-base">Shop I Said I Love You First - Exclusive Rare Beauty CD Box Set</span>
            <div className="cursor-pointer mr-[2%]">
                <Image src="/icons/3dots.svg" width={3} height={3} alt="" className="" />
            </div>
        </div>
    )
}

export default LinkItem