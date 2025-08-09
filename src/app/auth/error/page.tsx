"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function normalize(err?: string | null) {
  if (!err) return "An unexpected error occurred.";
  try {
    const s = decodeURIComponent(err);
    if (/Can\'t reach database server|Can%27t reach database server/i.test(s)) {
      return "We’re having trouble reaching the database. Please try again shortly.";
    }
    if (/CredentialsSignin/i.test(s)) return "Invalid email or password.";
    return "Unable to complete the request. Please try again.";
  } catch {
    return "Unable to complete the request. Please try again.";
  }
}

export default function AuthErrorPage() {
  const sp = useSearchParams();
  const err = sp.get("error");
  const message = normalize(err);
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="panel-modern max-w-lg w-full p-8 text-center space-y-4">
        <div className="text-2xl font-semibold">Something went wrong</div>
        <p className="text-sm text-muted-foreground">{message}</p>
        <div className="flex gap-2 justify-center pt-2">
          <Link className="rounded-md bg-primary text-primary-foreground px-4 py-2" href="/auth/signin">Back to Login</Link>
          <button className="rounded-md border px-4 py-2" onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    </div>
  );
} 