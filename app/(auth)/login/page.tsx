import type { Metadata } from "next";
import { Suspense } from "react";
import { isGoogleEnabled } from "@/lib/auth";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Connexion" };

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm googleEnabled={isGoogleEnabled} />
    </Suspense>
  );
}
