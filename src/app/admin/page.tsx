"use client"

import Image from "next/image"
import { useState } from "react";
import { LinkCard } from "@/components/admin/LinkCard";
import { AddLinkDialog } from "@/components/admin/AddLinkDialog";
import { PreviewSection } from "@/components/admin/PreviewSection";
import { toast } from "@/hooks/use-toast";
import { LinksType } from "@/interfaces/userData";


const Admin = () => {
    const [username, setUsername] = useState("yourname");
    const [bio, setBio] = useState("Welcome to my page! 🚀");
    const [links, setLinks] = useState<LinksType[]>([
        {
            id: "1",
            imageUrl: "",
            title: "My Portfolio",
            url: "https://example.com/portfolio",
            position: 1,
            isActive: true,
        },
        {
            id: "2",
            imageUrl: "",
            title: "GitHub Profile",
            url: "https://github.com/username",
            position: 2,
            isActive: true,
        },
        {
            id: "3",
            imageUrl: "",
            title: "Blog",
            url: "https://example.com/blog",
            position: 3,
            isActive: false,
        },
    ]);

    const handleAddLink = (title: string, url: string,) => {
        const newLink: LinksType = {
            id: Date.now().toString(),
            imageUrl: "https://vwzciaaeijiwhnvlfzni.supabase.co/storage/v1/object/public/user-avatars/link-images/link-default.png",
            title,
            url,
            position: links.length + 1,
            isActive: true,
        };
        setLinks([...links, newLink]);
        toast({
            title: "Link added",
            description: "Your new link has been added successfully.",
        });
    };

    const handleToggleLink = (id: string) => {
        setLinks(
            links.map((link) =>
                link.id === id ? { ...link, isActive: !link.isActive } : link
            )
        );
    };

    const handleEditLink = (id: string) => {
        toast({
            title: "Edit feature",
            description: "Edit functionality coming soon!",
        });
    };

    const handleDeleteLink = (id: string) => {
        setLinks(links.filter((link) => link.id !== id));
        toast({
            title: "Link deleted",
            description: "The link has been removed from your page.",
            variant: "destructive",
        });
    };

    const handleAvatarChange = () => {
        toast({
            title: "Upload feature",
            description: "Avatar upload coming soon!",
        });
    };

    return (
        <div className="min-h-screen bg-[#F1F0EE]">
            <header className="sticky top-0 z-10 p-5 bg-[#F1F0EE] text-[1.5rem] font-bold border-b border-b-gray-200 mb-[2%]">
                Edit Profile and Add Links
            </header>




            <main className="px-[5%] flex justify-between w-full">

                <div className="w-[50%]">
                    <div className="PROFILEADD flex flex-col gap-3 mb-[4%]">
                        <div className="PROFILE flex items-center gap-2.5">
                            <div className="bg-black rounded-full w-[64px] h-[64px]">
                                <Image
                                    src=""
                                    alt=""
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold hover:underline cursor-pointer text-[1.2rem]">Favour Olaleru</span>
                                <span className="text-gray-600 hover:underline cursor-pointer text-sm">Software Engineer and Technical Writer</span>
                                <div>
                                    {/* MAP SOCIALS */}
                                    <span className="cursor-pointer w-fit flex items-center justify-center rounded-full border border-gray-200 bg-transparent hover:bg-white p-2">
                                        <Image
                                            src="/icons/plus-dark.svg"
                                            alt=""
                                            width={7}
                                            height={7}
                                            className="rounded-full"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="ADDBUTTON w-full">
                            <button className="border-none outline-none cursor-pointer text-white flex items-center gap-2.5 bg-purple-600 hover:bg-purple-950 rounded-full w-full p-3 font-bold justify-center">
                                <Image
                                    src="/icons/plus.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="rounded-full"
                                />
                                Add
                            </button>
                        </div>

                    </div>
                    <div className="LINKS">
                        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-foreground">Your Links</h2>
                                <span className="text-sm text-muted-foreground">
                                    {links.filter((l) => l.isActive).length} active
                                </span>
                            </div>

                            <div className="space-y-3 mb-4">
                                {links.map((link) => (
                                    <LinkCard
                                        key={link.id}
                                        id={link.id!}
                                        imageUrl={link.imageUrl}
                                        title={link.title}
                                        url={link.url}
                                        position={link.position}
                                        isActive={link.isActive}
                                        onToggle={handleToggleLink}
                                        onEdit={handleEditLink}
                                        onDelete={handleDeleteLink}
                                    />
                                ))}
                            </div>

                            <AddLinkDialog onAdd={handleAddLink} />
                        </div>
                    </div>
                </div>
                

                <div className="PREVIEW w-[30%]">
                    <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <PreviewSection
                            username={username}
                            bio={bio}
                            links={links}
                        />
                    </div>
                </div>


                


            </main>
        </div>
    );
};

export default Admin;
