import { ReactNode } from "react";
import { AlignRight, CircleUser } from "lucide-react";

import Image from "next/image";

import DashboardNavigation from "../components/dashboard/DashboardNavigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
          <Image src="/images/logo.svg" alt="Logo" width={115} height={15} />

          <nav className="text-nav hidden md:flex md:flex-row md:items-center md:gap-5 md:text-sm md:px-2.5 lg:gap-6">
            <DashboardNavigation />
          </nav>

          {/* MENU Sidebar */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="flex items-center shrink-0 md:hidden"
                variant="transparent"
                size="icon"
              >
                <AlignRight className="w-5 h-5" />
                <span className="text-[12px] font-light">[Menu]</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <DashboardNavigation />
              </nav>
            </SheetContent>
          </Sheet>

          {/* USER Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>

            {/* Dropdown Menu Content */}
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main>{children}</main>
      </div>
    </>
  );
}
