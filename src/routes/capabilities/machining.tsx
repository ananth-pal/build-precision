import { createFileRoute } from "@tanstack/react-router";
import Machining from "@/pages/CapMachining";

export const Route = createFileRoute("/capabilities/machining")({
  component: Machining,
});
