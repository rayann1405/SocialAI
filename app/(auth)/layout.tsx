import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { PlatformIcon } from "@/components/platform-icon";

import "./auth-background.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid min-h-screen lg:grid-cols-2">
      {/* Brand panel with generated atmosphere image */}
      <aside className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between">
        <Image
          src="/brand/auth-atmosphere.jpg"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />

        <div className="relative z-10 p-10">
          <Link href="/">
            <Logo inverted />
          </Link>
        </div>

        <div className="relative z-10 space-y-6 p-10 text-white">
          <h1 className="max-w-md font-heading text-3xl font-extrabold leading-tight tracking-tight text-balance">
            Un seul endroit pour toute ta présence sociale.
          </h1>
          <p className="max-w-sm text-white/80">
            Planifie, programme et publie sur Instagram, Facebook et TikTok.
          </p>
          <div className="flex items-center gap-5 text-white/70">
            {(["INSTAGRAM", "FACEBOOK", "TIKTOK"] as const).map((p) => (
              <span key={p} className="flex items-center gap-2 text-sm font-medium">
                <PlatformIcon platform={p} className="h-5 w-5" />
                {p === "INSTAGRAM"
                  ? "Instagram"
                  : p === "FACEBOOK"
                    ? "Facebook"
                    : "TikTok"}
              </span>
            ))}
          </div>
        </div>
      </aside>

      {/* Form panel */}
      <main className="brand-mesh relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-8">
        <div className="auth-bg lg:hidden" aria-hidden>
          <span className="auth-orb auth-orb-1" />
          <span className="auth-orb auth-orb-2" />
          <span className="auth-orb auth-orb-3" />
        </div>

        <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 sm:p-6">
          <Link href="/" className="lg:invisible">
            <Logo />
          </Link>
          <ThemeToggle />
        </header>

        <div className="relative z-10 w-full max-w-sm animate-fade-in">{children}</div>

        <p className="absolute bottom-4 z-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} SocialAI. Conçu pour les créateurs.
        </p>
      </main>
    </div>
  );
}
