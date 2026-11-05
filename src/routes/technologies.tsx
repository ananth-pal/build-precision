import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/technologies")({
  beforeLoad: () => {
    throw redirect({ to: "/means-of-production", replace: true, statusCode: 301 });
  },
});
