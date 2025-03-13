import { CalendarDays, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SubscriptionInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Subscription</CardTitle>
        <CardDescription>
          You are currently on the Standard plan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-muted-foreground" />
            <div className="text-sm text-muted-foreground">
              Renews on May 15, 2023
            </div>
          </div>
          <Button variant="outline" size="sm">
            Change Plan
          </Button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <div>Monthly data usage</div>
            <div className="font-medium">45.9 GB / 100 GB</div>
          </div>
          <Progress value={45} />
        </div>
        <div className="rounded-lg border p-4">
          <div className="font-medium">Standard Plan Features</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Access to all content</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Watch on two devices at a time</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>HD available</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Billing History
        </Button>
      </CardFooter>
    </Card>
  );
}
