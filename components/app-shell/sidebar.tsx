"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "./nav";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-card lg:flex">
      <div className="flex h-16 items-center px-6">
        <Link href="/dashboard" className="focus-ring rounded-md">
          <Logo />
        </Link>
      </div>

      <div className="px-4">
        <Link href="/posts/new" className="block">
          <Button className="w-full" size="lg">
            <Plus className="h-4 w-4" />
            Nouveau post
          </Button>
        </Link>
      </div>

      <nav className="mt-6 flex flex-1 flex-col gap-1 px-4">
        {NAV_ITEMS.map((item) => {
          const active = item.match?.(pathname) ?? pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                active
                  ? "bg-primary/10 font-semibold text-primary before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-primary"
                  : "font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm font-semibold">Comptes en démo</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Les connexions Instagram, Facebook et TikTok sont simulées pour ce MVP.
          </p>
        </div>
      </div>
    </aside>
  );
}
