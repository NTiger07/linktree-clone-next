import { ExternalLink, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Link {
  id: string;
  title: string;
  url: string;
  isActive: boolean;
}

interface PreviewSectionProps {
  username: string;
  bio: string;
  avatarUrl?: string;
  links: Link[];
}

export const PreviewSection = ({ username, bio, avatarUrl, links }: PreviewSectionProps) => {
  const activeLinks = links.filter((link) => link.isActive);

  return (
    <Card className="p-6 shadow-card border-border sticky top-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-card-foreground">Preview</h2>
        <Button variant="outline" size="sm">
          <ExternalLink className="mr-2 h-4 w-4" />
          View Public Page
        </Button>
      </div>

      <div className="bg-gradient-primary rounded-xl p-8 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <Avatar className="h-24 w-24 mx-auto border-4 border-white/20">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="bg-white/20 text-white">
              <User className="h-10 w-10" />
            </AvatarFallback>
          </Avatar>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              @{username || "yourname"}
            </h3>
            <p className="text-white/90 text-sm">
              {bio || "Your bio will appear here..."}
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {activeLinks.length === 0 ? (
              <p className="text-white/70 text-sm">No active links yet</p>
            ) : (
              activeLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="secondary"
                  className="w-full bg-white/95 hover:bg-white text-foreground font-medium"
                >
                  {link.title}
                </Button>
              ))
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
