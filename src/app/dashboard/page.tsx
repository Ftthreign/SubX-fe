"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, CreditCard, Home, LogOut, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SubscriptionInfo } from "@/components/subscription-info";
import { PaymentMethod } from "@/components/payment-method";
import { ProfileSettings } from "@/components/profile-settings";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            StreamSub
          </span>
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-primary"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Bell className="h-4 w-4" />
            Notifications
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your subscription and account settings
              </p>
            </div>
            <Button>Upgrade Plan</Button>
          </div>
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-4"
          >
            <TabsList>
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <SubscriptionInfo />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Watch History</CardTitle>
                    <CardDescription>
                      Your recently watched content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-12 w-16 rounded bg-gray-200 dark:bg-gray-800"></div>
                        <div>
                          <p className="text-sm font-medium">Stranger Things</p>
                          <p className="text-xs text-muted-foreground">
                            Season 4, Episode 8
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-12 w-16 rounded bg-gray-200 dark:bg-gray-800"></div>
                        <div>
                          <p className="text-sm font-medium">The Crown</p>
                          <p className="text-xs text-muted-foreground">
                            Season 5, Episode 2
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-12 w-16 rounded bg-gray-200 dark:bg-gray-800"></div>
                        <div>
                          <p className="text-sm font-medium">Wednesday</p>
                          <p className="text-xs text-muted-foreground">
                            Season 1, Episode 5
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full">
                      View All
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Watchlist</CardTitle>
                    <CardDescription>Content you want to watch</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-12 w-16 rounded bg-gray-200 dark:bg-gray-800"></div>
                        <div>
                          <p className="text-sm font-medium">The Witcher</p>
                          <p className="text-xs text-muted-foreground">
                            Season 3
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-12 w-16 rounded bg-gray-200 dark:bg-gray-800"></div>
                        <div>
                          <p className="text-sm font-medium">Squid Game</p>
                          <p className="text-xs text-muted-foreground">
                            Season 1
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-12 w-16 rounded bg-gray-200 dark:bg-gray-800"></div>
                        <div>
                          <p className="text-sm font-medium">Bridgerton</p>
                          <p className="text-xs text-muted-foreground">
                            Season 2
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full">
                      View All
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Device Management</CardTitle>
                    <CardDescription>
                      Manage your connected devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                          <svg
                            className="h-4 w-4 text-gray-500 dark:text-gray-400"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              height="14"
                              rx="2"
                              ry="2"
                              width="20"
                              x="2"
                              y="3"
                            />
                            <line x1="8" x2="16" y1="21" y2="21" />
                            <line x1="12" x2="12" y1="17" y2="21" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">MacBook Pro</p>
                          <p className="text-xs text-muted-foreground">
                            Last active: Now
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                          <svg
                            className="h-4 w-4 text-gray-500 dark:text-gray-400"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              height="20"
                              rx="2"
                              ry="2"
                              width="14"
                              x="5"
                              y="2"
                            />
                            <line x1="12" x2="12" y1="18" y2="22" />
                            <line x1="8" x2="16" y1="22" y2="22" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">iPhone 13</p>
                          <p className="text-xs text-muted-foreground">
                            Last active: 2h ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                          <svg
                            className="h-4 w-4 text-gray-500 dark:text-gray-400"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                            <path d="M18 8h4v4h-4z" />
                            <path d="m15 12 5 5" />
                            <path d="m15 17 5-5" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Smart TV</p>
                          <p className="text-xs text-muted-foreground">
                            Last active: Yesterday
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="w-full">
                      Manage Devices
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="billing" className="space-y-4">
              <PaymentMethod />
            </TabsContent>
            <TabsContent value="profile" className="space-y-4">
              <ProfileSettings />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
