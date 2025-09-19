import LinkItem from "@/components/LinkItem"

const page = () => {
    return (
        <div className="bg-[#BCB8AF] h-screen flex justify-center w-full text-blue-500">

            <div className="mt-[3%] text-base rounded-[2rem] bg-[#DDDBDC] min-h-[85vh] w-screen md:w-[60%] lg:w-[45%] p-7">

                <div className="AUTHSHARE bg-black w-full h-[2rem] mb-[4%]"></div>

                <div className="HEADER flex flex-col items-center">
                    <div className="bg-black rounded-full w-[100px] h-[100px]">
                        <img src="" alt="" />

                    </div>
                    <span className="font-semibold text-[1.5rem]">Honey Pastry</span>
                    <span className="text-[14px] md:text-base">Good pastry for a good day</span>
                </div>

                <div className="LINKS flex flex-col items-center mt-[4%] gap-4">

                    <LinkItem />
                </div>

                <div className="SOCIALS flex flex-wrap items-center justify-center gap-2">
                    
                </div>



            </div>
        </div>
    )
}

export default page