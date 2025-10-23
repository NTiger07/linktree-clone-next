import { Camera, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileSectionProps {
  username: string;
  bio: string;
  avatarUrl?: string;
  onUsernameChange: (username: string) => void;
  onBioChange: (bio: string) => void;
  onAvatarChange: () => void;
}

export const ProfileSection = ({
  username,
  bio,
  avatarUrl,
  onUsernameChange,
  onBioChange,
  onAvatarChange,
}: ProfileSectionProps) => {
  return (
    <Card className="p-6 shadow-card border-border">
      <h2 className="text-xl font-bold mb-4 text-card-foreground">Profile Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Avatar className="h-20 w-20">
              <AvatarImage src={avatarUrl} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                <User className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={onAvatarChange}
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-card-foreground">Profile Picture</h3>
            <p className="text-sm text-muted-foreground">Upload a new avatar</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="yourname"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Your page will be at: linktr.ee/{username || "yourname"}
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell the world about yourself..."
            value={bio}
            onChange={(e) => onBioChange(e.target.value)}
            rows={3}
          />
        </div>
      </div>
    </Card>
  );
};
