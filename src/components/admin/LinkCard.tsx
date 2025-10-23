import { GripVertical, ExternalLink, Eye, EyeOff, Pencil, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface LinkCardProps {
  id: string;
  imageUrl: string;
  title: string;
  url: string;
  position?: number;
  isActive: boolean;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const LinkCard = ({
  id,
  imageUrl,
  title,
  url,
  position,
  isActive,
  onToggle,
  onEdit,
  onDelete,
}: LinkCardProps) => {
  return (
    <Card className="p-4 hover:shadow-card transition-all duration-300 border-border bg-card group">
      <div className="flex items-center gap-3">
        <button className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground transition-colors">
          <GripVertical className="h-5 w-5" />
        </button>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground truncate">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ExternalLink className="h-3 w-3" />
            <span className="truncate">{url}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {isActive ? (
              <Eye className="h-4 w-4 text-primary" />
            ) : (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            )}
            <Switch checked={isActive} onCheckedChange={() => onToggle(id)} />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
