import { createFileRoute } from "@tanstack/react-router";
import CapAssembly from "@/pages/CapAssembly";

export const Route = createFileRoute("/capabilities/assembly")({
  component: CapAssembly,
});
