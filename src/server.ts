import { renderErrorPage } from "@/lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

type WorkerEnv = {
  DB?: D1Database;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (module) => (module as { default?: ServerEntry }).default ?? (module as unknown as ServerEntry),
    );
  }
  return serverEntryPromise;
}

function errorResponse() {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

async function handleLeadSubmit(request: Request, env: WorkerEnv) {
  if (!env.DB) {
    return Response.json({ ok: false, error: "missing_db" }, { status: 500 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json<Record<string, unknown>>();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const sourcePath = typeof payload.sourcePath === "string" ? payload.sourcePath : "/";

  if (!email || !email.includes("@")) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  await env.DB.prepare(
    `INSERT INTO leads (email, source_path, utm_source, utm_medium, utm_campaign)
     VALUES (?, ?, ?, ?, ?)`,
  )
    .bind(email, sourcePath, null, null, null)
    .run();

  return Response.json({ ok: true });
}

export default {
  async fetch(request: Request, env: WorkerEnv, ctx: ExecutionContext) {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/leads") {
      return handleLeadSubmit(request, env);
    }

    try {
      const handler = await getServerEntry();
      return handler.fetch(request, env, ctx);
    } catch (error) {
      console.error(error);
      return errorResponse();
    }
  },
};
