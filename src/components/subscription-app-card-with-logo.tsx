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

export function SubscriptionAppCardWithLogo({ app }: SubscriptionAppCardProps) {
  // Function to render the appropriate logo based on app name
  const renderLogo = () => {
    switch (app.name) {
      case "Netflix":
        return (
          <div className="flex items-center justify-center h-16">
            <div className="w-8 h-16 bg-red-600 rounded-l-sm"></div>
            <div className="w-8 h-16 bg-red-600"></div>
            <div className="w-8 h-16 bg-red-600 rounded-r-sm"></div>
          </div>
        );
      case "Spotify":
        return (
          <div className="flex items-center justify-center h-16 w-16 bg-green-600 rounded-full">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            </div>
          </div>
        );
      case "YouTube Premium":
        return (
          <div className="flex flex-col items-center">
            <div className="w-16 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>
        );
      case "Canva Pro":
        return (
          <div className="flex items-center justify-center h-16 w-16 bg-blue-500 rounded-lg">
            <span className="text-white text-2xl font-bold">C</span>
          </div>
        );
      case "Disney+":
        return (
          <div className="flex items-center justify-center h-16 w-16 bg-blue-700 rounded-full">
            <span className="text-white text-2xl font-bold">D+</span>
          </div>
        );
      case "Adobe CC":
        return (
          <div className="flex items-center justify-center h-16 w-16 bg-red-700 rounded-lg">
            <span className="text-white text-xl font-bold">Cc</span>
          </div>
        );
      default:
        return <div className="h-16 w-16 bg-gray-300 rounded"></div>;
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div
        className={`${app.color} ${app.textColor} p-6 flex flex-col items-center justify-center h-40`}
      >
        {renderLogo()}
        <h3 className="text-xl font-bold mt-4">{app.name}</h3>
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
