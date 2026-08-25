import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LeadForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, sourcePath: window.location.pathname }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setEmail("");
    setStatus("success");
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="min-h-10 flex-1 rounded-md border border-neutral-300 px-3 text-sm outline-none focus:border-neutral-950"
      />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending" : "Get checklist"}
      </Button>
      {status === "success" && <p className="text-sm text-green-700 sm:self-center">Sent.</p>}
      {status === "error" && <p className="text-sm text-red-700 sm:self-center">Try again.</p>}
    </form>
  );
}
