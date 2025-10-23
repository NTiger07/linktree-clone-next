"use client"

import { useState } from "react";
import { LinkCard } from "@/components/LinkCard";
import { AddLinkDialog } from "@/components/AddLinkDialog";
import { ProfileSection } from "@/components/ProfileSection";
import { PreviewSection } from "@/components/PreviewSection";
import { StatsCards } from "@/components/StatsCards";
import { toast } from "@/hooks/use-toast";

interface Link {
    id: string;
    title: string;
    url: string;
    isActive: boolean;
}

const Admin = () => {
    const [username, setUsername] = useState("yourname");
    const [bio, setBio] = useState("Welcome to my page! 🚀");
    const [links, setLinks] = useState<Link[]>([
        {
            id: "1",
            title: "My Portfolio",
            url: "https://example.com/portfolio",
            isActive: true,
        },
        {
            id: "2",
            title: "GitHub Profile",
            url: "https://github.com/username",
            isActive: true,
        },
        {
            id: "3",
            title: "Blog",
            url: "https://example.com/blog",
            isActive: false,
        },
    ]);

    const handleAddLink = (title: string, url: string) => {
        const newLink: Link = {
            id: Date.now().toString(),
            title,
            url,
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
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            LinkTree Admin
                        </h1>
                        <div className="text-sm text-muted-foreground">
                            Welcome back, <span className="font-semibold text-foreground">@{username}</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Stats */}
                <div className="mb-8 animate-fade-in">
                    <StatsCards />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Profile & Links */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                            <ProfileSection
                                username={username}
                                bio={bio}
                                onUsernameChange={setUsername}
                                onBioChange={setBio}
                                onAvatarChange={handleAvatarChange}
                            />
                        </div>

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
                                        {...link}
                                        onToggle={handleToggleLink}
                                        onEdit={handleEditLink}
                                        onDelete={handleDeleteLink}
                                    />
                                ))}
                            </div>

                            <AddLinkDialog onAdd={handleAddLink} />
                        </div>
                    </div>

                    {/* Right Column - Preview */}
                    <div className="lg:col-span-1">
                        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                            <PreviewSection
                                username={username}
                                bio={bio}
                                links={links}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Admin;
