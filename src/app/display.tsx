import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { Children } from "react";

export default function Display() {
  return (
    <>
      <header className="flex items-center justify-between bg-emerald-800 p-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo-main.jpg"
            alt="Cafe Logo"
            className="dark:invert rounded-md"
            width={100}
            height={100}
          />
          <h2 className={cn("text-white", "text-lg", "font-semibold")}>
            Art Café
          </h2>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-20">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={cn(
                  "text-white",
                  "bg-transparent",
                  "rounded-lg",
                  "hover:bg-emerald-600",
                  "transition-colors",
                  "duration-200",
                  "p-2"
                )}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/menu"
                className={cn(
                  "text-white",
                  "bg-transparent",
                  "rounded-lg",
                  "hover:bg-emerald-600",
                  "transition-colors",
                  "duration-200",
                  "p-2"
                )}
              >
                Menu
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={cn(
                  "text-white",
                  "bg-transparent",
                  "rounded-lg",
                  "hover:bg-emerald-600",
                  "transition-colors",
                  "duration-200",
                  "p-2"
                )}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={cn(
                  "text-white",
                  "bg-transparent",
                  "rounded-lg",
                  "hover:bg-emerald-600",
                  "transition-colors",
                  "duration-200",
                  "p-2"
                )}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
