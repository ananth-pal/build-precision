import { createFileRoute } from "@tanstack/react-router";
import Heritage from "@/pages/Heritage";

export const Route = createFileRoute("/about/heritage")({
  component: Heritage,
});
