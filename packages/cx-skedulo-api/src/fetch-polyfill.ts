import fetch, { Headers, Request, Response } from "node-fetch";

if (typeof window === "undefined") {
  if (!globalThis.fetch) {
    globalThis.fetch = fetch as any;
    globalThis.Headers = Headers as any;
    globalThis.Request = Request as any;
    globalThis.Response = Response as any;
  }
}
