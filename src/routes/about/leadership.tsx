import { createFileRoute } from "@tanstack/react-router";
import Leadership from "@/pages/Leadership";

export const Route = createFileRoute("/about/leadership")({
  component: Leadership,
});
