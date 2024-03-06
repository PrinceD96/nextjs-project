"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
  ];

  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Tabs
          defaultValue={pathname}
          className="w-[400px]"
          onValueChange={(value) => push(value)}
        >
          <TabsList>
            <TabsTrigger value={routes[0].path}>{routes[0].name}</TabsTrigger>
            <TabsTrigger value={routes[1].path}>{routes[1].name}</TabsTrigger>
          </TabsList>
        </Tabs>
        {children}
      </body>
    </html>
  );
}
