import { CreditCard, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function PaymentMethod() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment methods</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup defaultValue="card1">
          <div className="flex items-center space-x-2 rounded-lg border p-4">
            <RadioGroupItem value="card1" id="card1" />
            <Label htmlFor="card1" className="flex-1 flex items-center gap-4">
              <div className="h-10 w-16 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-muted-foreground">Expires 04/2024</p>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-lg border p-4">
            <RadioGroupItem value="card2" id="card2" />
            <Label htmlFor="card2" className="flex-1 flex items-center gap-4">
              <div className="h-10 w-16 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Mastercard ending in 5678</p>
                <p className="text-sm text-muted-foreground">Expires 08/2025</p>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </Label>
          </div>
        </RadioGroup>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Payment Method
        </Button>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="rounded-lg border p-4 w-full">
          <div className="font-medium">Billing Information</div>
          <div className="mt-2 space-y-1 text-sm">
            <p>John Doe</p>
            <p>123 Main Street</p>
            <p>Anytown, CA 12345</p>
            <p>United States</p>
          </div>
          <Button variant="link" className="mt-2 h-auto p-0 text-sm">
            Edit Billing Information
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
