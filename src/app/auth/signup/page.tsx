"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

type FormValues = z.infer<typeof schema>;

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    setError(null);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) router.push("/auth/signin");
    else setError(await res.text());
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center p-6">
      <div className="space-y-4">
        <div className="text-4xl md:text-5xl font-extrabold tracking-tight">Welcome to Turtle</div>
        <p className="text-sm text-muted-foreground max-w-md">Create your account securely to start exploring.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="panel-modern p-6 md:p-8 space-y-4 w-full">
        <div className="text-xl font-semibold">Create account</div>
        <div className="space-y-2">
          <label className="block text-sm" htmlFor="name">Name</label>
          <input id="name" className="w-full rounded-md bg-background/80 px-3 py-2 outline-none ring-1 ring-inset ring-border/20 focus:ring-primary/40" {...register("name")} />
          {formState.errors.name && (<p className="text-xs text-red-500">{formState.errors.name.message}</p>)}
        </div>
        <div className="space-y-2">
          <label className="block text-sm" htmlFor="email">Email</label>
          <input id="email" inputMode="email" autoCapitalize="none" autoCorrect="off" className="w-full rounded-md bg-background/80 px-3 py-2 outline-none ring-1 ring-inset ring-border/20 focus:ring-primary/40" type="email" {...register("email")} />
          {formState.errors.email && (<p className="text-xs text-red-500">{formState.errors.email.message}</p>)}
        </div>
        <div className="space-y-2">
          <label className="block text-sm" htmlFor="password">Password</label>
          <input id="password" className="w-full rounded-md bg-background/80 px-3 py-2 outline-none ring-1 ring-inset ring-border/20 focus:ring-primary/40" type="password" {...register("password")} />
          {formState.errors.password && (<p className="text-xs text-red-500">{formState.errors.password.message}</p>)}
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button disabled={formState.isSubmitting} className="w-full rounded-md bg-primary text-primary-foreground py-2 font-medium hover:opacity-90 transition disabled:opacity-60">
          {formState.isSubmitting ? "Creating..." : "Create account"}
        </button>
      </form>
    </div>
  );
}


