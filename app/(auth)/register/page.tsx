import type { Metadata } from "next";
import { isGoogleEnabled } from "@/lib/auth";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = { title: "Inscription" };

export default function RegisterPage() {
  return <RegisterForm googleEnabled={isGoogleEnabled} />;
}
