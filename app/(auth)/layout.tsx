import Link from "next/link";
import { CalendarClock, Layers, Sparkles } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <aside className="brand-mesh relative hidden flex-col justify-between p-10 lg:flex">
        <Link href="/">
          <Logo />
        </Link>

        <div className="max-w-md space-y-8">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-balance">
            Un seul endroit pour toute ta présence sociale.
          </h1>
          <p className="text-lg text-muted-foreground">
            Planifie, programme et publie sur Instagram, Facebook et TikTok —
            sans jongler entre dix onglets.
          </p>
          <ul className="space-y-4">
            {[
              { icon: Layers, text: "Publie sur plusieurs plateformes en un clic" },
              { icon: CalendarClock, text: "Programme tes posts et vois-les dans un calendrier" },
              { icon: Sparkles, text: "Un tableau de bord clair, pensé pour les créateurs" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SocialAI. Conçu pour les créateurs.
        </p>
      </aside>

      {/* Form panel */}
      <main className="relative flex flex-col items-center justify-center p-6 sm:p-10">
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>
        <div className="lg:hidden mb-8">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="w-full max-w-sm animate-fade-in">{children}</div>
      </main>
    </div>
  );
}
