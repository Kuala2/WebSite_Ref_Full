const worker = {
  async fetch(request, env) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    }

    const url = new URL(request.url);
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    const pathname = decodeURIComponent(url.pathname);
    const hasExtension = /\/[^/]+\.[^/]+$/.test(pathname);
    const fallbackPath = pathname.endsWith("/")
      ? `${pathname}index.html`
      : hasExtension
        ? null
        : `${pathname}.html`;

    if (fallbackPath) {
      const fallbackUrl = new URL(fallbackPath, request.url);
      const fallbackResponse = await env.ASSETS.fetch(
        new Request(fallbackUrl, request),
      );

      if (fallbackResponse.status !== 404) {
        return fallbackResponse;
      }
    }

    const notFound = await env.ASSETS.fetch(
      new Request(new URL("/404.html", request.url), request),
    );

    return new Response(notFound.body, {
      status: 404,
      headers: notFound.headers,
    });
  },
};

export default worker;
