"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { PlatformIcon } from "@/components/platform-icon";
import { PLATFORM_LIST } from "@/lib/constants";

export function HomeHero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Full-bleed hero image */}
      <Image
        src="/brand/hero-creator.jpg"
        alt="Créatrice planifiant ses publications sur plusieurs réseaux"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center animate-hero-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/20" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:justify-center lg:pb-24">
        <div className="max-w-xl animate-fade-in space-y-6 text-white">
          <Logo inverted />

          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Toute ta présence sociale,{" "}
            <span className="text-primary">pilotée depuis un seul endroit</span>.
          </h1>

          <p className="max-w-lg text-lg text-white/80">
            Planifie et publie sur Instagram, Facebook et TikTok — sans jongler
            entre dix applications.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Commencer gratuitement
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto"
              >
                J’ai déjà un compte
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-2 text-white/75">
            {PLATFORM_LIST.map((p) => (
              <span key={p.id} className="flex items-center gap-2 text-sm font-medium">
                <PlatformIcon platform={p.id} className="h-5 w-5" />
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
