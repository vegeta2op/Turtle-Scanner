"use client";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useState } from "react";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof schema>;

function normalizeAuthError(err?: string | null) {
  if (!err) return null;
  try {
    const decoded = decodeURIComponent(err);
    if (/Can\'t reach database server|Can%27t reach database server/i.test(decoded)) {
      return "We’re having trouble reaching the database. Please try again in a minute. If the issue persists, contact support.";
    }
    if (/CredentialsSignin/i.test(decoded)) return "Invalid email or password.";
    return "Unable to sign in right now. Please try again.";
  } catch {
    return "Unable to sign in right now. Please try again.";
  }
}

export default function SignInPage() {
  const { register, handleSubmit, formState } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: FormValues) => {
    setError(null);
    const res = await signIn("credentials", { ...values, redirect: false });
    if (res?.error) {
      setError(normalizeAuthError(res.error));
      return;
    }
    // Success → go to scans
    window.location.assign("/scans");
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center p-6">
      <div className="space-y-4">
        <div className="text-4xl md:text-5xl font-extrabold tracking-tight">Welcome to Turtle</div>
        <p className="text-sm text-muted-foreground max-w-md">
          Securely sign in to continue. Your credentials are transmitted over HTTPS and never stored in the browser.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="panel-modern p-6 md:p-8 space-y-4 w-full">
        <div className="text-xl font-semibold">Sign in</div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">Email</label>
          <input id="email" inputMode="email" autoCapitalize="none" autoCorrect="off" className="w-full rounded-md bg-background/80 px-3 py-2 outline-none ring-1 ring-inset ring-border/20 focus:ring-primary/40" type="email" {...register("email")} />
          {formState.errors.email && (<p className="text-xs text-red-500">{formState.errors.email.message}</p>)}
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm">Password</label>
          <input id="password" className="w-full rounded-md bg-background/80 px-3 py-2 outline-none ring-1 ring-inset ring-border/20 focus:ring-primary/40" type="password" {...register("password")} />
          {formState.errors.password && (<p className="text-xs text-red-500">{formState.errors.password.message}</p>)}
        </div>
        {error && (
          <div className="text-xs text-red-500 bg-red-500/10 border border-red-500/20 rounded px-3 py-2">
            {error}
          </div>
        )}
        <button disabled={formState.isSubmitting} className="w-full rounded-md bg-primary text-primary-foreground py-2 font-medium hover:opacity-90 transition disabled:opacity-60">
          {formState.isSubmitting ? "Signing in..." : "Sign in"}
        </button>
        <p className="text-sm">No account? <Link href="/auth/signup" className="underline">Create one</Link></p>
      </form>
    </div>
  );
}


