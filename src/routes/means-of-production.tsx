import { createFileRoute } from "@tanstack/react-router";
import Technologies from "@/pages/Technologies";

export const Route = createFileRoute("/means-of-production")({
  component: Technologies,
});
