import { Music, Play, Video, PenTool, Film, Paintbrush } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SubscriptionApp {
  name: string;
  description: string;
  price: string;
  color: string;
  textColor: string;
}

interface SubscriptionAppCardProps {
  app: SubscriptionApp;
}

export function SubscriptionAppCard({ app }: SubscriptionAppCardProps) {
  // Function to render the appropriate icon based on app name
  const renderIcon = () => {
    switch (app.name) {
      case "Netflix":
        return <Film className="h-12 w-12" />;
      case "Spotify":
        return <Music className="h-12 w-12" />;
      case "YouTube Premium":
        return <Play className="h-12 w-12" />;
      case "Canva Pro":
        return <PenTool className="h-12 w-12" />;
      case "Disney+":
        return <Video className="h-12 w-12" />;
      case "Adobe CC":
        return <Paintbrush className="h-12 w-12" />;
      default:
        return <Play className="h-12 w-12" />;
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div
        className={`${app.color} ${app.textColor} p-6 flex flex-col items-center justify-center h-40`}
      >
        {renderIcon()}
        <h3 className="text-xl font-bold mt-2">{app.name}</h3>
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{app.description}</p>
          <p className="font-medium">{app.price}</p>
        </div>
      </CardContent>
    </Card>
  );
}
