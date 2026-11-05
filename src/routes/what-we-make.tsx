import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/what-we-make")({
  beforeLoad: () => {
    throw redirect({ to: "/portfolio", replace: true, statusCode: 301 });
  },
});
