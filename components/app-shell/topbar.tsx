"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LogOut, Menu, Plus, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_ITEMS } from "./nav";
import { cn, initials } from "@/lib/utils";

type UserInfo = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export function Topbar({ user }: { user: UserInfo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileNav(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const fallback = initials(user.name, user.email);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur sm:px-6">
      {/* Mobile: menu toggle + logo */}
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted lg:hidden"
        onClick={() => setMobileNav(true)}
        aria-label="Ouvrir le menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="lg:hidden">
        <Logo showWordmark={false} />
      </div>

      <div className="flex-1" />

      <Link href="/posts/new" className="hidden sm:block">
        <Button size="sm" variant="accent">
          <Plus className="h-4 w-4" />
          Créer
        </Button>
      </Link>

      <ThemeToggle />

      {/* User menu */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="focus-ring flex items-center gap-2 rounded-full"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
        >
          <Avatar
            src={user.image}
            name={user.name}
            fallback={fallback}
            size={36}
          />
        </button>

        {menuOpen && (
          <div
            role="menu"
            className="absolute right-0 mt-2 w-60 origin-top-right rounded-lg border border-border bg-popover p-1.5 shadow-pop animate-scale-in"
          >
            <div className="px-3 py-2">
              <p className="truncate text-sm font-semibold">
                {user.name ?? "Créateur"}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {user.email}
              </p>
            </div>
            <div className="my-1 h-px bg-border" />
            <Link
              href="/settings"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
              role="menuitem"
            >
              Paramètres du compte
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive hover:bg-destructive/10"
              role="menuitem"
            >
              <LogOut className="h-4 w-4" />
              Se déconnecter
            </button>
          </div>
        )}
      </div>

      {/* Mobile nav drawer */}
      {mobileNav && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setMobileNav(false)}
          />
          <div className="absolute left-0 top-0 flex h-full w-72 flex-col bg-card p-4 shadow-pop animate-fade-in">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setMobileNav(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
                aria-label="Fermer le menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Link href="/posts/new" className="mt-6 block">
              <Button className="w-full" size="lg">
                <Plus className="h-4 w-4" />
                Nouveau post
              </Button>
            </Link>
            <nav className="mt-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = item.match?.(pathname) ?? pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
