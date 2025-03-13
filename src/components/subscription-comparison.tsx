import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SubscriptionComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Subscription Services Comparison</CardTitle>
        <CardDescription>
          Compare features across leading subscription platforms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Feature</TableHead>
              <TableHead>Netflix</TableHead>
              <TableHead>Spotify</TableHead>
              <TableHead>YouTube Premium</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">HD Streaming</TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <X className="h-5 w-5 text-red-500" />
              </TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Offline Downloads</TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ad-Free Experience</TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Family Sharing</TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <X className="h-5 w-5 text-red-500" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Original Content</TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
              <TableCell>
                <Check className="h-5 w-5 text-green-500" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Starting Price</TableCell>
              <TableCell>Rp.15.000,00/mo</TableCell>
              <TableCell>Rp.18.000,00/mo</TableCell>
              <TableCell>Rp.20.000,00/mo</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
